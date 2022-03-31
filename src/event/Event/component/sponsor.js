import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllcontroller} from "../../../actions/userAction";


import sponsor_01_117x70 from'../../Assets/images/sponsor-01-117x70.png'
import sponsor_02_117x70 from'../../Assets/images/sponsor-02-66x83.png'
import sponsor_03_117x70 from'../../Assets/images/sponsor-03-119x33.png'
import sponsor_04_117x70 from'../../Assets/images/sponsor-04-116x68.png'
import bg_parallax_04_1894x1170 from'../../Assets/images/bg-parallax-04-1894x1170.jpg'

 const Sponsor=()=> {


  const dispatch = useDispatch();
  const { error, isAuthenticated,users} = useSelector(
    (state) => state.allUsers);
    
let A
    useEffect(() => {

     dispatch(getAllcontroller())
    
    
      
    }, []);
    return (
        <div>
             {/* Section Official Sponsors*/}
        <section
          className="parallax-container section"
          style={{ backgroundImage: `url(${bg_parallax_04_1894x1170})`,width: "100%",
          height: "auto"}}>
        
          <div className="parallax-content section-lg context-dark text-center">
            <div className="container">
              <h6>Our sponsorships</h6>
              <h3>Official Sponsors.</h3>
              <div className="row row-30 row-lg-50 justify-content-center">
                
                {/* Sponsor*/}
                 {/* <div className="col-sm-5 col-lg-3">
                  <div className="wow">
                    <div>
                      
                      <a
                        className="sponsor"
                        href="#"
                        data-triangle=".sponsor-overlay"
                      >
                        <div className="sponsor-overlay" />
                        <div className="sponsor-img">
                          <img
                            src={sponsor_01_117x70}
                            alt
                            width={117}
                            height={70}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
               </div> */}
                
                 
                
              
               { users&&users.filter(filter=>filter.controller_name==null ).map( item=> ( 
                <div className="col-sm-5 col-lg-3">
                  <div className="wow">
                    <div>
                      {/* Sponsor*/}
                     
                      <a
                        className="sponsor"
                        href="#"
                      
                      >
                        <div className="sponsor-overlay" />
                       
                        <div className="sponsor-img">

                          <img style={{height:'130px',width:'90px',objectFit:'contain'}} 
                            src={item.sponsor_logo}
                            // src={sponsor_04_117x70}
                            alt
                          />  <h4 style={{color:"#d59d48",fontWeight:'700'}}>{item.sponsor_name}</h4>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
               ))
                }

                <div className="col-xl-12">
                  <p className="font-weight-sbold font-secondary">
                    <span className="wow" data-splitting>
                      Don’t hesitate, contact us for better help and services.
                    </span>{" "}
                    <a className="link-inline wow fadeScale" href="#">
                      View All Sponsors
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default Sponsor
