import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch,} from "react-redux";
import { useAlert } from "react-alert";
import { Redirect ,useHistory} from 'react-router-dom';
import {
  getUserDetails,
  updateProfile,
  updateUser,
  clearErrors,
} from "../../../actions/userAction";
import { UPDATE_USER_RESET } from "../../../constants/userConstants";



const Workingprocess =()=> {
    
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
      reg_status:"",
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
          section: user.section,
          reg_status:user.reg_status,


         //   -------default update ------
    
      contest_name: user.contest_name,
      institute_name:user.institute_name,
      transactionid: user.transactionid,
      T_Shirt_Size : user.T_Shirt_Size,
      payment_number : user.payment_number,
      
      
       
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
      history.push("/profile");
      dispatch({ type: UPDATE_USER_RESET });
    }
  }, [dispatch, alert, error,  isUpdated, updateError, userId]);
  

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

//   -------default update ------
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

    dispatch(updateProfile(userId, UserData));
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
    



   
        return (
            <section style={{display:'flex',justifyContent:'center',alignItems:'center',height:"120vh",width:"100%", padding: "100px",}}>
                <div className="container">
                    
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10 order-lg-2 order-2">
                            <div className="process-text">
                                {/* Section Title */}
                                <div className="section-title left-border mb-30">
                                    <span className="title-tag">Profile</span>
                                    <h2 className="title">{'Hello'+" "+user.firstName+' '+user.lastName } </h2>
                                </div>
                                <p>
                                    Please fill up the all information 
                                </p>
                              

                                {/* <div className="process-loop"> */}
                                   
                                        
                                        <div   >
                                            {/* <div className="icon">
                                                <i className={item.icon} />
                                                <span>{item.number}</span>
                                            </div> */}
                                           

                                            

                                            {/* <div className="content">
                                                <h4>{item.title}</h4>
                                                <p>{item.text}</p>
                                            </div> */}

                                            <div >
                                            <form onSubmit={updateUserSubmitHandler}>
                                                
                                                <div className="col-auto">
                                                <label className="sr-only" for="inlineFormInputGroup">Username</label>
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text" style={{width:'155px',fontWeight:'700', background:'#ff4a17',color:"white"}}>First Name</div>
                                                    </div>
                                                    <input type="text" className="form-control" id="inlineFormInputGroup"  name="firstName"  onChange={ changeHandler} value={state.firstName}  placeholder="firstName"/>
                                                </div>
                                               </div>

                                               <div className="col-auto">
                                                <label className="sr-only" for="inlineFormInputGroup">Last Name</label>
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text" style={{width:'155px',fontWeight:'700', background:'#ff4a17',color:"white"}} > Last Name</div>
                                                    </div>
                                                    <input type="text" className="form-control" id="inlineFormInputGroup"  name="firstName"  onChange={ changeHandler} value={state.lastName} placeholder="lastName"/>
                                                </div>
                                               </div>

                                               <div className="col-auto">
                                                <label className="sr-only" for="inlineFormInputGroup">STUDENT ID</label>
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text" style={{width:'155px',fontWeight:'700', background:'#ff4a17',color:"white"}} >STUDENT ID</div>
                                                    </div>
                                                    <input type="text" className="form-control" id="inlineFormInputGroup" name="student_id" onChange={ changeHandler} value={state.student_id} placeholder="student id"/>
                                                </div>
                                               </div>

                                               <div className="col-auto">
                                                <label className="sr-only" for="inlineFormInputGroup">DEPERTMENT</label>
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text" style={{width:'155px',fontWeight:'700', background:'#ff4a17',color:"white"}} >DEPERTMENT</div>
                                                    </div>
                                                    <input type="text" className="form-control" id="inlineFormInputGroup" name="depertment" onChange={ changeHandler} value={state.depertment} placeholder="depertment" />
                                                </div>
                                               </div>

                                               <div className="col-auto">
                                                <label className="sr-only" for="inlineFormInputGroup">BATCH</label>
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text" style={{width:'155px',fontWeight:'700', background:'#ff4a17',color:"white"}} >BATCH</div>
                                                    </div>
                                                    <input type="text" className="form-control" id="inlineFormInputGroup" name="batch" onChange={ changeHandler} value={state.batch}   placeholder="Batch" />
                                                </div>
                                               </div>

                                               <div className="col-auto">
                                                <label className="sr-only" for="inlineFormInputGroup">SECTION</label>
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text" style={{width:'155px',fontWeight:'700', background:'#ff4a17',color:"white"}} >SECTION</div>
                                                    </div>
                                                    <input type="text" className="form-control" id="inlineFormInputGroup" name="section" onChange={ changeHandler} value={state.section} placeholder="Section"/>
                                                </div>
                                               </div>

                                               <div className="col-auto">
                                                <label className="sr-only" for="inlineFormInputGroup">PHONE NUMBER</label>
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text" style={{width:'155px',fontWeight:'700', background:'#ff4a17',color:"white"}} >PHONE NUMBER</div>
                                                    </div>
                                                    <input type="text" className="form-control" id="inlineFormInputGroup" name="phone_number" onChange={ changeHandler} value={state.phone_number} placeholder="Phone Number"/>
                                                </div>
                                               </div>

                                               <div className="col-auto">
                                                <label className="sr-only" for="inlineFormInputGroup">PROFILE PICTURE</label>
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text" style={{width:'155px',fontWeight:'700', background:'#ff4a17',color:"white"}} >PROFILE PICTURE</div>
                                                    </div>
                                                    <input type="text" className="form-control" id="inlineFormInputGroup" name="pofilePicture" onChange={ changeHandler} value={state.pofilePicture} placeholder="Pofile Picture"/>
                                                </div>
                                               </div>

                                            
                                                <div className="col-sm-12" />
                                                <div className="col-sm-12 ">
                                                    <button style={{ height: '35px',width:'100%' }}
                                                        type="submit"
                                                        className="btn btn-primary px-4"
                                                        
                                                    >Update</button>
                                                </div>
                                            
                                                </form>
                                                </div>
                                        </div>
                                    {/* ))} */}

                                {/* </div> */}

                                
                            </div>
                        </div>
                       
                        {/* <div className="col-lg-6 col-md-10 order-lg-1 order-1">
                            <div className="process-video bg-img-c" style={{ height:'150px',height:'150',borderRadius:'20px ', backgroundImage: "url(" + user.pofilePicture + ")" }}>
                              
                            </div>
                        </div> */}

                        <div className="col-lg-6 col-md-10 order-lg-1 order-1">
                            <img src={user.pofilePicture} style={{ width:'auto',height:'400px',borderRadius:'20px ', }}/>
                              
                            
                        </div>
                        
                    </div>
                </div>
                {/* <div className="working-circle" /> */}
            </section>
        );
    
}

export default Workingprocess;