import React from 'react'
import Header from './Header'
import { useAuth } from '../contexts/AuthContext'

const Dashboard = () => {
    const { currentUser } = useAuth();
    return (
        <div>

            Hello {currentUser && currentUser.email}
        </div>
    )
}

export default Dashboard
