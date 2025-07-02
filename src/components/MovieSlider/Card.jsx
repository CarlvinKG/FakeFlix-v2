import React, { useState } from 'react';
import Fetch from "./Fetch.jsx";

const Card = ({ movie, isLastVisible }) => {
    const [isHovered, setIsHovered] = useState(false);
    const genres = Fetch('genre', '');
    let genresFound = []

    for (let i = 0; i < movie.genre_ids.length; i++) {
        genresFound.push(genres.find(genres => genres.id === movie.genre_ids[i]))
    }

    if (genresFound.length > 4) {
        genresFound = genresFound.slice(0, 4)
    }

    return (
        <div className="slider-card" key={movie.id}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : '/no-movie.png'} alt={movie.title}/>
            <p className="movie-title">{movie.title}</p>
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
        </div>
    );
};

export default Card;