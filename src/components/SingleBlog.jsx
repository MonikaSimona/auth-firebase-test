import { Icon } from '@iconify/react';
import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { blogsArray } from '../demo_content';
import { isBrowser, isMobile } from 'react-device-detect';
const SingleBlog = () => {
    let { id } = useParams()
    const { title, images, parapgraphs, date } = blogsArray[id]
    console.log("image", images)

    useEffect(() => {
        console.log("is mobile? ", isMobile)
        console.log("is browser? ", isBrowser)
        window.scrollTo({
            top: isMobile ? 0 : 200,

        });
    }, [])

    return <>
        <div className="image-container">
            <img className='helperImage' src={images[0]} alt={title} />
            <img src={images[0]} alt={title} />
            <div className="overlay"></div>
            <div className="title-section">

                <h1>{title}</h1>
                <p> <Icon icon="bx:bx-calendar" /> {date}</p>
            </div>
        </div>
        <div className='container '>
            <div className="blog-content">
                <p className='content-text'>{parapgraphs[0]}</p>
                <div className="row">
                    <div className="col-md-6">
                        <img src={images[1]} alt="" className='apt-image' />
                    </div>
                    <div className="col-md-6">
                        <img src={images[2]} alt="" className='apt-image' />
                    </div>
                </div>
                <p className='content-text'>{parapgraphs[1]}</p>
                <div className="row">
                    <div className="col-md-6">
                        <img src={images[3]} alt="" className='apt-image' />
                    </div>
                    <div className="col-md-6">
                        <img src={images[4]} alt="" className='apt-image' />
                    </div>
                </div>
                <p className='content-text'>{parapgraphs[2]}</p>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <img src={images[5]} alt="" className='apt-image' />
                    </div>
                    <div className="col-md-6">
                        <img src={images[6]} alt="" className='apt-image' />
                    </div>
                </div>
                <p className='content-text'>{parapgraphs[3]}</p>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <img src={images[7]} alt="" className='apt-image' />
                    </div>
                </div>
                <h3 className='quote'>Get Inspired.</h3>

            </div>
        </div>
    </>;
};

export default SingleBlog;
