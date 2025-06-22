import React from 'react'
import Fetch from './Fetch'
import Movies from './Movies'
import ProgressBar from "./ProgressBar.jsx";

const Genres = (props) => {
    let genreList;

    if (props.props === 0) {
        genreList = [
            {
                "id": 0,
                "name": "Trending on FakeFlix"
            }
        ]
    } else if (props.props === 1) {
        genreList = Fetch('genre', '');
    }

  return (
    <>
        {genreList.map((genre) => (
            <div className='movie-cards' key={genre.id}>
                <div className="title-prog-bar">
                    <h2 className="title" key={genre.id}>{genre.name}</h2>
                    <ProgressBar />
                </div>
                <Movies key={genre.id} genre={genre.id} />
            </div>
        ))}
    </>
  )
}

export default Genres