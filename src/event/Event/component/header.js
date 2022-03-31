import React, { useState } from 'react';
import {Link} from "react-router-dom"
import { useSelector, useDispatch,} from "react-redux";


import logo from '../../../assets/images/LUCC LOGO Main File[168].png';

import logo_default from'../../Assets/images/logo-default.png'
import logo_default2x from'../../Assets/images/logo-default@2x.png'
import { signout } from '../../../actions/userAction';


export default function Header() {
  const dispatch = useDispatch();
  const { error, isAuthenticated,userclass } = useSelector(
    (state) => state.user
  );

  const Signout=()=>{
    dispatch(signout())
  }

const [click,setClick]=useState(false)
const [click2,setClick2]=useState(false)
const Open_menu=()=>{
setClick(!click)
}
const Open_menu2=()=>{
  setClick2(!click2)
  }

    return (
        <div >
             <header className="section page-header">
          {/*RD Navbar*/}
          <div className="rd-navbar-wrap">
            <nav
              className="rd-navbar rd-navbar-classic  rd-navbar-fixed"
              data-layout="rd-navbar-fixed"
              data-sm-layout="rd-navbar-fixed"
              data-md-layout="rd-navbar-fixed"
              data-md-device-layout="rd-navbar-fixed"
              data-lg-layout="rd-navbar-static"
              data-lg-device-layout="rd-navbar-static"
              data-xl-layout="rd-navbar-static"
              data-xl-device-layout="rd-navbar-static"
              data-xxl-layout="rd-navbar-static"
              data-xxl-device-layout="rd-navbar-static"
              data-lg-stick-up-offset="46px"
              data-xl-stick-up-offset="46px"
              data-xxl-stick-up-offset="76px"
              data-lg-stick-up="true"
              data-xl-stick-up="true"
              data-xxl-stick-up="true"
            >
              <div
                className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1"
    
                onClick={Open_menu2}
              >
                <span />
              </div>
              <div className="rd-navbar-main-outer">
                <div className="rd-navbar-main">
                  {/*RD Navbar Panel*/}
                  <div className="rd-navbar-panel">
                    {/*RD Navbar Toggle*/}
                    <button
                      className={click?"rd-navbar-toggle toggle-original active ":"rd-navbar-toggle "}
                      data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                      onClick={Open_menu}
                    >
                      <span />
                    </button>
                    {/*RD Navbar Brand*/}
                    <div className="rd-navbar-brand">
                      {/*Brand*/}
                      <a className="brand" href="index.html">
                        <img
                          className=""
                          src={logo}
                          // srcSet={logo_default2x}
                          alt="Voelas"
                        />
                        <img
                          className="brand-logo-light"
                          src="images/logo-inverse.png"
                          srcSet="images/logo-inverse@2x.png 2x"
                          alt="Voelas"
                        />
                      </a>
                    </div>
                  </div>
                  {/* Rd Navbar Navigation*/}
                  <div className="rd-navbar-main-element">
                    <div className={click?"rd-navbar-nav-wrap toggle-original-elements active":'rd-navbar-nav-wrap'}>
                      <ul className="rd-navbar-nav">
                        {/* <li className="rd-nav-item active">
                          <a className="rd-nav-link" href="/">
                            Home
                          </a>
                        </li> */}
                       
                       
                        
                      
                       

                        <li className="rd-nav-item">
                          <Link className="rd-nav-link" to="/registration">
                            Registration
                          </Link>
                        </li>

                        <li className="rd-nav-item">
                          <Link className="rd-nav-link" to="/login1">
                            Login
                          </Link>
                        </li>

                        <li className="rd-nav-item">
                          <Link className="rd-nav-link" to="/event_profile_form_reg">
                            Update Information
                          </Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                  {/* RD Navbar Collapse*/}
                  <div className={click2?"rd-navbar-collapse active":"rd-navbar-collapse"}
                  >
                    <a
                      className="button button-primary"
                      href="/eventsite"
                     
                    >
                      {/* <span>Buy Tickets</span>
                      <span className="button-overlay" />
                       */}
                        <span onClick={Signout} >Log Out</span>
                      <span className="button-overlay" />

                       {/* {isAuthenticated?<div> <span onClick={Signout} >Log Out</span>
                      <span className="button-overlay" /></div> :
                      <div><span  ><Link to='/login1'> Log In</Link></span>
                      <span className="button-overlay" /></div>
                    } */}
                      
                    
                    </a>

                    
                 
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        </div>
    )
}
