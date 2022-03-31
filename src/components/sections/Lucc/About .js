import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import aboutimg from '../../../assets/images/about/about-2.jpg';
class About extends Component {
    render() {
        return (
            <section className="about-section about-illustration-img section-gap">
                <div className="container">
                    <div className="illustration-img">
                        <img src={aboutimg} alt="" />
                    </div>
                    <div className="row no-gutters justify-content-lg-end justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-text">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">About Us</span>
                                    <h2 className="title">Leading Universiy  <br />Computer Club </h2>
                                </div>
                                <p className="mb-25">
                                Leading University Computer Club is one of the oldest club
                                of the university. The club started its journey at 2005.
                                Four of our founding member made this club for the
                                students of Computer Science and Enginnering. Tech
                                Enthusiast students. They strive to learn more about the
                                advanced technologies of the 21st century. The club
                                regularly offers workshops on web development, graphics
                                designing, problem solving, and many other technological
                                fields.The club has organized many events like Tech Storm,
                                ICT Fest, and LUCC Carnival etc. brought its biggest
                                achievement and appreciation.
                                 </p>
                                {/* <p>
                                    Doloremque laudantium, totam raperiaeaque ipsa quae ab illo inventore veritatis et quasi
                                </p>
                                <ul className="about-list">
                                    <li> <i className="far fa-check" /> Business &amp; Consulting Agency</li>
                                    <li> <i className="far fa-check" /> Awards Winning Business Comapny</li>
                                </ul>
                                <Link to="/about" className="main-btn">Learn More</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;