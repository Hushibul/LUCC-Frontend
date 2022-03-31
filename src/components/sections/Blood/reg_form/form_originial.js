import React, { useEffect, useState } from "react";
import './css/style.css'
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
      <div className="main">
        <div className="container" >

          <div className="bodym">

            <div >
              <div className="form-holder">
                <div className="form-content">
                  <div className="form-items">
                    <h3>Register Today</h3>
                    <p>Fill in the data below.</p>

                    <form className="requires-validation" noValidate="">

                      <div className="col-md-12">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required=""
                        />

                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="First Name"
                          onChange={(event) => setFirstName(event.target.value)}
                        />
                      </div>

                      <label htmlFor="exampleInputEmail1">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Last Name"
                        onChange={(event) => setLastName(event.target.value)}

                      />
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(event) => setEmail(event.target.value)}
                      />
                      <small id="emailHelp" >
                        We'll never share your email with anyone else.
                      </small>

                      <label htmlFor="exampleInputEmail1">Blood Group</label>
                      <div class="input-group mb-3">
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
                      <label htmlFor="exampleInputEmail1">Age</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Age"
                        onChange={(event) => setAge(event.target.value)}
                      />
                      <label htmlFor="exampleInputEmail1">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Address"
                        onChange={(event) => setAddress(event.target.value)}
                      />
                      <label htmlFor="exampleInputEmail1">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Phone Number"
                        required
                        onChange={(event) => setPhone_number(event.target.value)}
                      />
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"

                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">
                          Check me out
                        </label>
                      </div>
                      <button type="submit" className="button">
                        Submit
                      </button>

                      <div className="col-md-12">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="E-mail Address"
                          required=""
                        />
                        <div className="valid-feedback">Email field is valid!</div>
                        <div className="invalid-feedback">
                          Email field cannot be blank!
                        </div>
                      </div>
                      <div className="col-md-12">
                        <select className="form-select mt-3" required="">
                          <option selected="" disabled="" value="">
                            Position
                          </option>
                          <option value="jweb">Junior Web Developer</option>
                          <option value="sweb">Senior Web Developer</option>
                          <option value="pmanager">Project Manager</option>
                        </select>
                        <div className="valid-feedback">You selected a position!</div>
                        <div className="invalid-feedback">
                          Please select a position!
                        </div>
                      </div>
                      <div className="col-md-12">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Password"
                          required=""
                        />
                        <div className="valid-feedback">Password field is valid!</div>
                        <div className="invalid-feedback">
                          Password field cannot be blank!
                        </div>
                      </div>
                      <div className="form-button mt-3 col-md-12">
                        <button id="submit" type="submit" className="btn btn-primary">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}



export default Foo