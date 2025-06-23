import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Search from './pages/Search/Search'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Routes>
            <Route  path='/' element={<Home />} />
            <Route  path='/home' element={<Home />} />
            <Route  path='/login' element={<Login />} />
            <Route  path='/search' element={<Search />} />
        </Routes>
    </div>
  )
}

export default App
