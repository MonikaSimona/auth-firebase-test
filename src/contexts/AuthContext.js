import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from "../firebase"



const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [displayError, setDisplayError] = useState("")

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const signup = (email, password, firstName, lastName, navigate) => {
        return auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                result.user.updateProfile({
                    displayName: firstName + " " + lastName
                }).then((res) => {
                    navigate('/')
                })

            })
            .catch((error) => {
                console.log("display error", error.message)
                setDisplayError(error.message)
            })
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }
    const logout = () => {
        return auth.signOut()
    }
    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }
    const updateEmail = (email) => {
        return currentUser.updateEmail(email)
    }
    const updatePassword = (password) => {
        return currentUser.updatePassword(password)
    }
    const updateDisplayName = (firstName, lastName) => {
        return currentUser.updateProfile({
            displayName: firstName + " " + lastName
        })
    }
    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateDisplayName,
        displayError

    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
