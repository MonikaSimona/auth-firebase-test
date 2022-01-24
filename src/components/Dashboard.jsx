import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import BlogCard from './BlogCard';

export const blogsArray = [
    {
        id: 0,
        title: 'Blog Title',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, placeat eveniet ipsa saepe repellendus porro officiis similique suscipit exercitationem quae.",
        date: "02.02.2021",
        image: "https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    },
    {
        id: 1,
        title: 'Blog Title',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, placeat eveniet ipsa saepe repellendus porro officiis similique suscipit exercitationem quae.",
        date: "01.03.2017",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 2,
        title: 'Blog Title',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, placeat eveniet ipsa saepe repellendus porro officiis similique suscipit exercitationem quae.",
        date: "30.03.2018",
        image: "https://images.unsplash.com/photo-1522444195799-478538b28823?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
]

const Dashboard = () => {
    const { currentUser } = useAuth();
    console.log(currentUser)
    return (
        <div className="container px-4 px-sm-0">
            <h1 className="welcome-message"><span className='welcome-message-hello'>Hello</span> <br /> {currentUser && currentUser.displayName && currentUser.displayName.split(" ")[0]} {currentUser.displayName.split(" ")[1]}</h1>
            <h3 className='intro'>
                Here are the latest blogs for you
            </h3>
            <div className="row d-flex justify-content-center">

                {blogsArray && blogsArray.map((blog) => (
                    <div key={blog.id} className="col-12 col-sm-6 col-lg-4 px-3 px-md-4 ">
                        <BlogCard id={blog.id} img={blog.image} title={blog.title} text={blog.text} date={blog.date} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard
