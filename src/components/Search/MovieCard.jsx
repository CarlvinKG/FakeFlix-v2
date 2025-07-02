import React from 'react'
import { FaStar } from 'react-icons/fa6'

const MovieCard = ({ movie: { title, poster_path } }) => {
  return (
    <div className='movie-card'>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie2.png'} alt={title}/>
    </div>
  )
}

export default MovieCard