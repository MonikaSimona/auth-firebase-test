import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Dashboard = () => {
    const { currentUser } = useAuth();
    console.log(currentUser.displayName)
    return (
        <div className="container">
            <h1 className="welcome-message"><span>Hello</span> <br /> {currentUser && currentUser.displayName.split(" ")[0]} {currentUser.displayName.split(" ")[1]}</h1>
        </div>
    )
}

export default Dashboard
