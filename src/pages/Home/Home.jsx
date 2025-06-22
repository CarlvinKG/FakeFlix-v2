import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import MovieSlider from '../../components/MovieSlider/MovieSlider'
import Footer from '../../components/Footer/Footer'

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
                    <button className="btn"><img src="../src/assets/play.png" alt="play" />Play</button>
                    <button className="btn dark-btn"><img src="../src/assets/info.png" alt="info" />More Info</button>
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