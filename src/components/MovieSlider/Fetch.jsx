import React, {useEffect, useState} from 'react'

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
}

const Fetch = (gm, genre, query = '') => {
    const [list, setList] = useState([]);
    const genreID = genre;
    const type = gm;

    const getList = async () => {
        try {
            let endpoint;
            if (type === 'genre') {
                endpoint =  `${API_BASE_URL}/genre/movie/list?language=en`;
            } else if (type === 'movie') {
                endpoint = genreID !== 0 ? `${API_BASE_URL}/discover/movie?with_genres=${genreID}`
                    : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
            } else if (type === 'query') {
                endpoint = query
                    ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
                    : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
            }

            const response = await fetch(endpoint, API_OPTIONS);

            if(!response.ok) {
                throw new Error('Failed to fetch movies');
            }

            const data = await response.json();

            if(data.Response === 'False') {
                setList([]);
                return;
            }

            if (type === 'genre') {
                setList(data.genres || []);
            } else if (type === 'movie' || type === 'query') {
                setList(data.results || []);
            }

        } catch (error) {
            console.error(`Error fetching ${type}: ${error}`);
        }
    }

    useEffect(() => {
        getList()
    }, [genreID, query])

  return (
      list
  )
}

export default Fetch