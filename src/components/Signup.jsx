import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const Signup = () => {
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { handleSubmit, register } = useForm();

    const submitSignUpForm = async (data) => {
        if (data.password !== data.confirmPassword) {
            return setError("Passwords do not match")
        }
        try {
            setError("")
            setLoading(true)
            await signup(data.email, data.password, data.firstName, data.lastName)
            navigate("/")

        } catch (error) {
            setError(error.message)
            console.log("failed", error)

        }

        setLoading(false)
    }
    return (
        <div className="container authContainer d-flex flex-column align-items-center ">
            <h1 className="authTitle">Sing up</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <form className="authCard" onSubmit={handleSubmit(submitSignUpForm)} >
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="someone@example.com"
                    {...register("email")}
                    required
                    autoComplete="new-email" />

                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="Jane"
                    {...register("firstName")}
                    required
                    autoComplete="new-text" />

                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    {...register("lastName")}
                    required
                    autoComplete="new-text" />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    {...register("password")}
                    required
                    autoComplete="new-password" />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    {...register("confirmPassword")}
                    required
                    autoComplete="new-password" />

                <button className='button' disabled={loading} type="submit">Sign Up</button>
            </form>
            <p className="authInfo">
                Already have an account? <Link to="/login" className="linkButton">Log In</Link>
            </p>
        </div>
    )
}
