
import React,{useEffect,useState} from 'react'
// import Header2 from "../layout/header";
import { useSelector, useDispatch,} from "react-redux";
import { useAlert } from "react-alert";
import { Redirect ,useHistory} from 'react-router-dom';
import {
  getUserDetails,
  updateProfile,
  updateUser,
  clearErrors,
} from "../../actions/userAction";
import { UPDATE_USER_RESET } from "../../constants/userConstants";
import Header from '../layouts/Headertwolucc';






 const Foo = () => {


    const { error, isAuthenticated,userclass } = useSelector(
        (state) => state.user
      );
      
    
    
  
  
    const { loading, user } = useSelector((state) => state.userDetails);
    const { error: updateError,isUpdated,} = useSelector((state) => state.profile);
  
    console.log('iam from profile effect effect')
    const id = JSON.parse(localStorage.getItem('user'));
  
  
    const dispatch = useDispatch();
    const alert = useAlert();
    const userId = id;
    const history =useHistory();
    
    const Cencel=()=>{
      history.push('/')
    }
  
  
  
    const [state, setState] = useState({
      firstName: "",
      lastName:  '',
      depertment:'',
      student_id: '',
      batch: '',
      phone_number: '',
      pofilePicture: '',
      section: '',


//   -------default update ------

      contest_name:"",
      institute_name:"",
      transactionid:"",
       //   -------member2------
       member2_name: "",
       institute_name2: "",
       T_Shirt_Size2: "",
       phone_number2: "",
       student_id2: "",
    
        //   -------member3------
       member3_name: "",
       institute_name3: "",
       T_Shirt_Size3: "",
       phone_number3: "",
       student_id3: "",
    
         //   -------member3------
         member4_name: "",
         institute_name4: "",
         T_Shirt_Size4: "",
         phone_number4: "",
         student_id4: "",
         payment_number: "",
     
    });
  
  
    useEffect(() => {
      if (user && user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        
      
          setState({
          firstName: user.firstName,
          lastName:  user.lastName,
          depertment: user.depertment,
          student_id: user.student_id,
          batch: user.batch,
          phone_number: user.phone_number,
          pofilePicture: user.pofilePicture,
          section: user.section
      })
    }
  
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }
  
    if (isUpdated) {
      alert.success("User Updated Successfully");
      history.push("/profile");
      dispatch({ type: UPDATE_USER_RESET });
    }
  }, [dispatch, alert, error,  isUpdated, updateError, user, userId]);
  

  const updateUserSubmitHandler = (e) => {
    e.preventDefault();

    const UserData = {
        firstName           :      state.firstName,
        lastName          :        state.lastName,
        depertment          :      state.depertment,
        student_id        :        state.student_id,
        batch               :      state.batch,
        phone_number      :        state.phone_number,
        pofilePicture       :      state.pofilePicture,
        section           :        state.section,
      
      
    };

    dispatch(updateProfile(userId, UserData));
    console.log("userData",UserData)
    // console.log('userlog ID',userId)
    
  }
  
//  form state change

  const changeHandler = (e) => {
    setState({ 
         ...state,[e.target.name]: e.target.value
        }
    )
 }
    



//  backgroundImage: "url(" + "https://images.unsplash.com/photo-1517757910079-f57fd7f49a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80" + ")"
     return(

      <section style={{padding:'0px',backgroundRepeat:'repeat' ,background:'snow'}}>

        <div >
       
        <Header/>
          <div style={{ height:'200px'}}>
           
            </div>

    <div className="container">
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={user.pofilePicture}
                    alt="Admin"
                  
                    style={{height:'150px',height:'150',borderRadius:'20px '}}
                  />
                  {/* <div className="mt-3">
                    <h4>{user.firstName}</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-muted font-size-sm">
                      Bay Area, San Francisco, CA
                    </p>
                    <button className="btn btn-primary">Follow</button>
                    <button className="btn btn-outline-primary">Message</button>
                  </div> */}
                </div>
                <hr className="my-4" />
               
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-globe me-2 icon-inline"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <line x1={2} y1={12} x2={22} y2={12} />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      Website
                    </h6>
                    <span className="text-secondary">https://bootdey.com</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github me-2 icon-inline"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      Github
                    </h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-twitter me-2 icon-inline text-info"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                      Twitter
                    </h6>
                    <span className="text-secondary">@bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-instagram me-2 icon-inline text-danger"
                      >
                        <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      Instagram
                    </h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-facebook me-2 icon-inline text-primary"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      Facebook
                    </h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                </ul>
             </div>
            </div>
          </div>

         
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body" >
               
               <form onSubmit={updateUserSubmitHandler}>

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                 <div className="col-sm-9 text-secondary">
                   <input
                      value={state.firstName} 
                      placeholder="Name"
                      name="firstName" 
                      onChange={ changeHandler}  
                      type="text"
                      className="form-control"
                    //   defaultValue="John Doe"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Last Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      name="lastName" 
                      onChange={ changeHandler} 
                      type="text"
                      className="form-control"
                      value={state.lastName} 
                      placeholder="Name"
                    //   defaultValue="john@example.com"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Student ID</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      name="student_id"
                      onChange={ changeHandler}
                      type="text"
                      className="form-control"
                      value={state.student_id} 
                      placeholder="Student ID"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Depertment</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      name="depertment" 
                      onChange={ changeHandler}
                      type="text"
                      className="form-control"
                      value={state.depertment} 
                      placeholder="Depertment"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Batch</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      name="batch" 
                      onChange={ changeHandler}
                      type="text"
                      className="form-control"
                      value={state.batch} 
                      placeholder="Batch"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Section</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      name="section" 
                      onChange={changeHandler} 
                      type="text"
                      className="form-control"
                      value={state.section} 
                      placeholder="Section"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone Number</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      name="phone_number" 
                      onChange={changeHandler} 
                      type="text"
                      className="form-control"
                      value={state.phone_number}  
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Profile Picture</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      name="pofilePicture"
                      onChange={changeHandler} 
                      type="text"
                      className="form-control"
                      value={state.pofilePicture}  
                      placeholder="Profile Picture"
                    />
                  </div>
                </div>


                <div className="row">
                  <div className="col-sm-3" />
                  <div className="col-sm-9 text-secondary">
                    <input style={{height:'35px' }}
                      type="submit"
                      className="btn btn-primary px-4"
                      defaultValue="Save Changes"
                    />
                  </div>
                </div>
               </form >
              </div>
            </div>
            
            
            {/* <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="d-flex align-items-center mb-3">
                      Project Status
                    </h5>
                    <p>Web Design</p>
                    <div className="progress mb-3" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p>Website Markup</p>
                    <div className="progress mb-3" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "72%" }}
                        aria-valuenow={72}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p>One Page</p>
                    <div className="progress mb-3" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "89%" }}
                        aria-valuenow={89}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p>Mobile Template</p>
                    <div className="progress mb-3" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "55%" }}
                        aria-valuenow={55}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p>Backend API</p>
                    <div className="progress" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "66%" }}
                        aria-valuenow={66}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Foo