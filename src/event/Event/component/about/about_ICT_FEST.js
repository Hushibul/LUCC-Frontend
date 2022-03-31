import React from 'react'
import {Link} from "react-router-dom"
import home_1_01_470x590 from'../../../Assets/images/home-1-01-470x590.jpg'
// import home_1_01_470x590 from'../../../Assets/images'
import ictfest2 from'../../../Assets/images/ict fest2.jpg'

export default function aboutevent() {
  var today  = new Date();
    return (
        <div>
             {/* Section Biggest 2019 Digital Conference*/}
        <section className="section section-lg bg-default wow fadeIn">
          <div className="container">
            <div className="row row-30 justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5">
                <h6>about event</h6>
                <h3 className="heading-lg-postfix-15">
                Leading University Computer Club Presents "LU ICT FEST {today.getFullYear()}"
                </h3>
               
                <h6 style={{margin:'20px'}}>is Loading on it's way....</h6>
                
                <p>
                Leading University Computer Club (LUCC) organizes another awesome and amazing event which is ICT Fest. It gives all the students, and programmer all over the country to show their skill throughout the competition. They can also have fun by playing games. They can have a lots of prize by winning the competition.
                </p>
                {/* List Inline*/}
                <ul className="list-inline list-inline-xl">
                  <li>
                    <div className="unit">
                      <div className="unit-left">
                        <svg className="svg-icon-sm svg-icon-primary" role="img">
                          <use xlinkHref="images/svg/sprite.svg#earth-globe" />
                        </svg>
                      </div>
                      <div className="unit-body">
                        <h5>Where</h5>
                        <p>Leading University, sylhet</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="unit">
                      <div className="unit-left">
                        <svg className="svg-icon-sm svg-icon-primary" role="img">
                          <use xlinkHref="images/svg/sprite.svg#small-calendar" />
                        </svg>
                      </div>
                      <div className="unit-body">
                        <h5>When</h5>
                        <p>
                          <time dateTime="2019-01-05">{today.getFullYear()}</time>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <Link
                  className="button button-primary "
                  to="/registration"
                  data-triangle=".button-overlay"
                >
                  <span>Register Now</span>
                  <span className="button-overlay" />
                </Link>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 text-md-right">
                {/* Image Box*/}
                <div className="images-box">
                  <div className="images-box-item images-box-item-right">
                    <div className="wow fadeScale">
                      <img
                     style={{width:'auto',height:"590px",borderRadius:'20px'}}
                        src={ictfest2}
                        alt
                       
                      />
                    </div>
                  </div>
                  {/* <div className="images-box-item images-box-item-left">
                   
                      <img
                        src={home_1_02_270x257}
                        alt
                        width={270}
                        height={257}
                      />
                    
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}
