import React from 'react'
import Fetch from './Fetch'
import Movies from './Movies'
import ProgressBar from "./ProgressBar.jsx";

const Genres = (props) => {
    let genreList;
    let bars = 10;

    if (props.props === 0) {
        genreList = [
            {
                "id": 0,
                "name": "Trending on FakeFlix"
            }
        ]
    } else if (props.props === 1) {
        genreList = Fetch('genre', '');
    } if (props.props === 2) {
        bars = 5;
        genreList = [
            {
                "id": 1,
                "name": "Top 10 Movies"
            }
        ]
    }

  return (
    <>
        {genreList.map((genre) => (
            <div className='movie-cards' key={genre.id}>
                <div className="title-prog-bar">
                    <h2 className="title" key={genre.id}>{genre.name}</h2>
                    <ProgressBar bars={bars} />
                </div>
                <Movies key={genre.id} genre={genre.id} />
            </div>
        ))}
    </>
  )
}

export default Genres