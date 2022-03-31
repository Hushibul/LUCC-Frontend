import React, { useEffect, useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, } from "react-redux";
import { getAllUsers } from "../../../../actions/userAction";

import img1 from "../../../../assets/images/founder/kanti.jpg";
import img2 from "../../../../assets/images/founder/keshob3.jpg";
import img3 from "../../../../assets/images/founder/smriti.jpg";
import img4 from "../../../../assets/images/founder/tushar.jpg";
import { positions } from "react-alert";

const teamblock = [
  { img: img1, name: "Kanti Dhar", post: "Founder" },
  { img: img2, name: "Keshob Chakrabartty", post: "Founder" },
  { img: img3, name: "Shamsia Srimiti", post: "Founder" },
  { img: img4, name: "Tushar Charkrabartty", post: "Founder" },
];

const ExecutiveBlock = () => {
  const dispatch = useDispatch();
  const {users } = useSelector((state) => state.allUsers);

   const [state,setState] =useState('')
   const [allUsers,setallUsers] =useState('')
   

  useEffect(() => {
    //  setState(state)
    dispatch(getAllUsers())
  }, []);

  //array
  const rows = [];
  users  &&
  users.forEach((item) => {
    if(state==state.length>0){
     rows.push(item)
      // console.log('state',item)
}
else if(item.position==state){
  rows.push(item)
}
  
});

  console.log('state',rows)

  return (
    <section className="advanced-tab section-gap">
      <div className="container">
        <div className="section-title text-center both-border mb-50">
          <h2 className="title">STEERING COMMITTEE MEMBERS </h2>
        </div>
        {/* Tabs Buttons */}
        <div className="tab-buttons">
          
          <Tab.Container defaultActiveKey="one">
          
            <Nav variant="tabs">
              <Nav.Item>
                {/* <Nav.Link eventKey="one">2018 - 2019</Nav.Link>
                <h2 className="title">STEERING COMMITTEE MEMBERS </h2> */}
                
                <div class="col-auto p-3">
                  <label class="sr-only" for="inlineFormInputGroup">Username</label>
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">Search</div>
                      {/* value={} onChange={(e) => setPosition(e.target.value)} */}
                      <select className="form-control form-control-lg" value={state} onChange={(e) => setState(e.target.value)}>
                  <option value="">Choose Position</option>
                  <option value='president'>President</option>
                  <option value='vice_president_activity' >Vice-President(Activity)</option>
                  <option value='vice-president_technical' >Vice-President(Technical)</option>
                  <option value="general_secretary" >General Secretary</option>
                  <option value="treasurer" >Treasurer</option>
                  <option value="organizing_secretary" >Organizing Secretary</option>
                  <option value="it_secretary" >IT Secretary</option>
                  <option value="publicity_secretary" >Publicity Secretary</option>
                  <option value="development_secretary" >Development Secretary</option>
                  <option value="publication_coordinator_lead" >Publication Coordinator Lead</option>
                  <option value="acm_programming_coordinator_lead" >ACM programming Coordinator Lead</option>
                  <option value="workshop_and_seminar_lead" >Workshop And Seminar Lead</option>
                  <option value="multimedia_and_Gaming _coordinator_lead" >Multimedia and Gaming Coordinator Lead</option>
                  <option value="senior_executives" >Senior Executives</option>
                  <option value="assistant_eneral_secretary" >Assistant General Secretary</option>
                  <option value="assistant_organizing_secretary" >Assistant Organizing Secretary</option>
                  <option value="assistant_treasurer" >Assistant Treasurer</option>
                  <option value="assistant_it_secretary" >Assistant IT Secretary</option>
                  <option value="assistant_sevelopment_secretary" >Assistant Development Secretary</option>
                  <option value="publication_coordinator" >Publication Coordinator</option>
                  <option value="acm_programming_coordinator" >ACM  programming Coordinator</option>
                  <option value="workshop_seminar_coordinator" >Workshop & seminar Coordinator</option>
                  <option value="multimedia_and_gaming_coordinotor" >Multimedia and Gaming Coordinotor</option>
                  <option value="official_photographer" >Official Photographer</option>

                </select>
                    </div>
                  </div>
                </div>

              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="two">2019 - 2020</Nav.Link>
              </Nav.Item> */}
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="one">
                <section className="team-section section-gap">
                  
                  {/* -------------------------------------- President------------------------------------ */}
                  <div className="container">
                    <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title"> President</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data =>  data.position == 'president').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "President" : ""}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                         {/* -------------------------------------- Vice-President(activity)------------------------------------ */}
                   <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Vice President(activity)</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data =>  data.position == 'vice_president_activity').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Vice President(activity)" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>

                   {/* -------------------------------------- Vice-President(Technical)------------------------------------ */}
                  

                   <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Vice President(Technical)</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'vice-president_technical').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Vice President(Technical)" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>
                   

                    {/* -------------------------------------- General Secretary------------------------------------ */}
                    <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">General Secretary</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'general_secretary').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "General Secretary" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                   {/* -------------------------------------- Treasurer------------------------------------ */}

                   <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Treasurer</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'treasurer').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Treasurer" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                    {/* -------------------------------------- Organizing Secretary------------------------------------ */}
                    <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Organizing Secretary</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'organizing_secretary').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Organizing Secretary" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>

 {/* -------------------------------------- IT Secretary------------------------------------ */}
                   <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">IT Secretary</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'it_secretary').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "IT Secretary" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                    {/* -------------------------------------- Publicity Secretary------------------------------------ */}
                    <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Publicity Secretary</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'publicity_secretary').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Publicity Secretary" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


  {/* -------------------------------------- Development Secretary----------------------------------- */}
                   <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Development Secretary)</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'development_secretary').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Development Secretary" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                    {/* -------------------------------------- Publication Coordinator Lead------------------------------------ */}
                    <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Publication Coordinator Lead</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'publication_coordinator_lead').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Publication Coordinator Lead" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                    {/* -------------------------------------- ACM programming Coordinator Lead------------------------------------ */}

                   <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">ACM programming Coordinator Lead</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'acm_programming_coordinator_lead').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "ACM programming Coordinator Lead" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                    {/* -------------------------------------- Workshop And Seminar Lead------------------------------------ */}
                    <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Workshop And Seminar Lead</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'workshop_and_seminar_lead').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Workshop And Seminar Lead" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>

                    {/* -------------------------------------- Multimedia and Gaming Coordinator Lead------------------------------------ */}

                   <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Multimedia and Gaming Coordinator Lead</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'multimedia_and_Gaming _coordinator_lead').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Multimedia and Gaming Coordinator Lead" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                    {/* -------------------------------------- Senior Executives------------------------------------ */}
                    <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Senior Executives</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'senior_executives').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Senior Executives" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>

 {/* -------------------------------------- Assistant General Secretary------------------------------------ */}
                   <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Assistant General Secretary</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'assistant_eneral_secretary').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Assistant General Secretary" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                    {/* -------------------------------------- Assistant Organizing Secretary------------------------------------ */}
                    <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Assistant Organizing Secretary</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'Assistant Organizing Secretary').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Assistant Organizing Secretary" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>

                     {/* -------------------------------------- Assistant Treasurer------------------------------------ */}

                   <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Assistant Treasurer</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'assistant_treasurer').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Assistant Treasurer" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                    {/* --------------------------------------Assistant IT Secretary------------------------------------ */}

                    <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Assistant IT Secretary</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'assistant_it_secretary').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Assistant IT Secretary" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                    {/* -------------------------------------- Assistant Development Secretary------------------------------------ */}

                    <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Assistant Development Secretary</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'assistant_sevelopment_secretary').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Assistant Development Secretary" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                    {/* -------------------------------------- Publication Coordinator------------------------------------ */}

                    <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Publication Coordinator</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'publication_coordinator').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Publication Coordinator" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                    {/* -------------------------------------- ACM  programming Coordinator------------------------------------ */}

                    <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">ACM  programming Coordinator</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'acm_programming_coordinator').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "ACM  programming Coordinator" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                    {/* -------------------------------------- Assistant Treasurer------------------------------------ */}

                    <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Assistant Treasurer</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'assistant_treasurer').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Assistant Treasurer" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                    {/* -------------------------------------- Workshop & seminar Coordinator------------------------------------ */}

                    <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Workshop & seminar Coordinator</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'workshop_seminar_coordinator').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Workshop & seminar Coordinator" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                    {/* -------------------------------------- Multimedia and Gaming Coordinotor------------------------------------ */}

                    <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">Multimedia and Gaming Coordinotor</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'multimedia_and_gaming_coordinotor').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "Multimedia and Gaming Coordinotor" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>

                    {/* -------------------------------------- official_photographer------------------------------------ */}

                    <div className="container">
                     <div className="section-title text-center both-border mb-50">
                      {/* <h2 className="title">official_photographer</h2> */}
                    </div>

                    {/* Team Boxes */}
                    <div className="row team-members justify-content-center">
                      {rows && rows.filter(data => data.role == 'admin' || data.position == 'official_photographer').map((item, i) => (
                        <div
                          key={i}
                          className="col-lg-3 col-md-4 col-6 col-tiny-12"
                        >
                          <div className="team-member">
                            <div className="member-picture-wrap">
                              <div className="member-picture">
                                <img 
                                style={{height:'166px',width:"250px",objectFit:'cover'}}
                                src={item.pofilePicture} alt="" />
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
                                <Link to={`/profile_view/${item._id}`}>{item.firstName + " " + item.lastName}</Link>
                              </h3>
                              <span className="pro">{item.role ? "official_photographer" : ""}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                   </div>


                  

                </section>
              </Tab.Pane>
              <Tab.Pane eventKey="two">
               
              </Tab.Pane>

            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </section>
  );

}

export default ExecutiveBlock;
