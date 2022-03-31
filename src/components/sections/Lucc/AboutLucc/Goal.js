import React from "react";
import img3 from "../../../../assets/images/history/Hackathon.jpeg";

class Goal extends React.Component {
  render() {
    return (
      <div className="container margin-x">
        <div className="tab-text-block left-image with-left-circle">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="block-image">
                <img src={img3} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="block-text">
                <h2 className="title">Our Goal</h2>
                <p>
                  The purpose of Leading University Computer Club is to provide
                  an atmosphere in which students who are interested in
                  computers and computer gaming can share their ideas, knowledge
                  and proficiency with other like-minded students. Our Club
                  meets weekly in the TLC, which has a wide variety of equipment
                  and software. We always try to learns about and use new
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Goal;
