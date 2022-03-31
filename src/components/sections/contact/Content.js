import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Content extends Component {
    render() {
        return (
            <section className="contact-section contact-page section-gap-top">
                <div className="container">
                    <div className="contact-info">
                        <div className="row justify-content-center">

                            {/* <div className="col-lg-6 order-2 order-lg-1">
                                <div className="illustration-img text-center">
                                    <img src={illustration} alt="" />
                                </div> 
                            </div> */}

                            <div className="col-lg-6 col-md-10 order-1 order-lg-2"
                                style={{
                                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                                    padding: "50px"
                                }}
                            >
                                <div className="contact-info-content">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">Get In Touch</span>
                                        <h2 className="title">Contact Us If You Need</h2>
                                    </div>
                                    {/* <p>
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                                        pain was
            </p> */}
                                    <ul>
                                        <li className="phone">
                                            <Link to="tel:+01313084499."><i className="far fa-phone" />+01313084499.</Link>
                                        </li>
                                        <li><i className="far fa-envelope-open" /><Link to="#">info@lus.ac.bd</Link></li>
                                        <li><i className="far fa-map-marker-alt" />Ragibnagar, South Surma, Sylhet-3112</li>
                                    </ul>
                                </div>

                            </div>


                        </div>
                    </div>

                    {/* <div className="contact-form grey-bg">
                        <div className="row no-gutters justify-content-center">
                            <div className="col-10">
                                <div className="section-title text-center mb-40">
                                    <h2 className="title">Don’t Hesited To Contact Us</h2>
                                </div>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="input-group mb-30">
                                                <input type="text" placeholder="Your Full Name" />
                                                <span className="icon"><i className="far fa-user-circle" /></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="input-group mb-30">
                                                <input type="email" placeholder="Your Email Address" />
                                                <span className="icon"><i className="far fa-envelope-open" /></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="input-group mb-30">
                                                <input type="text" placeholder="Your Phone" />
                                                <span className="icon"><i className="far fa-phone" /></span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group textarea mb-30">
                                                <textarea placeholder="Write Message" defaultValue={""} />
                                                <span className="icon"><i className="far fa-pencil" /></span>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button type="submit" className="main-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="container-fluid container-1600" style={{ marginTop: '180px' }}>
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1279.9773483008175!2d91.80479769986776!3d24.869525200068374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751015addbec3b7%3A0x9e87b7be58b5f67e!2sLeading%20University!5e0!3m2!1sen!2sbd!4v1642754382992!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;