import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { useAuth } from '../contexts/AuthContext';
import ReactTooltip from 'react-tooltip';

const Header = () => {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false);

    const handleLogout = async () => {
        setError("")
        try {
            await logout()
            navigate("/login")

        } catch (error) {
            setError(error.message)


        }
        logout();
        console.log(error)

    }
    if (currentUser) {
        return (
            <header>
                <div className="menu ">
                    <div className="logo">
                        <Link to="/" className="logo-text">
                            AT
                        </Link>
                    </div>
                    <div className={`menu-links ${toggle && "menu-links-open"}`}>
                        <Icon icon="ion:close-outline" onClick={() => setToggle(false)} className="close-menu" />
                        <Link to="/" className="menu-item" >Home</Link>
                        <Link to="/contact" className="menu-item" >Contact</Link>
                        <Link to="/about" className="menu-item" >About</Link>
                        <div className="group-icons mobile">
                            <Link to="/update-profile"> <Icon icon="iconoir:profile-circled" /> </Link>
                            <button className="logout" onClick={handleLogout}> <Icon icon="majesticons:logout-line" /> </button>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" > <Icon icon="ph:facebook-logo-fill" className="social-links-icon" /> </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" > <Icon icon="ph:instagram-logo-fill" className="social-links-icon" /> </a>
                        <div className="group-icons desktop">
                            <Link to="/update-profile"> <Icon icon="iconoir:profile-circled" data-tip="profile" /> </Link>
                            <button className="logout" onClick={handleLogout}> <Icon icon="majesticons:logout-line" data-tip="logout" /> </button>
                            <ReactTooltip />
                        </div>
                    </div>
                    <Icon className="hamburger-menu" icon="system-uicons:menu-hamburger"
                        onClick={() => setToggle(true)}
                    />
                </div>
            </header>
        )
    } else {
        return <div>

            <h1 className="title">
                Apartmen Tour
            </h1>
            {/* <p className='website-intro'> <span>Love Apartment Tours?</span> <br />   If that's your thing register to get in the the comunity where the best apratments are taken on tour or login if you are already a member. </p> */}
            <p className='website-intro'> <span>Hi design lover.</span> <br />Welcome to the place where good design is what we are talking about. Pick up the newest trends for decorating your precious space and <i> make that apartment glow.</i> Get inspired. </p>
        </div>
    }

}

export default Header
