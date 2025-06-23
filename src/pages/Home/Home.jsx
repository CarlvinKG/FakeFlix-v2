import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import MovieSlider from '../../components/MovieSlider/MovieSlider'
import Footer from '../../components/Footer/Footer'
import { FaPlay } from 'react-icons/fa'
import { BsInfoCircle } from 'react-icons/bs'

const Home = () => {

  return (
    <div className='home'>
        <NavBar />
        <div className="pattern" />
        <div className="banner">

            <div className="banner-caption">
                <img className="title-img" src="../src/assets/banner-title.png" alt="title" />
                <p className='description'>Sam finds himself in the middle of an international incident after meeting with President Thaddeus Ross. He must soon discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.</p>

                <div className="banner-btns">
                    <button className="btn"><FaPlay size={20} />Play</button>
                    <button className="btn dark-btn"><BsInfoCircle size={20} />More Info</button>
                </div>
                <MovieSlider props={0} />
            </div>
        </div>
        <div className="more-cards">
            <MovieSlider props={1} />
        </div>
        <Footer />
    </div>
  )
}

export default Home