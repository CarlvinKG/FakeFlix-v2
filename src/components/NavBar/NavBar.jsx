import React, { useState, useEffect } from 'react'
import Hamburger from './Hamburger'
import Links from './Links'

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className={`navbar ${isScrolled ? 'bg-black' : ' bg-linear-[180deg,black_10%,transparent]'}`}>
        <div className="nav-left">
            <Hamburger />
            <img src="./logo.png" alt="logo" />
            <Links />
        </div>

        <div className="nav-right">
            <img className='icons' src="./search.svg" alt="search" />
            <img className='icons' src="./bell.svg" alt="bell" />

            <div className="nav-profile">
                <img className='profile' src="./profile-img.png" alt="" />
                <img className="caret" src="./caret.svg" alt="" />
                <div className="dropdown">
                    <p>Sign out of FakeFlix</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar