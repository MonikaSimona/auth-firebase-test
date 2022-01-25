import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Footer = () => {
    const { currentUser, logout } = useAuth()
    if (currentUser) {
        return (
            <footer>
                <span> © Apartment Tour</span>  2022 &nbsp;    All rights reserved.
            </footer>
        )
    } else {
        return null
    }

}

export default Footer
