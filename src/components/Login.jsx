import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const Login = () => {
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { handleSubmit, register, watch } = useForm();

    const submitSignUpForm = async (data) => {

        try {
            setError("")
            setLoading(true)
            await login(data.email, data.password)
            navigate("/")

        } catch (error) {
            setError(error.message)
            console.log("failed", error)

        }

        setLoading(false)
    }
    return (

        <div className="container authContainer d-flex flex-column align-items-center ">
            <h1 className="authTitle">Log In</h1>

            {error && <Alert variant="danger">{error}</Alert>}
            <form className="authCard" onSubmit={handleSubmit(submitSignUpForm)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"
                    placeholder="someone@example.com" {...register("email")} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password")} />

                <button disabled={loading} type="submit">Log In</button>
            </form>
            <p className="authInfo">
                Need an account? <Link to="/signup" className="linkButton">Create one.</Link>
            </p>
        </div>

    )
}

