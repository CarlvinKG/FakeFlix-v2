import React, { useState, useEffect } from 'react'
import Hamburger from './Hamburger'
import Links from './Links'
import { BsSearch, BsBell, BsCaretDownFill } from 'react-icons/bs'
import { useNavigate, Link } from 'react-router-dom'

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    const goToSearch = () => {
        navigate('/search');
    };

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
            <Link to={'/home'}><img src="./logo.png" alt="logo" /></Link>
            <Links />
        </div>

        <div className="nav-right">
            <BsSearch className='icons' size={20} onClick={goToSearch} />
            <BsBell className='icons' size={20} />

            <div className="nav-profile">
                <img className='profile' src="./profile-img.png" alt="" />
                <BsCaretDownFill className="caret" size={15} />
                <div className="dropdown">
                    <p onClick={goToLogin}>Sign out of FakeFlix</p>
                </div>
            </div>
        </div>
        <div className="scrolled">
            <div className="scroll-watcher"></div>
        </div>
    </div>
  )
}

export default NavBar