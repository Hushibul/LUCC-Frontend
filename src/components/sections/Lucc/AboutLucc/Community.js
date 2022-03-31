import React from "react";

import img2 from "../../../../assets/images/history/Champion.jpeg";

class Community extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="tab-text-block right-image with-right-circle">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-2 order-lg-1">
              <div className="block-text">
                <h2 className="title">Our Community</h2>
                <p>
                  Moving on, LUCC is now one of the biggest and most successful
                  clubs at Leading University Bangladesh through various
                  activities over the years since the club was founded with 100
                  active members. from all different fields in Leading
                  University. We have one of the strongest commuity around whose
                  members tries of help as much as possible.Moving on, LUCC is
                  now one of the biggest and most successful clubs at Leading
                  University Bangladesh through various activities over the
                  years since the club was founded with 100 active members. from
                  all different fields in Leading University. We have one of the
                  strongest commuity around whose members tries of help as much
                  as possible.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 order-1 order-lg-2">
              <div className="block-image">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
