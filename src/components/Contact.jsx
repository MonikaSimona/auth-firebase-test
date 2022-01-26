import { Icon } from '@iconify/react';
import React from 'react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';



const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("")
    let formObject = {}

    const submit = (e) => {
        e.preventDefault();
        if (email === "" || name === "" || message === "") {
            toast.error('Please fill all the fields! 😕', {
                position: "bottom-center",
                style: {
                    border: '1px solid tomato',
                    padding: '16px',
                    color: '#333333',
                    backgroundColor: "#fef9ef"
                },
                icon: null,

            });

        } else {
            formObject = { email, name, message }
            console.log(formObject)

            toast.success('Thank you for the message! 😊', {
                position: "bottom-center",
                style: {
                    border: '1px solid #83c3ff',
                    padding: '16px',
                    color: '#333333',
                    backgroundColor: "#fef9ef"
                },
                iconTheme: {
                    primary: '#fef9ef',
                    secondary: '#FFFAEE',
                },
            });
        }

        setEmail("")
        setName("")
        setMessage("")
    }

    return <>
        <Toaster />
        <div className='contact-page-wrapper'>
            <div className="image-container">
                <img src="https://images.unsplash.com/photo-1565599573128-ae3ef5c9f478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="contact" />
                <div className="overlay"></div>
                <div className="title-section">

                    <h1>Contact</h1>

                </div>
            </div>
            <div className="container">

                <div className="blog-content d-flex flex-column align-items-center">

                    <h4 className="content-title">
                        Headquarters:
                    </h4>
                    <a href='https://goo.gl/maps/EihsPiWN8N6MwDCaA' className="content-text link">
                        bul. 8 Septemvri 18, 1/7 MK, Skopje 1000
                    </a>
                    <h4 className="content-title">
                        Call as at:
                    </h4>
                    <a href='tel:+1 123 456 7891' className="content-text link">
                        +1 123 456 7891
                    </a>
                    <h4 className="content-title">
                        Find us on social networks:
                    </h4>
                    <div className="social-links">
                        <a href='www.instagram.com' className="content-icon link">
                            <Icon icon="teenyicons:instagram-solid" />
                        </a>
                        <a href='www.twitter.com' className="content-icon link">
                            <Icon icon="akar-icons:twitter-fill" />
                        </a>
                        <a href='www.facebook.com' className="content-icon link">
                            <Icon icon="akar-icons:facebook-fill" />
                        </a>

                    </div>
                    <h4 className="content-title">
                        For any questions or thoughts write us an email:
                    </h4>
                    <form className='form authCard' onSubmit={(e) => submit(e)}>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" className='input' placeholder='john@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="full-name">Full name:</label>
                            <input type="text" name="full-name" id="full-name" className='input' placeholder='John Smith' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="message">Message:</label>
                            <textarea type="text" name="message" id="message" className='input' placeholder='Message...' value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <button className='button'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>;
};

export default Contact;
