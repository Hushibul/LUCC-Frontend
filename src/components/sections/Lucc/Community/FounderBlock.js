import React, { Component } from "react";
import { Link } from "react-router-dom";

import img1 from "../../../../assets/images/founder/kanti.jpg";
import img2 from "../../../../assets/images/founder/keshob3.jpg";
import img3 from "../../../../assets/images/founder/smriti.jpg";
import img4 from "../../../../assets/images/founder/tushar.jpg";


const teamblock = [
  { img: img1, name: "Kanti Dhar", post: "Founder" },
  { img: img2, name: "Keshob Chakrabartty", post: "Founder" },
  { img: img3, name: "Shamsia Srimiti", post: "Founder" },
  { img: img4, name: "Tushar Charkrabartty", post: "Founder" },
];
class FounderBlock extends Component {
  render() {
    return (
      <section className="team-section section-gap">
        <div className="container">
          {/* Section Title */}
          <div className="section-title mb-40 both-border text-center">
            <h2 className="title">Founding Members</h2>
          </div>
          {/* Team Boxes */}
          <div className="row team-members justify-content-center">
            {teamblock.map((item, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-6 col-tiny-12">
                <div className="team-member">
                  <div className="member-picture-wrap">
                    <div className="member-picture">
                      <img src={item.img} alt="" />
                      <div className="social-icons">
                        <Link to="/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="/">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link to="/">
                          <i class="fab fa-linkedin-in"></i>
                        </Link>
                        <Link to="/">
                          <i className="fab fa-instagram" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="member-desc">
                    <h3 className="name">
                      <Link to="/teamdetail">{item.name}</Link>
                    </h3>
                    <span className="pro">{item.post}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default FounderBlock;
