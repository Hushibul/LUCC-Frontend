import React from "react";
import { Link } from "react-router-dom";

import bg_parallax_02_1894x1950 from "../../Assets/images/bg-parallax-02-1894x1950.jpg";
import speaker_01_330x354 from "../../Assets/images/events/prgcon.png";
import speaker_02_330x354 from "../../Assets/images/events/dxball.jpg";
import speaker_03_330x354 from "../../Assets/images/events/hackathon.jpg";
import speaker_04_330x354 from "../../Assets/images/events/fifa.jpg";
import speaker_05_330x354 from "../../Assets/images/events/nfs.webp";
import speaker_06_330x354 from "../../Assets/images/events/pubg.jpg";

export default function team() {
  return (
    <div>
      {/* Section Who Is Speaking*/}
      <section
        className="parallax-container section"
        style={{
          backgroundImage: `url(${bg_parallax_02_1894x1950})`,
          width: "100%",
          height: "auto",
          fontWeight:"700"
        }}
      >
        {/* <img src={bg_parallax_02_1894x1950}
        /> */}
        <div className="parallax-content section-lg context-dark text-center">
          <div className="container">
            
            <h3>Register for Contest</h3>
            <div className="row row-30">
             
              <div className="col-md-6 col-lg-4"
             
              >
                <div>
                  {/* Speaker*/}
                  <div className="speaker"
                   style={{borderRadius:'5px', boxShadow: " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}
                  >
                    <div
                      className="speaker-img"
                      
                    >
                      <div className="speaker-overlay" />
                      <Link to="/event_profile_form_reg">
                        <img
                          src={speaker_01_330x354}
                          alt
                          style={{width: '370px', height: '270px' ,boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}
                        />
                      </Link>
                    </div>
                    <h5 className="speaker-title">
                      Programming Contest
                    </h5>
                    <p className="speaker-position"><Link to="/event_profile_form_reg">Register Now</Link></p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div>
                  {/* Speaker*/}
                  <div className="speaker">
                    <div
                      className="speaker-img"
                      data-triangle=".speaker-overlay"
                    >
                      <div className="speaker-overlay" />
                      <Link to="/event_profile_form_reg">
                        <img
                          src={speaker_02_330x354}
                          alt
                          style={{borderRadius:'10px',width: '370px', height: '270px' ,boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}
                        />
                      </Link>
                    </div>
                    <h5 className="speaker-title">
                      DX Ball
                    </h5>
                    <p className="speaker-position"><Link to="/event_profile_form_reg">Register Now</Link></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div>
                  {/* Speaker*/}
                  <div className="speaker">
                    <div
                      className="speaker-img"
                      data-triangle=".speaker-overlay"
                    >
                      <div className="speaker-overlay" />
                      <a href="#">
                        <img
                          src={speaker_03_330x354}
                          alt
                          style={{borderRadius:'10px',width: '370px', height: '270px' ,boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}
                        />
                      </a>
                    </div>
                    <h5 className="speaker-title">
                      Hackathon
                    </h5>
                    <p className="speaker-position"><a href="#">Register Now</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div>
                  {/* Speaker*/}
                  <div className="speaker">
                    <div
                      className="speaker-img"
                      data-triangle=".speaker-overlay"
                    >
                      <div className="speaker-overlay" />
                      <a href="#">
                        <img
                          src={speaker_04_330x354}
                          alt
                          style={{borderRadius:'10px',width: '370px', height: '270px' ,boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}
                        />
                      </a>
                    </div>
                    <h5 className="speaker-title">
                      FIFA
                    </h5>
                    <p className="speaker-position"><Link to="/event_profile_form_reg">Register Now</Link></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div>
                  {/* Speaker*/}
                  <div className="speaker">
                    <div
                      className="speaker-img"
                      data-triangle=".speaker-overlay"
                    >
                      <div className="speaker-overlay" />
                      <a href="#">
                        <img
                          src={speaker_05_330x354}
                          alt
                          style={{width: '370px', height: '270px'}}
                        />
                      </a>
                    </div>
                    <h5 className="speaker-title">
                      NFS
                    </h5>
                    <p className="speaker-position"><Link to="/event_profile_form_reg">Register Now</Link></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div>
                  {/* Speaker*/}
                  <div className="speaker">
                    <div
                      className="speaker-img"
                      data-triangle=".speaker-overlay"
                    >
                      <div className="speaker-overlay" />
                      <a href="#">
                        <img
                          src={speaker_06_330x354}
                          alt
                          style={{width: '370px', height: '270px'}}
                        />
                      </a>
                    </div>
                    <h5 className="speaker-title">
                     PUBG
                    </h5>
                    <p className="speaker-position"><Link to="/event_profile_form_reg">Register Now</Link></p>
                  </div>
                </div>
              </div>
            </div>
            {/* <a
              className="button button-secondary box-with-triangle-right wow fadeScale"
              href="speakers.html"
              data-triangle=".button-overlay"
            >
              <span>View all speakers</span>
              <span className="button-overlay" />
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}
