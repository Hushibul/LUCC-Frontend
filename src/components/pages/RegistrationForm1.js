import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register_event, loadUser, getAllUsers } from "../../actions/userAction";
import { useAlert } from "react-alert"



import "../../assets/css/Rimel_Form_css/css/style.css"
import logo_4 from "../../assets/images/LUCC LOGO Main File[168].png"
import bg4_l from "../../assets/images/bg2.jpg"
import axios from "axios";


export default function RegistrationForm1() {


  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );

  const [load, setLoad] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  const regSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password

    }
    dispatch(register_event(userData));
    console.log('from reg', userData)
  };




  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(getAllUsers());
    }

    if (isAuthenticated) {
      alert.show('Registration successfull');

    }

    dispatch(clearErrors());
    if (isAuthenticated) {

      history.push('/login1');
    }

    setTimeout(() => {
      setLoad(false)
    }, 500)

  }, [dispatch, error, alert, isAuthenticated,]);



  return (
    <div>

      <>

        <div id="wrapper" className="wrapper">
          <div className="fxt-template-animation fxt-template-layout4 loaded">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-12 fxt-bg-wrap">
                  <div className="fxt-bg-img" style={{ backgroundImage: `url(${bg4_l})` }}>
                    <div className="fxt-header">
                      <div className="fxt-transformY-50 fxt-transition-delay-1 ">
                        <a href="login-4.html" className="fxt-logo">
                          <img src={logo_4} alt="Logo" />
                        </a>
                      </div>

                    </div>
                    <ul className="fxt-socials">
                      <li className="fxt-facebook fxt-transformY-50 fxt-transition-delay-4">
                        <a href="#" title="Facebook">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="fxt-twitter fxt-transformY-50 fxt-transition-delay-5">
                        <a href="#" title="twitter">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="fxt-google fxt-transformY-50 fxt-transition-delay-6">
                        <a href="#" title="google">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                      <li className="fxt-linkedin fxt-transformY-50 fxt-transition-delay-7">
                        <a href="#" title="linkedin">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li className="fxt-youtube fxt-transformY-50 fxt-transition-delay-8">
                        <a href="#" title="youtube">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-12 fxt-bg-color">
                  <div className="fxt-content">
                    <div className="fxt-form">

                      <form onSubmit={regSubmit}>
                        <div className="form-group">
                          <label htmlFor="f_name" className="input-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="f_name"
                            className="form-control"
                            name="f_name"
                            placeholder="example name"
                            required="required"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="l_name" className="input-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="l_name"
                            className="form-control"
                            name="l_name"
                            placeholder="example name"
                            required="required"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email" className="input-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            name="email"
                            placeholder="demo@gmail.com"
                            required="required"
                            onChange={(event) => setEmail(event.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password" className="input-label">
                            Password
                          </label>
                          <input
                            id="password"
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="********"
                            required="required"
                            onChange={(event) => setPassword(event.target.value)}
                          />
                          <i
                            toggle="#password"
                            className="fa fa-fw fa-eye toggle-password field-icon"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="c_password" className="input-label">
                            Confirm Password
                          </label>
                          <input
                            id="c_password"
                            type="password"
                            className="form-control"
                            name="c_password"
                            placeholder="********"
                            required="required"
                          />
                          <i
                            toggle="#c_password"
                            className="fa fa-fw fa-eye toggle-password field-icon"
                          />
                        </div>
                        <div className="form-group">
                          <div className="fxt-checkbox-area">
                            <div className="checkbox">
                              <input id="checkbox1" type="checkbox" />
                              <label htmlFor="checkbox1">
                                I agree with the terms and condition
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="fxt-btn-fill">
                            Register
                          </button>
                        </div>
                      </form>

                    </div>
                    <div className="text-center">
                      <p>
                        Have an account?
                        <a
                          href="login1"
                          className="switcher-text2 inline-text"
                        >
                          Log in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>


    </div>
  )
}
