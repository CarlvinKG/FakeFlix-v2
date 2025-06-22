import React, {useState, useEffect, useRef} from 'react'
import Fetch from './Fetch'
import {RiArrowLeftWideFill, RiArrowRightWideFill} from 'react-icons/ri'

const Movies = ({genre}) => {
    const genreID = genre;
    const movieList = Fetch('movie', genreID);

    const arrowRef =  useRef(null);
    const progBarRef = useRef(null);
    const sliderRef = useRef(null);

    const itemsCount = movieList.length;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    let itemsPerScreen = 2

    if (windowWidth < 500) {
        itemsPerScreen = 2;
    } else if (windowWidth < 800) {
        itemsPerScreen = 3;
    } else if (windowWidth < 1100) {
        itemsPerScreen = 4;
    } else if (windowWidth < 1400) {
        itemsPerScreen = 5;
    } else if (windowWidth >= 1400) {
        itemsPerScreen = 6;
    }

    const progBarItemCount = Math.ceil(itemsCount / itemsPerScreen);
    const windowSize = () => {
        setWindowWidth(window.innerWidth);
    }

    const handleArrowClick = (direction) => {
        const progressBar = progBarRef.current.closest('.movie-cards').querySelector('.progress-bar');
        const slider = arrowRef.current.closest('.slider-container').querySelector('.slider');
        const computedStyle = window.getComputedStyle(slider);
        const sliderIndex = parseInt(computedStyle.getPropertyValue("--slider-index"));

        if (direction === 'left') {
            if (sliderIndex - 1 < 0) {
                slider.style.setProperty('--slider-index', progBarItemCount - 1);
                progressBar.children[sliderIndex].classList.remove('activeItem');
                progressBar.children[progBarItemCount - 1].classList.add('activeItem');
            } else {
                slider.style.setProperty('--slider-index', sliderIndex - 1);
                progressBar.children[sliderIndex].classList.remove('activeItem');
                progressBar.children[sliderIndex - 1].classList.add('activeItem');
            }
        } else if (direction === 'right') {
            if (sliderIndex + 1 >= progBarItemCount) {
                slider.style.setProperty('--slider-index', 0);
                progressBar.children[sliderIndex].classList.remove('activeItem');
                progressBar.children[0].classList.add('activeItem');
            } else {
                slider.style.setProperty('--slider-index', sliderIndex + 1);
                progressBar.children[sliderIndex].classList.remove('activeItem');
                progressBar.children[sliderIndex + 1].classList.add('activeItem');
            }
        }
    }

    const handleOverIndex = () => {
        const allProgBars = document.querySelectorAll('.progress-bar');
        const allSliders = document.querySelectorAll('.slider');

        for (let i = 0; i < allProgBars.length; i++) {
            const computedStyle = window.getComputedStyle(allSliders[i]);
            const sliderIndex = parseInt(computedStyle.getPropertyValue("--slider-index"));

            if (sliderIndex > progBarItemCount - 1) {
                if (progBarItemCount - 1 > 0) {
                    allProgBars[i].children[progBarItemCount - 1].classList.add('activeItem');
                    allSliders[i].style.setProperty('--slider-index', progBarItemCount - 1);
                    allProgBars[i].children[sliderIndex].classList.remove('activeItem');
                }
            }
        }
    }

    useEffect(() => {
        window.addEventListener('resize', windowSize)
    });

    useEffect(() => {
        window.addEventListener('resize', handleOverIndex())
    })

  return (
      <div className="slider-container" ref={progBarRef} key={genreID}>
          <button className="arrow left-arrow" onClick={() => handleArrowClick("left")} ref={arrowRef}>
              <div className="fill">
                  <RiArrowLeftWideFill />
              </div>
          </button>
          <div className="slider"  ref={sliderRef} key={genreID}>
              {movieList.map((movie) => (
                  <div className="slider-card" key={movie.id}>
                      <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : '/no-movie.png'} alt={movie.title}/>
                      <p className="movie-title">{movie.title}</p>
                  </div>
              ))}
          </div>
          <button className="arrow right-arrow" onClick={() => handleArrowClick("right")} ref={arrowRef}>
              <div className="fill">
                  <RiArrowRightWideFill />
              </div>
          </button>
      </div>
  )
}

export default Movies