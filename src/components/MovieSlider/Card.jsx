import React, { useState } from 'react'
import Fetch from './Fetch'
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

const Card = ({ movie, isLastVisible, topTen = false, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const genres = Fetch('genre', '');
    let genresFound = []

    const numbers = [ n1, n2, n3, n4, n5, n6, n7, n8, n9, n10 ]

    for (let i = 0; i < movie.genre_ids.length; i++) {
        genresFound.push(genres.find(genres => genres.id === movie.genre_ids[i]))
    }

    if (genresFound.length > 4) {
        genresFound = genresFound.slice(0, 4)
    }

    return (
        <Link className="slider-card" key={movie.id} to={`/player/${movie.id}`}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            {topTen ? (
                <div className="top-ten">
                    <img className='number' src={numbers[index]} alt=''/>
                    <img src={movie.poster_url} alt={movie.title} />
                </div>) : (
                    <>
                        <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : '/no-movie.png'} alt={movie.title}/>
                        <p className="movie-title">{movie.title}</p>
                    </>
            )}
            {isHovered && (
                <div className={`hover ${isLastVisible ? 'last-on-screen' : ''}`} key={movie.id} >
                    <div className="hover-img-info">
                        <div className="hover-img-container">
                            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : '/no-movie2.png'} alt={movie.title}/>
                        </div>
                        <div className="hover-info">
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                    <div className="genres">
                        <ul>
                            {genresFound.map((genre) => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </Link>
    );
};

export default Card;