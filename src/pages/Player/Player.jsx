import React, {useEffect, useState} from 'react'
import { IoArrowBackCircle } from 'react-icons/io5'
import {useNavigate, useParams} from 'react-router-dom'
import noVid from '/video-unavailable.jpg'

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
}

const Player = () => {
    const [movieData, setMovieData] = useState([])
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API_BASE_URL}/movie/${id}/videos?language=en-US`, API_OPTIONS)
        .then(response => response.json())
        .then(response => setMovieData(response.results[0]))
        .catch(err => console.error(err));}, [])

    return (
        <div className="player">
            <IoArrowBackCircle size={40} onClick={() => {
                navigate(-1)
            }} />
            {movieData !== undefined ? <iframe src={`https://www.youtube.com/embed/${movieData.key}?autoplay=1`}
                                               title='trailer' frameBorder='0'
                                               allowFullScreen></iframe> : <img src={noVid} alt="noVid" /> }
        </div>
    );
};

export default Player;