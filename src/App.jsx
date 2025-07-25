import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Search from './pages/Search/Search'
import Player from './pages/Player/Player'

const App = () => {
  return (
    <div>
        <Routes>
            <Route  path='/' element={<Home />} />
            <Route  path='/home' element={<Home />} />
            <Route  path='/login' element={<Login />} />
            <Route  path='/search' element={<Search />} />
            <Route  path='/player/:id' element={<Player />} />
        </Routes>
    </div>
  )
}

export default App
