import { Icon } from '@iconify/react';
import React from 'react';
import { useParams } from 'react-router';
import { blogsArray } from './Dashboard';
const SingleBlog = () => {
    let { id } = useParams()
    const { title, image, text, date } = blogsArray[id]
    console.log(title)

    return <>
        <div className="image-container">
            <img src={image} alt={title} />
            <div className="overlay"></div>
            <div className="title-section">

                <h1>{title}</h1>
                <p> <Icon icon="bx:bx-calendar" /> {date}</p>
            </div>
        </div>
        <div className='container blog-content'>
            <p>{text}</p>

        </div>
    </>;
};

export default SingleBlog;
