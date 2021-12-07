import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogout = async () => {
        setError("")
        try {
            await logout()
            navigate("/login")

        } catch (error) {
            setError(error.message)

        }
        logout();

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
                    <div className="menu-links">
                        <Link to="/" className="menu-item" >Home</Link>
                        <Link to="/" className="menu-item" >Home</Link>
                        <Link to="/" className="menu-item" >Home</Link>
                    </div>
                    <div className="social-links">
                        <a href="www.facebook.com" target="_blank" > <Icon icon="ph:facebook-logo-fill" className="social-links-icon" /> </a>
                        <a href="www.facebook.com" target="_blank" > <Icon icon="ph:instagram-logo-fill" className="social-links-icon" /> </a>
                        <div className="group-icons">
                            <Link to="/update-profile"> <Icon icon="iconoir:profile-circled" /> </Link>
                            <button className="logout" onClick={handleLogout}> <Icon icon="majesticons:logout-line" /> </button>
                        </div>
                    </div>
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
