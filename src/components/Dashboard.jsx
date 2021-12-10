import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Dashboard = () => {
    const { currentUser } = useAuth();
    return (
        <div className="container">
            <h1 className="welcome-message"><span>Hello</span> <br /> {currentUser && currentUser.email}</h1>
        </div>
    )
}

export default Dashboard
