import React from 'react'
import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext'
import { blogsArray } from '../demo_content';
import BlogCard from './BlogCard';



const Dashboard = () => {
    const { currentUser } = useAuth();
    console.log(currentUser)
    useEffect(() => {
        window.location.reload();
    }, [])
    return (
        <div className="container px-4 px-sm-0">
            <h1 className="welcome-message"><span className='welcome-message-hello'>Hello</span> <br /> {currentUser && currentUser.displayName && currentUser.displayName.split(" ")[0]} {currentUser.displayName.split(" ")[1]}</h1>
            <h3 className='intro'>
                Here are the latest blogs for you
            </h3>
            <div className="row d-flex justify-content-center">

                {blogsArray && blogsArray.map((blog) => (
                    <div key={blog.id} className="col-12 col-sm-6 col-lg-4 px-3 px-md-4 ">
                        <BlogCard id={blog.id} img={blog.images} title={blog.title} text={blog.parapgraphs} date={blog.date} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard
