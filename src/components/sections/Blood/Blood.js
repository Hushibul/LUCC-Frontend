import React from "react";
import { Link } from "react-router-dom";
import "./blood_min1.css";
import blood from './6553564.jpg';
// import styles from "./blood_min.css";
// import "./animated.css";
const Foo = () => (
     <>
          <div className="body-inner">
               {/*/ Topbar end */}
               {/* Header start */}
               <header className="header-one">
                    <div className="" style={{ backgroundColor: "#ffb600" }}>
                         <div className="container">
                              <div className="logo-area">
                                   <div className="row align-items-center">
                                        <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                                             <a
                                                  className="d-block"
                                                  href="index.html"
                                             >
                                                  <img style={{height:'120px',wdight:'120px'}}
                                                       loading="lazy"
                                                       src="https://www.seekpng.com/png/full/251-2517178_blood-logo-www-blood-donation-png-logo.png"
                                                       // src={blood}
                                                       alt="Constra"
                                                  />
                                             </a>
                                        </div>
                                        {/* logo end */}

                                        {/* header right end */}
                                   </div>
                                   {/* logo area end */}
                              </div>
                              {/* Row end */}
                         </div>
                         {/* Container end */}
                    </div>
               </header>
               {/*/ Header end */}
               <div className="banner-carousel banner-carousel-1 mb-0">
                    <div
                         className="banner-carousel-item"
                         style={{objectFit:'contain',
                              background: `url(${blood})`,
                         }}
                    >
                        
                         <div className="slider-content">
                              <div className="container h-100">
                                   <div className="row align-items-center h-100">
                                        <div className="col-md-12 text-center">
                                             <h2 className="slide-title">
                                                   Donate blood and save life
                                             </h2>
                                             <h3 className="slide-sub-title">
                                             Are you ready
                                             </h3> 
                                             <p>
                                                   {/* <a
                                                       href="services.html"
                                                       className="slider btn btn-primary"
                                                  >
                                                      Donate Blood 
                                                  </a> */}

                                                  <Link
                                                       to="/blood_reg_form"
                                                       className="slider btn btn-primary border"
                                                  >
                                                      Donate Blood 
                                                  </Link>
                                                  <Link
                                                       to="/Blood_table"
                                                       className="slider btn btn-primary border"
                                                  >
                                                       Find Blood 
                                                  </Link>
                                             </p>
                                        </div>
                                        
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <section className="call-to-action-box no-padding">
                    <div className="container">
                         <div className="action-style-box">
                              <div className="row align-items-center">
                                   <div className="col-md-8 text-center text-md-left">
                                        <div className="call-to-action-text">
                                             <h3 className="action-title">
                                                  We understand your needs on
                                                  BLOOD
                                             </h3>
                                        </div>
                                   </div>
                                   {/* Col end */}
                                   <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
                                        <div className="call-to-action-btn">
                                             <Link 
                                                  className="btn btn-dark"
                                                  to="/"
                                             >
                                                  Back To Home
                                             </Link >
                                        </div>
                                   </div>
                                   {/* col end */}
                              </div>
                              {/* row end */}
                         </div>
                         {/* Action style box */}
                    </div>
                    {/* Container end */}
               </section>
               {/* Action end */}
               <section id="ts-features" className="ts-features">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-6">
                                   <div className="ts-intro">
                                        <h2 className="into-title">About Us</h2>
                                        <h3 className="into-sub-title">
                                        Why should  donate blood?
                                        </h3>
                                        <p>
                                        Safe blood saves lives. Blood is needed by women with complications during pregnancy and childbirth, children with severe anaemia, often resulting from malaria or malnutrition, accident victims and surgical and cancer patients.

There is a constant need for a regular supply of blood because it can be stored only for a limited period of time before use. Regular blood donation by a sufficient number of healthy people is needed to ensure that blood will always be available whenever and wherever it is needed.

Blood is the most precious gift that anyone can give to another person – the gift of life. A decision to donate your blood can save a life, or even several if your blood is separated into its components – red cells, platelets and plasma – which can be used individually for patients with specific conditions.
                                        </p>
                                   </div>
                                   {/* Intro box end */}
                                   <div className="gap-20" />
                                   <div className="row">
                                        <div className="col-md-6">
                                             <div className="ts-service-box">
                                                  <span className="ts-service-icon">
                                                       <i className="fas fa-trophy" />
                                                  </span>
                                                  <div className="ts-service-box-content">
                                                       <h3 className="service-box-title">
                                                       Give blood and keep the world beating
                                                       </h3>
                                                  </div>
                                             </div>
                                             {/* Service 1 end */}
                                        </div>
                                        {/* col end */}
                                        <div className="col-md-6">
                                             <div className="ts-service-box">
                                                  <span className="ts-service-icon">
                                                       <i className="fas fa-sliders-h" />
                                                  </span>
                                                  <div className="ts-service-box-content">
                                                       <h3 className="service-box-title">
                                                       Blood Donation Is A Small Act Of Kindness That Does Great And Big Wonders.
                                                       </h3>
                                                  </div>
                                             </div>
                                             {/* Service 2 end */}
                                        </div>
                                        {/* col end */}
                                   </div>
                                   {/* Content row 1 end */}
                                   <div className="row">
                                        <div className="col-md-6">
                                             <div className="ts-service-box">
                                                  <span className="ts-service-icon">
                                                       <i className="fas fa-thumbs-up" />
                                                  </span>
                                                  <div className="ts-service-box-content">
                                                       <h3 className="service-box-title">
                                                       Donate Blood Because You Never Know How Helpful It Might Be To Someone.
                                                       </h3>
                                                  </div>
                                             </div>
                                             {/* Service 1 end */}
                                        </div>
                                        {/* col end */}
                                        <div className="col-md-6">
                                             <div className="ts-service-box">
                                                  <span className="ts-service-icon">
                                                       <i className="fas fa-users" />
                                                  </span>
                                                  <div className="ts-service-box-content">
                                                       <h3 className="service-box-title">
                                                       Donate Blood If You Want To Play A Significant Role In Society.
                                                       </h3>
                                                  </div>
                                             </div>
                                             {/* Service 2 end */}
                                        </div>
                                        {/* col end */}
                                   </div>
                                   {/* Content row 1 end */}
                              </div>
                              {/* Col end */}
                             
                              {/* Col end */}
                         </div>
                         {/* Row end */}
                    </div>
                    {/* Container end */}
               </section>
               {/* Feature are end */}

               {/* Project area end */}

               {/* Content end */}
             
               {/*/ subscribe end */}

               {/*/ News end */}
               <footer id="footer" className="footer bg-overlay">
                    {/* Footer main end */}

                    <div className="copyright">
                         <div className="container">
                              <div className="row align-items-center">
                                   <div className="col-md-6">
                                        <div className="copyright-info text-center text-md-left">
                                             <span>
                                                  Copyright © , Designed &amp;
                                                  Developed by{" "}
                                                  <a href="https://themefisher.com">
                                                       Team ALPHA
                                                  </a>
                                             </span>
                                        </div>
                                   </div>
                                   {/* <div className="col-md-6">
                                        <div className="footer-menu text-center text-md-right">
                                             <ul className="list-unstyled">
                                                  <li>
                                                       <a href="about.html">
                                                            About
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="team.html">
                                                            Our people
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="faq.html">
                                                            Faq
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="news-left-sidebar.html">
                                                            Blog
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="pricing.html">
                                                            Pricing
                                                       </a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div> */}
                              </div>
                              {/* Row end */}
                              <div
                                   id="back-to-top"
                                   data-spy="affix"
                                   data-offset-top={10}
                                   className="back-to-top position-fixed"
                              >
                                   <button
                                        className="btn btn-primary"
                                        title="Back to Top"
                                   >
                                        <i className="fa fa-angle-double-up" />
                                   </button>
                              </div>
                         </div>
                         {/* Container end */}
                    </div>
                    {/* Copyright end */}
               </footer>
          </div>
          {/* Body inner end */}
     </>
);

export default Foo;
