import React from 'react'
import {BsSearch} from "react-icons/bs";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
      <div className="search">
          <div>
              <BsSearch className='icons' size={20} />

              <input
                  type='text'
                  placeholder='Search'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
              />
          </div>
      </div>
  )
}

export default SearchBar