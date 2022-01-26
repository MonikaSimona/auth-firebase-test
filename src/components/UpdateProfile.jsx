import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const UpdateProfile = () => {
    const { currentUser, updateEmail, updatePassword, updateDisplayName } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    var userFirstName;
    var userLastName;
    if (currentUser && currentUser.displayName) {
        userFirstName = currentUser.displayName.split(" ")[0];
        userLastName = currentUser.displayName.split(" ")[1];
    }


    const { handleSubmit, register } = useForm();

    const submitSignUpForm = (data) => {



        console.log(data.password, data.passwordConfirm)

        if (data.password !== data.passwordConfirm) {
            return setError("Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError("")
        if (data.email !== currentUser.email) {
            promises.push(updateEmail(data.email))
        }
        if (data.firstName !== userFirstName || data.lastName !== userLastName) {
            promises.push(updateDisplayName(data.firstName, data.lastName))
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

                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="Jane"
                    {...register("firstName")}
                    required
                    autoComplete="new-text"
                    defaultValue={userFirstName} />

                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    {...register("lastName")}
                    required
                    autoComplete="new-text"
                    defaultValue={userLastName} />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password")} placeholder="Leave blank to keep the same..." />
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input type="password" id="passwordConfirm" {...register("passwordConfirm")} placeholder="Leave blank to keep the same..." />

                <button className='button' disabled={loading} type="submit">Update</button>
            </form>

            <p className="authInfo">
                <Link to="/" className="linkButton">Cancel</Link>
            </p>
        </div>

    )
}


