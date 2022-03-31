import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../../../assets/img/icons/01.png';
import icon2 from '../../../assets/img/icons/02.png';
import icon3 from '../../../assets/img/icons/03.png';
import lines from '../../../assets/img/lines/07.png';

const serviceblock = [
    { icon: icon1, title: 'Skill Develoment', text: 'For buiding various skill such as Web Development, Grapics Designing, Event Organizing, Teamwork, UI/UX Desingning, Programming etc.' },
    { icon: icon2, title: 'Organizing Events', text: 'For organizing national events such as Tech Storm, Hackathon, ICT Quiz, Programming Contest.' },
    { icon: icon3, title: 'Communication', text: 'For building good relationship between the senior, junior, resepected teachers and the commuity of Computer Science and Enginnering and learn to engage with diverse people.' },
]

class Service extends Component {
    render() {
        return (
            <section className="service-section shape-style-one section-gap grey-bg">
                <div className="container">
                    {/* Section Title */}
                    <div className="section-title text-center both-border mb-30">
                        <span className="title-tag">Why Join Leading University Computer Club</span>
                        <h2 className="title">Why Join Leading University <br /> Computer Club</h2>
                    </div>
                    {/* Services Boxes */}
                    <div className="row service-boxes justify-content-center">
                        {serviceblock.map((item, i) => (
                            <div key={i} className="col-lg-6 col-md-12 col-sm-8 col-10 col-tiny-12 wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="400ms">
                                <div className="service-box text-center">
                                    <div className="icon">
                                        <img src={item.icon} alt="Icon" />
                                    </div>
                                    <h3><Link to="/">{item.title}</Link></h3>
                                    <p>{item.text}</p>
                                    {/* <Link to="/" className="service-link">
                                        <i className="fal fa-long-arrow-right" />
                                    </Link> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="dots-line">
                    <img src={lines} alt="" />
                </div>
            </section>
        );
    }
}

export default Service;