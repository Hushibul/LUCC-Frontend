import React from 'react'
import {Link} from "react-router-dom"
import home_1_01_470x590 from'../../../Assets/images/home-1-01-470x590.jpg'
import techstrome from'../../../Assets/images/techstrome.jpg'
import home_1_02_270x257 from'../../../Assets/images/home-1-02-270x257.jpg'

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
                Leading University Computer Club Presents "LU TECHSTORM {today.getFullYear()}"
                </h3>
               
                <h6 style={{margin:'20px'}}>is Loading on it's way....</h6>
                
                <p>
                TechStorm is one in every of the most important activities prepared with the aid of using Leading University Computer Club. In this occasion many college students from college and different group take part in mind blowing activities consisting of video games and programming contest are the great amongst them. This occasion offers us with unique applications that are Hackathon, Programming Contest, Buzwire, DX-Ball, NFS.
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
                          <time >{today.getFullYear()}</time>
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
                        src={techstrome}
                        alt
                        style={{width:'470px',height:"590px",objectFit:'cover'}}
                        width={470}
                        height={590}
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
