import React, { useEffect, useState } from "react";
import './css/style.css'

import logo from '../../../../assets/images/LUCC LOGO Main File[168].png';
import bg_blood from '../../../../assets/images/bg_blood.png';


import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register_blood, } from "../../../../actions/userAction";
import { useAlert } from "react-alert"
import { useHistory } from 'react-router-dom';



const Foo = () => {

  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [load, setLoad] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [blood_group, setBlood_group] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");




  const regSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      blood_group: blood_group,
      age: age,
      phone_number: phone_number,
      address: address,
      password: password

    }
    dispatch(register_blood(userData));
    alert.show('Registration successfull');
    history.push('/blood');

  };


  const redirect = () => {
    history.push('/blood');
  }

  useEffect(() => {

    dispatch(clearErrors());

    setTimeout(() => {
      setLoad(false)
    }, 500)

  }, [dispatch, error, alert, isAuthenticated,]);


  return (

    <>


      <section
        className="fxt-template-animation fxt-template-layout24 loaded"
        style={{ backgroundImage: "url(" + bg_blood + ")", }}
      >
        {/* Video Area Start Here */}
        <div className="fxt-video-background ">
          {/* <div className="fxt-video">
         
        </div> */}
        </div>
        {/* Video Area Start Here */}
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-3 col-12">
              <div className="fxt-header">
                <a href="login-24.html" className="fxt-logo">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="fxt-content">
                <h2 style={{ paddingBottom: '20px' }}>Donate Blood </h2>
                <div className="fxt-form">

                  <form onSubmit={regSubmit}>
                    <div className="form-group">
                      <div className="fxt-transformY-50 fxt-transition-delay-1">
                        <input

                          type="text"
                          className="form-control col-md-12"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="First Name"
                          onChange={(event) => setFirstName(event.target.value)}
                        />
                      </div>
                    </div>


                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Last Name"
                        onChange={(event) => setLastName(event.target.value)}

                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>


                    <div className="form-group">
                      <div class="input-group mb-3" >
                        <div class="input-group-prepend">
                          <label class="input-group-text" for="inputGroupSelect01">Options</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01"
                          onChange={(event) => setBlood_group(event.target.value)}>
                          <option selected>Choose...</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Age"
                        onChange={(event) => setAge(event.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Address"
                        onChange={(event) => setAddress(event.target.value)}
                      />


                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Phone Number"
                        required
                        onChange={(event) => setPhone_number(event.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          name="password"
                          placeholder="********"
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                    </div>


                    <div className="form-group">
                      <div className="fxt-transformY-50 fxt-transition-delay-4">
                        <button type="submit" className="fxt-btn-fill">
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="fxt-footer">

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





    </>
  )
}



export default Foo