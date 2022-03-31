import React from "react";
import { Link } from "react-router-dom";

import img from "../../../../assets/images/events/event1.jpg";

class Event1 extends React.Component {
  render() {
    return (
      <div className="container margin-x">
        <div className="tab-text-block left-image with-left-circle">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="block-image">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="block-text">
                <h2 className="title">TechStorm</h2>
                <p>
                  Department of CSE, LU is highly reputed in Bangladesh for
                  their continuous success in Programming and Software
                  Development Competitions. Today a team consisted of 7th
                  semester students of CSE, LU participated in NSU Technovation
                  2018 National Hackathon Contest and became 1st runner up. They
                  won 10000 BDT. Prize money in the contest. Team members are: S
                </p>
                <Link to="/eventsite" className="main-btn" style={{marginTop:'15px'}}>
                  EXPLORE NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event1;
