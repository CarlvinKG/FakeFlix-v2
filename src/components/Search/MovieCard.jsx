import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie: { title, poster_path, id } }) => {
  return (
    <Link className='movie-card' to={`/player/${id}`}>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie2.png'} alt={title}/>
    </Link>
  )
}

export default MovieCard