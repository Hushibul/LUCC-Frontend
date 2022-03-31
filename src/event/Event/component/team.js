import React from 'react'
import bg_parallax_02_1894x1950 from'../../Assets/images/bg-parallax-02-1894x1950.jpg'
import speaker_01_330x354 from'../../Assets/images/speaker-01-330x354.jpg'
import speaker_02_330x354 from'../../Assets/images/speaker-02-330x354.jpg'
import speaker_03_330x354 from'../../Assets/images/speaker-03-330x354.jpg'
import speaker_04_330x354 from'../../Assets/images/speaker-04-330x354.jpg'
import speaker_05_330x354 from'../../Assets/images/speaker-05-330x354.jpg'
import speaker_06_330x354 from'../../Assets/images/speaker-06-330x354.jpg'

export default function team() {
    return (
        <div>
             {/* Section Who Is Speaking*/}
        <section
          className="parallax-container section"
          style={{ backgroundImage: `url(${bg_parallax_02_1894x1950})`,width: "100%",
          height: "auto"}}>
        
          {/* <img src={bg_parallax_02_1894x1950}
        /> */}
          <div className="parallax-content section-lg context-dark text-center">
            <div className="container">
              <h6 style={{color: '#f09922',letterSpacing: '.2em',
              fontSize:'16px', lineHeight: '1.2'}}>Our Speakers</h6>
              <h3>who is speaking.</h3>
              <div className="row row-30">
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
                            src={speaker_01_330x354}
                            alt
                            width={330}
                            height={354}
                          />
                        </a>
                        <ul className="speaker-social-list">
                          <li>
                            <a className="icon icon-xs fa-facebook-f" href="#" />
                          </li>
                          <li>
                            <a className="icon icon-xs fa-twitter" href="#" />
                          </li>
                          <li>
                            <a
                              className="icon icon-xs fa-youtube-play"
                              href="#"
                            />
                          </li>
                        </ul>
                      </div>
                      <h5 className="speaker-title">
                        <a href="#">Jesscia brown</a>
                      </h5>
                      <p className="speaker-position">Co Founder</p>
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
                            src={speaker_02_330x354}
                            alt
                            width={330}
                            height={354}
                          />
                        </a>
                        <ul className="speaker-social-list">
                          <li>
                            <a className="icon icon-xs fa-facebook-f" href="#" />
                          </li>
                          <li>
                            <a className="icon icon-xs fa-twitter" href="#" />
                          </li>
                          <li>
                            <a
                              className="icon icon-xs fa-youtube-play"
                              href="#"
                            />
                          </li>
                        </ul>
                      </div>
                      <h5 className="speaker-title">
                        <a href="#">Mike hardons</a>
                      </h5>
                      <p className="speaker-position">Lead Developer</p>
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
                            width={330}
                            height={354}
                          />
                        </a>
                        <ul className="speaker-social-list">
                          <li>
                            <a className="icon icon-xs fa-facebook-f" href="#" />
                          </li>
                          <li>
                            <a className="icon icon-xs fa-twitter" href="#" />
                          </li>
                          <li>
                            <a
                              className="icon icon-xs fa-youtube-play"
                              href="#"
                            />
                          </li>
                        </ul>
                      </div>
                      <h5 className="speaker-title">
                        <a href="#">Chritine Eve</a>
                      </h5>
                      <p className="speaker-position">Manager</p>
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
                            width={330}
                            height={354}
                          />
                        </a>
                        <ul className="speaker-social-list">
                          <li>
                            <a className="icon icon-xs fa-facebook-f" href="#" />
                          </li>
                          <li>
                            <a className="icon icon-xs fa-twitter" href="#" />
                          </li>
                          <li>
                            <a
                              className="icon icon-xs fa-youtube-play"
                              href="#"
                            />
                          </li>
                        </ul>
                      </div>
                      <h5 className="speaker-title">
                        <a href="#">Kevin Martin</a>
                      </h5>
                      <p className="speaker-position">Supporter</p>
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
                            width={330}
                            height={354}
                          />
                        </a>
                        <ul className="speaker-social-list">
                          <li>
                            <a className="icon icon-xs fa-facebook-f" href="#" />
                          </li>
                          <li>
                            <a className="icon icon-xs fa-twitter" href="#" />
                          </li>
                          <li>
                            <a
                              className="icon icon-xs fa-youtube-play"
                              href="#"
                            />
                          </li>
                        </ul>
                      </div>
                      <h5 className="speaker-title">
                        <a href="#">Sarah Rose</a>
                      </h5>
                      <p className="speaker-position">Designer</p>
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
                            width={330}
                            height={354}
                          />
                        </a>
                        <ul className="speaker-social-list">
                          <li>
                            <a className="icon icon-xs fa-facebook-f" href="#" />
                          </li>
                          <li>
                            <a className="icon icon-xs fa-twitter" href="#" />
                          </li>
                          <li>
                            <a
                              className="icon icon-xs fa-youtube-play"
                              href="#"
                            />
                          </li>
                        </ul>
                      </div>
                      <h5 className="speaker-title">
                        <a href="#">John Smith</a>
                      </h5>
                      <p className="speaker-position">Assistant</p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="button button-secondary box-with-triangle-right wow fadeScale"
                href="speakers.html"
                data-triangle=".button-overlay"
              >
                <span>View all speakers</span>
                <span className="button-overlay" />
              </a>
            </div>
          </div>
        </section>
        </div>
    )
}
