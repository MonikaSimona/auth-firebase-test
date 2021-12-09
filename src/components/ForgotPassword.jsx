import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const ForgotPassword = () => {
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { handleSubmit, register, watch } = useForm();

    const submitSignUpForm = async (data) => {

        try {
            setMessage('')
            setError("")
            setLoading(true)
            await resetPassword(data.email)
            setMessage("Check your inbox for further instructions.")


        } catch (error) {
            setError(error.message)
            console.log("failed", error)

        }

        setLoading(false)
    }
    return (

        <div className="container authContainer d-flex flex-column align-items-center ">
            <h1 className="authTitle">Password Reset</h1>

            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <form className="authCard" onSubmit={handleSubmit(submitSignUpForm)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"
                    placeholder="someone@example.com" {...register("email")} />


                <button disabled={loading} type="submit">Reset Password</button>

            </form>

            <p className="authInfo">
                Go to <Link to="/login" className="linkButton">Log In</Link>
            </p>
        </div>

    )
}

