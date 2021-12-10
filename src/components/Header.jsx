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
                            WN
                        </Link>
                    </div>
                    <div className={`menu-links ${toggle && "menu-links-open"}`}>
                        <Icon icon="ion:close-outline" onClick={() => setToggle(false)} className="close-menu" />
                        <Link to="/" className="menu-item" >Home</Link>
                        <Link to="/" className="menu-item" >Home</Link>
                        <Link to="/" className="menu-item" >Home</Link>
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
        return <h1 className="title">
            Website Name
        </h1>
    }

}

export default Header
