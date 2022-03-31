import React, { useEffect,useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch,} from "react-redux";
import { getAllUsers} from "../../../../actions/userAction";

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

const AdvisorBlock =()=> {


          const dispatch = useDispatch();
          const { error, isAuthenticated,users} = useSelector(
            (state) => state.allUsers);
            
let A
            useEffect(() => {
    
             dispatch(getAllUsers())
            
            
              
            }, []);
            // .filter(data => data.role=='admin')
           
  // console.log(users,'rimel');

  // const[user,setUser]=useState([]);

  // A= users&&users.filter(data =>data.role=='admin').map((item) => {
  //   setUser(item)
  //   //  console.log('item',item.role)
  // })
    
     
  //     console.log('item',user)
   
  

  
  // console.log('hello',user)

  const teamblock = [
    { img: img1, name: "Kanti Dhar", post: "Founder" },
    { img: img2, name: "Keshob Chakrabartty", post: "Founder" },
    { img: img3, name: "Shamsia Srimiti", post: "Founder" },
    { img: img4, name: "Tushar Charkrabartty", post: "Founder" },
  ];
 
    return (
      <section className="advanced-tab section-gap">
        <div className="container">
          <div className="section-title text-center both-border mb-50">
            <h2 className="title">Advisor</h2>
          </div>
          {/* Tabs Buttons */}
          <div className="tab-buttons">
          
            <Tab.Container defaultActiveKey="one">
             
              <Nav variant="tabs">
                
                {/* <Nav.Item>
                  <Nav.Link eventKey="one">2018 - 2019</Nav.Link>
                </Nav.Item> */}

                {/* <Nav.Item>
                  <Nav.Link eventKey="two">2019 - 2020</Nav.Link>
                </Nav.Item> */}

              </Nav>
              <Tab.Content>

                <Tab.Pane eventKey="one">
                  <section className="team-section section-gap">
                    <div className="container">
                      {/* Team Boxes */}
                      <div className="row team-members justify-content-center">
                        {users&&users.filter(data => data.role=='super-admin').map((item, i) => (
                         
                           

                        <div className="col-lg-3 col-md-4 col-6 col-tiny-12" >
                            <div className="team-member">
                              <div className="member-picture-wrap">
                                <div className="member-picture">
                                  <img 
                                  //  style={{height:'166px',width:"250px",objectFit:'cover'}}
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
                                  <Link to="/teamdetail">{item.firstName +" "+item.lastName}</Link>
                                </h3>
                                <span className="pro">{item.role?"Advisor":""}</span>
                              </div>
                            </div>
                          </div> 
                         
                        ))}
                      </div>
                    </div>
                  </section>
                </Tab.Pane>
                
                {/* <Tab.Pane eventKey="two">
                <section className="team-section section-gap">
                    <div className="container">
                      {/* Team Boxes */}
                      {/* <div className="row team-members justify-content-center"> */}
                        {/* {teamblock.map((item, i) => ( */}
                          {/* <div
                            key={i}
                            className="col-lg-3 col-md-4 col-6 col-tiny-12"
                          >
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
                      </div> */}
                    {/* </div>
                  </section> */}
                {/* </Tab.Pane>  */}
               
              </Tab.Content>
            </Tab.Container>
            
          </div>
        </div>
      </section>
    );
  
}

export default AdvisorBlock;
