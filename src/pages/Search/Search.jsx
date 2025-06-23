import React, {useRef, useState, useEffect} from 'react'
import { useDebounce } from 'react-use'
import NavBar from '../../components/NavBar/NavBar'
import Fetch from '../../components/MovieSlider/Fetch'
import SearchBar from '../../components/Search/SearchBar'
import MovieCard from '../../components/Search/MovieCard'
import Footer from '../../components/Footer/Footer'

const Search = () => {
    const [debounceSearchTerm, setDebounceSearchTerm] = useState('')
    const [searchTerm, setSearchTerm] = useState('');

    useDebounce(() => {
        setDebounceSearchTerm(searchTerm)
    }, 500, [searchTerm]);
    console.log(debounceSearchTerm);

    const searchResult = Fetch('query', '', debounceSearchTerm);
    const resultsRef = useRef(null);

    const handleWheel = (event) => {
        //event.preventDefault();
        resultsRef.current.scrollDown += event.deltaX;
    }

    useEffect(() => {
        resultsRef.current.addEventListener('wheel', handleWheel);
    }, [])

  return (
      <div className='home'>
          <NavBar />
          <div className='pt-[100px]' />
          <div className="search-wrapper">
              <div className="search-container">
                  <SearchBar searchTerm={ searchTerm } setSearchTerm={ setSearchTerm } />
                  <div className="results">
                      <h2>Results</h2>
                      <div className="found-results" ref={resultsRef}>
                          <ul>
                              {searchResult.map((movie) => (
                                  <MovieCard key={movie.id} movie={movie} />
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <Footer />
      </div>
  )
}

export default Search