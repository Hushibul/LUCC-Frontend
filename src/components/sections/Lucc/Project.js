import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/project/01.jpg';
import img2 from '../../../assets/img/project/02.jpg';
import img3 from '../../../assets/img/project/03.jpg';
import img4 from '../../../assets/images/events/event1.jpg';
import img5 from '../../../assets/images/events/event2.jpg';
import img6 from '../../../assets/images/events/event3.jpg';

const porfolioblock = [
    { img: img4, title: 'Tech Storm', text: 'Join in the event' },
    { img: img5, title: 'LUCC Carnival', text: 'Join in the event' },
    { img: img6, title: 'ICT Fest', text: 'Join in the event' },
    // { img: img4, title: 'Research Strategy', text: 'Join us for consultatoins' },
    // { img: img5, title: 'IT Consultations', text: 'Join us for consultatoins' },
    // { img: img6, title: 'Business Monitor', text: 'Join us for consultatoins' },
]
class Project extends Component {
    render() {
        return (
            <section className="project-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-8">
                            {/* Section Title */}
                            <div className="section-title left-border">
                                <span className="title-tag">Our Events</span>
                                <h2 className="title">We Complate Much More  Events</h2>
                            </div>
                        </div>
                        {/* <div className="col-lg-5 col-md-4">
                            <div className="view-moore-btn text-md-right mt-30 mt-md-0">
                                <Link to="/portfolio" className="main-btn">View More Project</Link>
                            </div>
                        </div> */}
                    </div>
                    {/* Project Boxes */}
                    <div className="row project-boxes mt-80 justify-content-center">
                        {porfolioblock.map((item, i) => (
                            <div key={i} className="col-lg-8 col-sm-12">
                                <div className="project-box">
                                    <div className="project-thumb">
                                        <div className="thumb bg-img-c" style={{ backgroundImage: "url(" + item.img + ")" }} />
                                    </div>
                                    <div className="project-desc text-center">
                                        <h4><Link to="/event">{item.title}</Link></h4>
                                        <p>{item.text}</p>
                                        <Link to="/event" className="project-link">
                                            <i className="fal fa-long-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Project;