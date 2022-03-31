import React, { Component } from "react";

// import promo from "../../../../assets/img/illustration/01.png";
import promo from "../../../../assets/images/about/promo.jpg";
// promo.jpg

class History extends Component {
  render() {
    return (
      <section className="about-section about-illustration-img section-gap">
        <div className="container">
          <div className="illustration-img">
            <img
            style={{height:'600px',width:'auto',objectFit:'cover'}}
            src={promo} alt="" />
          </div>
          <div className="row no-gutters justify-content-lg-end justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="about-text">
                <div className="section-title left-border mb-40">
                  <span className="title-tag">About Us</span>
                  <h2 className="title">Our History</h2>
                </div>
                <p className="mb-25">
                  Leading University Computer Club is one of the oldest club of
                  the university. The club started its journey at 2005. Four of
                  our founding members Keshob, Thushar, Smirti and Kanti made
                  this club for the students of Computer Science and
                  Enginnering. Their goal was to make a good learning place for
                  the students of Computer Science and Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default History;
