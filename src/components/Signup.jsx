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
    const { handleSubmit, register, watch } = useForm();

    const submitSignUpForm = async (data) => {
        if (data.password !== data.confirmPassword) {
            return setError("Passwords do not match")
        }
        try {
            setError("")
            setLoading(true)
            await signup(data.email, data.password)
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
            <form className="authCard" onSubmit={handleSubmit(submitSignUpForm)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"
                    placeholder="someone@example.com" {...register("email")} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password")} />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" {...register("confirmPassword")} />
                <button disabled={loading} type="submit">Sign Up</button>
            </form>
            <p className="authInfo">
                Already have an account? <Link to="/login" className="linkButton">Log In</Link>
            </p>
        </div>
    )
}
