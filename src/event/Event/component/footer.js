import React from 'react'
import logo_inverse_big from'../../Assets/images/logo-inverse-big.png'
import logo from '../../../assets/images/LUCC LOGO Main File[168].png';

export default function footer() {
    return (
        <div>
             {/* Section Pre Footer*/}
        <section className="section section-lg bg-gray-900">
          <div className="container">

            <div className="row row-30"> 

              <div className="col-xs-10 col-lg-4 align-self-center">
                <a className="brand" href="index.html">
                  <img
                    className="brand-logo-light"
                    style={{height:'70px',width:"170px" ,objectFit: "cover"}}
                    src={logo}

                    alt="Voelas"
                  />
                </a>
              </div>

              <div className="col-xs-10 col-sm-6 col-lg-10">
                <h5>
                  <span className="big font-weight-sbold">Event detail</span>
                </h5>
                <div className="event-detail">
                  <p className="event-detail-time big">
                    <time >
                     Phone :+00128516464
                    </time>
                  </p>
                  <p className="event-detail-address big" >
                  Leading University
                  Ragibnagar, South Surma, Sylhet-3112
                  </p>
                  <a className="event-detail-link" href="contact.html">
                    View map location
                  </a>
                </div>
              </div>
              
              <div className="col-xs-10 col-sm-6 col-lg-4">
                {/* <h5>
                  <span className="big font-weight-sbold">Social Updates</span>
                </h5> */}
                <div className="event-detail">
                  {/* <p className="big">
                    You may wonder: why this event so popular? If you do,
                    <br className="d-none d-xl-block" /> find more info about it
                    here.
                  </p> */}
                  {/* <ul className="list-inline list-inline-xs"> */}
                    {/* <li data-wow-delay=".2s">
                      <a
                        className="icon icon-rect icon-xs icon-white fa-facebook"
                        href="#"
                        data-triangle=".icon-rect-overlay"
                      >
                        <div className="icon-rect-overlay" />
                      </a>
                    </li>
                    <li data-wow-delay=".35s">
                      <a
                        className="icon icon-rect icon-xs icon-white fa-twitter"
                        href="#"
                        data-triangle=".icon-rect-overlay"
                      >
                        <div className="icon-rect-overlay" />
                      </a>
                    </li>
                    <li data-wow-delay=".5s">
                      <a
                        className="icon icon-rect icon-xs icon-white fa-linkedin"
                        href="#"
                        data-triangle=".icon-rect-overlay"
                      >
                        <div className="icon-rect-overlay" />
                      </a>
                    </li> */}
                    {/* <li >
                      <a
                        className="icon icon-rect icon-xs icon-white fa-youtube-play"
                        href="#"
                        
                      >
                         
                        <div className="icon-rect-overlay " />
                      </a>
                      <a href="#" id="ui-to-top" class="ui-to-top fa fa-angle-up active"></a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Divider*/}
        <div className="divider divider-gray-900 text-center" />
        {/* Footer Classic*/}
        <footer className="section footer-classic context-dark">
          <div className="container">
            <p className="rights">
              <span>Copyright&nbsp;</span>
              <span>©&nbsp;</span>
              <span className="copyright-year" />
              <span>&nbsp;</span>
              <span>by</span> <a href="http://bit.ly/dan-fisher">AlPHA</a>
            </p>
          </div>
        </footer>
        </div>
    )
}
