import React from 'react'
import { Route, Navigate, Outlet } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuth()
    return (
        // <Route
        //     {...rest}
        //     render={props => {
        //         currentUser ? <Component {...props} /> : <Navigate to="/login" />
        //     }}>

        // </Route>
        currentUser ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoute
