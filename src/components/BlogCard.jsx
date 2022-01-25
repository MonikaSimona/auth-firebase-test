import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';


const BlogCard = ({ title, img, text, date, id }) => {
    return <Link className='blog-link' to={`/blog/${id}`}>
        <div className='card-container'>
            <div className="blog-card-img-container">
                <img src={img[0]} alt={title} className="blog-card-img" />
                <div className="img-overlay"></div>
            </div>
            <div className="card-wrapper">
                <div className="blog-card-header">
                    <h4 className="blog-card-header-title">
                        {title}
                    </h4>
                    <div className="info-line">
                        <Icon icon="bx:bx-calendar" className='blog-card-icon' />
                        <span className="blog-date">
                            {date}
                        </span>
                    </div>
                </div>
                <div className="blog-card-body">
                    <p className="blog-card-body-text">
                        {text[0]}
                    </p>
                </div>
                <div className="blog-card-footer">
                    <Link to={`/blog/${id}`} className="card-link"> find out more</Link>
                    <Icon icon="bi:arrow-right" className='blog-card-icon' />
                </div>
            </div>


        </div> </Link>;
};

export default BlogCard;
