import React, { useState, useEffect, useRef } from 'react'
import Fetch from './Fetch'
import { RiArrowLeftWideFill, RiArrowRightWideFill } from 'react-icons/ri'
import { getTrendingMovies } from '../Search/appwrite'
import { Link } from 'react-router-dom'
import n1 from '/1.png'
import n2 from '/2.png'
import n3 from '/3.png'
import n4 from '/4.png'
import n5 from '/5.png'
import n6 from '/6.png'
import n7 from '/7.png'
import n8 from '/8.png'
import n9 from '/9.png'
import n10 from '/10.png'
import Card from './Card'

const Movies = ({genre}) => {
    const genreID = genre;
    const movieList = Fetch('movie', genreID);
    const [sliderIndex, setSliderIndex] = useState(0);

    const arrowRef =  useRef(null);
    const progBarRef = useRef(null);
    const sliderRef = useRef(null);

    const numbers = [ n1, n2, n3, n4, n5, n6, n7, n8, n9, n10 ];

    let itemsCount= movieList.length;
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

    const [topTenMovies, setTopTenMovie] = useState([]);

    const loadTrendingMovies = async () => {
        try {
            const movies = await getTrendingMovies();

            setTopTenMovie(movies);
        } catch (error) {
            console.error(`Error fetching trending movies: ${error}`);
        }
    }

    if (movieList.length === 0) {
        itemsCount = topTenMovies.length;
    }

    const progBarItemCount = Math.ceil(itemsCount / itemsPerScreen);

    const handleArrowClick = (direction) => {
        const progressBar = progBarRef.current.closest('.movie-cards')?.querySelector('.progress-bar');
        const slider = sliderRef.current;

        if (!progressBar || !slider) return;

        let newIndex = sliderIndex;

        if (direction === 'left') {
            newIndex = (sliderIndex - 1 + progBarItemCount) % progBarItemCount;
        } else if (direction === 'right') {
            newIndex = (sliderIndex + 1) % progBarItemCount;
        }

        // Update CSS variable and active progress bar
        slider.style.setProperty('--slider-index', newIndex);

        // Update active progress bar
        Array.from(progressBar.children).forEach((bar, idx) => {
            bar.classList.toggle('activeItem', idx === newIndex);
        });

        // Update state
        setSliderIndex(newIndex);
    };

    const visibleStartIndex = sliderIndex * itemsPerScreen;
    const visibleEndIndex = visibleStartIndex + itemsPerScreen - 1;

    const handleOverIndex = () => {
        const progressBar = progBarRef.current?.closest('.movie-cards')?.querySelector('.progress-bar');
        const slider = sliderRef.current;

        if (!progressBar || !slider) return;

        if (sliderIndex > progBarItemCount - 1) {
            const newIndex = progBarItemCount - 1;

            slider.style.setProperty('--slider-index', newIndex);

            Array.from(progressBar.children).forEach((bar, idx) => {
                bar.classList.toggle('activeItem', idx === newIndex);
            });

            setSliderIndex(newIndex);
        }
    };

    useEffect(() => {
        loadTrendingMovies();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            handleOverIndex();
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [sliderIndex, itemsPerScreen, progBarItemCount]);

  return (
      <div className="slider-container" ref={progBarRef} key={genreID}>
          <button className="arrow left-arrow" onClick={() => handleArrowClick("left")} ref={arrowRef}>
              <div className="fill">
                  <RiArrowLeftWideFill />
              </div>
          </button>
          <div className="slider"  ref={sliderRef} key={genreID}>
              {movieList.length > 0 ? movieList.map((movie, index) => (
                  /* <Link className="slider-card" key={movie.id} to={`/player/${movie.id}`}>
                      <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : '/no-movie.png'} alt={movie.title}/>
                      <p className="movie-title">{movie.title}</p>
                  </Link> */
                  <Card movie={movie} key={movie.id} isLastVisible={index === visibleEndIndex} />
              )) : topTenMovies.map((movie, index) => (
                  <Link className="slider-card" key={movie.$id} to={`/player/${movie.id}`}>
                      <div className="top-ten">
                          <img className='number' src={numbers[index]} alt=''/>
                          <img src={movie.poster_url} alt={movie.title} />
                      </div>
                  </Link>
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