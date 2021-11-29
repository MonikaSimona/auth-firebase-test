import React from 'react'
import { useForm } from 'react-hook-form'

export const Signup = () => {
    const { handleSubmit, register, watch } = useForm();
    const submitSignUpForm = (data) => {
        console.log(watch())
    }
    return (
        <div className="wrapper">
            <div className="container authContainer d-flex flex-column align-items-center justify-content-center">
                <h1 className="authTitle">Sing up</h1>
                <form className="authCard" onSubmit={handleSubmit(submitSignUpForm)}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"
                        placeholder="someone@example.com" {...register("email")} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register("password")} />
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" {...register("confirm-password")} />
                    <button type="submit">SignUp</button>
                </form>
                <p className="authInfo">
                    Already have an account? <button className="linkButton">Log In.</button>
                </p>
            </div>
        </div>
    )
}
