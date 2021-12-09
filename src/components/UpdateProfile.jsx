import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const UpdateProfile = () => {
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { handleSubmit, register, watch, reset } = useForm();

    const submitSignUpForm = (data) => {
        reset({ email: "", password: "", passwordConfirm: "" })

        if (data.password !== data.confirmPassword) {
            return setError("Passwords do not match")
        }
        if (data.password !== data.confirmPassword) {
            return setError("Passwords do not match")
        }
        const promises = []
        setLoading(true)
        setError("")
        if (data.email !== currentUser.email) {
            promises.push(updateEmail(data.email))
        }
        if (data.password) {
            promises.push(updatePassword(data.password))
        }
        Promise.all(promises).then(() => {
            navigate("/")
        }).catch(error => {
            setError(error.message)
        }).finally(() => {
            setLoading(false)
        })

    }
    return (

        <div className="container authContainer d-flex flex-column align-items-center ">
            <h1 className="authTitle">Update Profile</h1>

            {error && <Alert variant="danger">{error}</Alert>}
            <form className="authCard" onSubmit={handleSubmit(submitSignUpForm)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"
                    placeholder="someone@example.com" {...register("email")} defaultValue={currentUser.email} required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password")} placeholder="Leave blank to keep the same..." defaultValue="" autoComplete="new-password" />
                <label htmlFor="passwordConfirm">Password</label>
                <input type="password" id="password" {...register("passwordConfirm")} placeholder="Leave blank to keep the same..." defaultValue="" />

                <button disabled={loading} type="submit">Update</button>
            </form>

            <p className="authInfo">
                <Link to="/" className="linkButton">Cancel</Link>
            </p>
        </div>

    )
}


