import React,{useEffect,useState} from "react";

import { useSelector, useDispatch,} from "react-redux";
import { useAlert } from "react-alert";
import { Link,useHistory} from 'react-router-dom';
import {clearErrors,getUserDetails_event,updateProfile_event,} from "../../../../actions/userAction";
import { UPDATE_USER_RESET } from "../../../../constants/userConstants";

import './LU_user_reg_form.css'
import Bg from'./bg3.jpg'

export default function Non_lu_member() {
  const { error } = useSelector(
    (state) => state.user
  );
  




const { user } = useSelector((state) => state.userDetails);
const { error: updateError,isUpdated,} = useSelector((state) => state.profile);

// console.log('iam from profile effect effect')
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
  student_id: '',
  phone_number: '',
  contest_name:"",
  institute_name:"",
  transactionid:"",
  reg_status:'',
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
    dispatch(getUserDetails_event(userId));
  } else {
    
  
      setState({
      firstName: user.firstName,
      student_id: user.student_id,
      phone_number: user.phone_number,
      contest_name: user.contest_name,
      institute_name:user.institute_name,
      transactionid: user.transactionid,
      T_Shirt_Size : user.T_Shirt_Size,
      payment_number : user.payment_number,
      reg_status    :user.reg_status,
      
       
    //   -------member2------
      member2_name: user.member2_name,
      institute_name2:  user.institute_name2,
      T_Shirt_Size2: user.T_Shirt_Size2,
      phone_number2: user.phone_number2,
      student_id2: user.student_id2,

        //   -------member3------
        member3_name: user.member3_name,
        institute_name3:  user.institute_name3,
        T_Shirt_Size3:  user.T_Shirt_Size3,
        phone_number3:  user.phone_number3,
        student_id3: user.student_id3,

         //   -------member4------
      member4_name: user.member4_name,
      institute_name4:  user.institute_name4,
      T_Shirt_Size4:  user.T_Shirt_Size4,
      phone_number4:  user.phone_number4,
      student_id4: user.student_id4,
            
     
  })
}

if (updateError) {
  alert.error(updateError);
  dispatch(clearErrors());
}

if (isUpdated) {
  alert.success("User Updated Successfully");
  history.push("/eventsite");
  dispatch({ type: UPDATE_USER_RESET });
}
}, [dispatch, alert, error,  isUpdated, updateError, user, userId]);


const updateUserSubmitHandler = (e) => {
e.preventDefault();

const UserData = {
    firstName           :      state.firstName,
    student_id          :      state.student_id,
    phone_number        :      state.phone_number,
    contest_name        :      state.contest_name,
    institute_name      :      state.institute_name,
    transactionid       :      state.transactionid,
    T_Shirt_Size        :      state.T_Shirt_Size,  
    payment_number      :      state.payment_number, 
    reg_status          :      state.reg_status, 
  
// ----------member2-------
    member2_name       : state.member2_name,
    institute_name2    : state.institute_name2,   
    T_Shirt_Size2      : state.T_Shirt_Size2,
    phone_number2      : state.phone_number2,
    student_id2        : state.student_id2,

    // ----------member2-------
    member3_name       : state.member3_name,
    institute_name3    : state.institute_name3,   
    T_Shirt_Size3      : state.T_Shirt_Size3,
    phone_number3      : state.phone_number3,
    student_id3        : state.student_id3,

    // ----------member2-------
    member4_name       : state.member4_name,
    institute_name4    : state.institute_name4,   
    T_Shirt_Size4      : state.T_Shirt_Size4,
    phone_number4      : state.phone_number4,
    student_id4        : state.student_id4,
};

dispatch(updateProfile_event(userId, UserData));
// console.log("userData",UserData)
// console.log('userlog ID',userId)

}

//  form state change

const changeHandler = (e) => {
setState({ 
     ...state,[e.target.name]: e.target.value
    }
)
}





// const [value,setValue]=useState('')
// console.log(value,'value')

    return (
        <div style={{ height: "auto", padding: "20px" , background:'snow',boxShadow: "4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38)", 
        backgroundImage: `url(${Bg})`
        }}>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    
                    
                    <div className="col-md-4 border-right border-top border-left border-bottom  p-1"
                    style={{fontWeight:'700' ,color:'green',  boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}
                    >

                        <div className="mt-5 text-center">
                            <Link className="btn btn-outline-success" to='/eventsite' type="button">Go To Home</Link>
                        </div>

                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img
                                className="rounded-circle mt-5"
                                width="150px"
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            />
                            <span className="font-weight-bold">
                                {user.firstName}
                            </span>
                            <span className="text-black-50">
                               {user.email}
                            </span>
                            <span> </span>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="font-weight-bold">
                                        ID:{" "}
                                    </label>
                                    <label
                                        style={{ marginLeft: "10px" }}
                                    >
                                        {user.username}
                                       
                                    </label>
                                </div>
                            </div>

                            <div className="mt-5 text-center">
                           
                            {user.reg_status=='registerd'?<button className="btn btn-success" type="button"> Registered</button>
                                : user.reg_status=='pending'?<button className="btn btn-warning" type="button">Pending</button>
                                 :<button className="btn btn-danger" type="button">Un-Register</button>}

                            </div>
                        </div>

                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">



                            {user.reg_status == 'registerd' ? <button className="btn btn-success" type="button" style={{
                                width: 'auto', height: "150px"
                                , boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'
                            }}> Payment<br /> Sucessful <br />You are Registered <br /></button>
                                : user.reg_status == 'pending' ? <button className="btn btn-warning" style={{
                                    width: '150px', height: "150px"
                                    , boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'
                                }} type="button">You are approved <br />for contestent <br />plaease make sure <br />payment sucess</button>
                                    : <button className="btn btn-danger" style={{
                                        width: '150px', height: "150px"
                                        , boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'
                                    }} >
                                        please wait 30 <br />minutes for <br />review your form
                                    </button>}


                        </div>


                    </div>

                    <div className="col-md-8 border-right border-top border-left border-bottom  p-1"
                     style={{ fontWeight:'700' ,color:'green', boxShadow: " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}
                    >
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">
                                    i am from NON_LU CC member
                                </h4>{" "}
                                <hr></hr>
                                {/* <h4 className="text-right">Profile Settings</h4> */}
                            </div>
                          

                     <form  onSubmit={updateUserSubmitHandler}>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="labels">
                                        Select Contest
                                    </label>
                                  
                                    <select  value={state.contest_name} onChange={ changeHandler}  name='contest_name'
                                        style={{borderStyle: "inset", height: "30px" }}
                                        // className="form-control form-control-sm"
                                    >
                                        {/* <option selected>
                                            Contest name
                                        </option> */}
                                        <option >Choose contest</option>
                                        <option value="programming_contest">PROGRAMMING CONTEST</option>
                                        <option value="dx_ball_contest">DX BALL</option>
                                        <option value="hackathon_contest">HACKATHON </option>
                                        <option value="fifa_contest">FIFA</option>
                                        <option value="nfs_contest">NFS</option>
                                        <option value="pubge_contest">PUBG</option>
                                    </select>
                                </div>

                                <div className="col-md-12">
                                    <label
                                        className="labels"
                                        style={{ fontSize: "20px",paddingTop:'10px' }}
                                    >
                                        Member 1 Details
                                    </label>
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">
                                        Institute Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Institute Name"
                                    name="institute_name"
                                    value={state.institute_name} 
                                    onChange={ changeHandler}
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Name"
                                    name="firstName"
                                    value={state.firstName} 
                                    onChange={ changeHandler}
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">
                                        Student ID
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Student ID"
                                        value={state.student_id} 
                                        onChange={ changeHandler}
                                        name='student_id'
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Mobile Number"
                                        value={state.phone_number} 
                                        onChange={ changeHandler}
                                        name='phone_number'
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">
                                        T-Shirt Size
                                    </label>
                                    <select value={state.T_Shirt_Size} onChange={ changeHandler}  name='T_Shirt_Size'
                                     className="form-control">
                                        <option > -SELECT-</option>
                                        <option value="s">S</option>
                                        <option value="m">M</option>
                                        <option value="l">L</option>
                                        <option value="xl">XL</option>
                                        <option value="xxl">XXL</option>
                                    </select>
                                </div>

                             

                         {/*------------------- Memmber2----------------------- */}
                                <div className="col-md-12">
                                    <label className="labels" style={{ fontSize: '20px',paddingTop:'10px' }}>Member 2 Details</label>
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Name"
                                        name="member2_name"
                                        value={state.member2_name} 
                                        onChange={ changeHandler}
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">Student ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Student ID"
                                        name="student_id2"
                                        value={state.student_id2} 
                                        onChange={ changeHandler}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Mobile Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Mobile Number"
                                        name="phone_number2"
                                        value={state.phone_number2} 
                                        onChange={ changeHandler}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">T-Shirt Size</label>
                                    <select  name="T_Shirt_Size2"
                                        value={state.T_Shirt_Size2} 
                                        onChange={ changeHandler}className="form-control" >
                                    <option > -SELECT-</option>
                                        <option value="s">S</option>
                                        <option value="m">M</option>
                                        <option value="l">L</option>
                                        <option value="xl">XL</option>
                                        <option value="xxl">XXL</option>
                                    </select>
                                </div>


                                 {/*------------------- Memmber3----------------------- */}
                                 <div className="col-md-12">
                                    <label className="labels" style={{ fontSize: '20px',paddingTop:'10px' }}>Member 3 Details</label>
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Name"
                                        name="member3_name"
                                        value={state.member3_name} 
                                        onChange={ changeHandler}
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">Student ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Student ID"
                                        name="student_id3"
                                        value={state.student_id3} 
                                        onChange={ changeHandler}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Mobile Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Mobile Number"
                                        name="phone_number3"
                                        value={state.phone_number3} 
                                        onChange={ changeHandler}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">T-Shirt Size</label>
                                    <select  name="T_Shirt_Size3"
                                        value={state.T_Shirt_Size3} 
                                        onChange={ changeHandler} className="form-control" >
                                    <option > -SELECT-</option>
                                        <option value="s">S</option>
                                        <option value="m">M</option>
                                        <option value="l">L</option>
                                        <option value="xl">XL</option>
                                        <option value="xxl">XXL</option>
                                    </select>
                                </div>


                                 {/*------------------- Memmber4----------------------- */}
                                 <div className="col-md-12">
                                    <label className="labels" style={{ fontSize: '20px',paddingTop:'10px' }}>Member 4 Details</label>
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Name"
                                        name="member4_name"
                                        value={state.member4_name} 
                                        onChange={ changeHandler}
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">Student ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Student ID"
                                        name="student_id4"
                                        value={state.student_id4} 
                                        onChange={ changeHandler}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Mobile Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Mobile Number"
                                        name="phone_number4"
                                        value={state.phone_number4} 
                                        onChange={ changeHandler}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">T-Shirt Size</label>
                                    <select  name="T_Shirt_Size4"
                                        value={state.T_Shirt_Size4} 
                                        onChange={ changeHandler} className="form-control" >
                                    <option > -SELECT-</option>
                                        <option value="s">S</option>
                                        <option value="m">M</option>
                                        <option value="l">L</option>
                                        <option value="xl">XL</option>
                                        <option value="xxl">XXL</option>
                                    </select>
                                </div>

                                {/* ------------------------transaction id------------------------------ */}
                                <div className="col-md-12">
                                     <label className="labels" style={{ fontSize: '20px',paddingTop:'10px' }}>Payment</label>
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">Bkass/Nagad/Rocket  Transaction id</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Transaction id"
                                        name="transactionid"
                                        value={state.transactionid} 
                                        onChange={ changeHandler}
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label className="labels">Bkass/Nagad/Rocket  Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Bkass/Nagad/Rocket  Phone Number"
                                        name="payment_number"
                                        value={state.payment_number} 
                                        onChange={ changeHandler}
                                    />
                                </div>

                            </div>
                          
                            <div className="mt-5 text-center">
                                <div className="mt-5 text-center">
                               {user.reg_status=='registerd'? <button disabled className="btn btn-primary profile-button">Registerd</button>
                               :  <button className="btn btn-primary profile-button" type="submit">Submit</button>}
                            </div> 
                            </div> 
                     </form>
                        
                        
                        
                        </div>
                    </div>
                    
                   
                </div>
            </div>
        </div>
    );
}
