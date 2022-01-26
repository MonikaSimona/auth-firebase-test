import React from 'react';

const About = () => {
    return <div className='contact-page-wrapper'>
        <div className="image-container">
            <img src="https://images.pexels.com/photos/2387674/pexels-photo-2387674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="about" />
            <div className="overlay"></div>
            <div className="title-section">

                <h1>About</h1>

            </div>
        </div>
        <div className="container">

            <div className="blog-content d-flex flex-column  ">
                <h4 className="content-title">
                    Hello!
                </h4>
                <p className="content-text about">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo sed quisquam quidem incidunt impedit? Minima totam veritatis animi debitis?

                </p>
                <h4 className="content-title">
                    Some other title
                </h4>
                <p className="content-text about">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo sed quisquam quidem incidunt impedit? Minima totam veritatis animi debitis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sequi ratione itaque et beatae dolorum modi, quo cupiditate odio non at reprehenderit. Debitis sunt sed, exercitationem distinctio tenetur corrupti expedita.

                </p>
                <h4 className="content-title">
                    Team
                </h4>
                <p className="content-text about">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo sed quisquam quidem incidunt impedit? Minima totam veritatis animi debitis? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="team">
                    <div className="team-card">
                        <div className="team-card-image">

                            <img src="https://images.unsplash.com/photo-1642478872194-855316ae300c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="designer -  bailey burton" className='team-img' />
                        </div>
                        <p className="team-card-title">
                            Bailey Burton
                        </p>
                        <p className="team-card-desc">
                            Designer
                        </p>
                    </div>
                    <div className="team-card">
                        <div className="team-card-image">

                            <img src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="Developer -  Taylor Gardner" className='team-img' />
                        </div>
                        <p className="team-card-title">
                            Taylor Gardner
                        </p>
                        <p className="team-card-desc">
                            Developer
                        </p>
                    </div>
                    <div className="team-card">
                        <div className="team-card-image">

                            <img src="https://images.unsplash.com/photo-1594743794748-b6b721775767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Writer -  Madelin Bailey" className='team-img' />
                        </div>
                        <p className="team-card-title">
                            Madelin Bailey
                        </p>
                        <p className="team-card-desc">
                            Writer
                        </p>
                    </div>
                </div>
                <h4 className="content-title">
                    Our vision
                </h4>
                <p className="content-text about">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum hic, incidunt aliquam aperiam delectus, odit harum necessitatibus esse cumque praesentium soluta blanditiis quas consectetur officia quam architecto quasi. Assumenda, vero quisquam? Autem itaque fuga ipsum modi, consectetur enim debitis. Amet dicta eos consequatur eveniet atque reprehenderit culpa. Dolor, impedit adipisci incidunt labore distinctio ipsum nihil molestias atque voluptas at excepturi?
                </p>
                <h3 className='quote'>Get Inspired.</h3>
            </div>
        </div>
    </div>;
};

export default About;
