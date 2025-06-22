import React from 'react'
import Genres from './Genres'

const MovieSlider = (props) => {
    const content = props.props;

  return (
    <>
      <Genres props={content}/>
    </>
  )
}

export default MovieSlider