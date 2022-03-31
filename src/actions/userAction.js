import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";
import axios from "axios";


export const login = (email, password) => {



  return async (dispatch) => {

      dispatch({ type:LOGIN_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const res = await axios.post(`http://localhost:2000/api/signin`, {
        email, password ,
      config 
      });
      
    
      if(res.status === 200){
          const { token, user } = res.data;
          localStorage.setItem('jwt_user_token_v2', token);
          localStorage.setItem('user', JSON.stringify(user._id));
          // localStorage.setItem('user', JSON.stringify(user)); token version
          dispatch({
              type:LOGIN_SUCCESS,
              payload: {
                  token, user
              }
          });
      }else{
          if(res.status === 400){
              dispatch({
                  type: LOGIN_FAIL,
                  payload: { error: res.data.error }
              });
          }
      }
  }
}

//if you want use token then use this code
// export const isUserLoggedIn = () => {
//   return async dispatch => {
//     try {
//       dispatch({ type: LOAD_USER_REQUEST });
//       const token = localStorage.getItem('jwt_user_token');
//       if (token) {
//         const user = JSON.parse(localStorage.getItem('user'));
//         // console.log('user', user)
//         dispatch({
//           type: LOAD_USER_SUCCESS,
//           payload: {
//             token, 
//             user
//           }
//         });
//       }
//     }

//     catch (error) {
//       dispatch({
//         type: LOAD_USER_FAIL,
//         payload: { error: 'Failed to login' }
//       });
//     }
//   }
// }

export const loadUser = () => {
  return async dispatch => {
    try {
      dispatch({ type: LOAD_USER_REQUEST });
      const token = localStorage.getItem('jwt_user_token_v2');
      
      if (token) {
        const id = JSON.parse(localStorage.getItem('user'));
        // console.log('from admin action id',id)
        const res = await axios.get(`http://localhost:2000/api/admin/loaduser/${id}`
        );

        if (res.status === 200) {
          const { success, user } = res.data;
          // console.log('user success', typeof (res.data))
          dispatch({ type: LOAD_USER_SUCCESS,
             payload:{
               user, 
               success, 
               token 
            }});
          // console.log('log',user)
        }
      }
    } catch (error) {
      dispatch({
        type: LOAD_USER_FAIL,
        payload: { error: 'Failed to login' }
      });
      console.log('error', error)
    }
  }
}


// signout
export const signout = () => {
  return async dispatch => {
    console.log('signout')
      dispatch({ type: LOGOUT_REQUEST });
      const res = await axios.post(`http://localhost:2000/api/admin/signout`);

      if(res.status === 200){
          localStorage.clear();
          
          dispatch({ type: LOGOUT_SUCCESS });
         
      }else{
          dispatch({
              type: LOGOUT_FAIL,
              payload: { error: res.data.error }
          });
      }

      
  }
}


// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
console.log('from reg',userData)
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`http://localhost:2000/api/signup`, userData, config);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Load User
// export const loadUser = () => async (dispatch) => {
//   try {
//     dispatch({ type: LOAD_USER_REQUEST });

//     const { data } = await axios.get(`http://localhost:2000/api/admin/loaduser`);
//     console.log('load user',data)

//     dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
//   } catch (error) {
//     dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
//   }
// };

// Logout User
// export const signout = () => async (dispatch) => {
//   try {
//     await axios.get(`http://localhost:2000/api/admin/signout`);

//     dispatch({ type: LOGOUT_SUCCESS });
//     console.log("logout")
//   } catch (error) {
//     dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
//   }
// };





// Update Profile
export const updateProfile = (id,userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
// console.log('profile data',userData)
// console.log('id',id)
    const config = { headers: {  "Content-Type": "application/json" } };

    const { data } = await axios.put(`http://localhost:2000/api/editprofile/${id}`, userData, config);

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/password/update`,
      passwords,
      config
    );

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/password/forgot`, email, config);

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/password/reset/${token}`,
      passwords,
      config
    );

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get All Users
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });
    const { data } = await axios.get(`http://localhost:2000/api/alluser`);
    // console.log("res =>", data.users);
    dispatch({ type: ALL_USERS_SUCCESS, payload: data });
    // dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
    // console.log("res =>", data);
  } catch (error) {
    dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
  }
};

// get  User Details
export const getUserDetails = (id) => async (dispatch) => {
  try {
    
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await axios.get(`http://localhost:2000/api/${id}`);

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    // console.log('single',data)
  } catch (error) {
    dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
  }
};

// Update User
export const updateUser = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `http://localhost:2000/api/edit/${id}`,
      userData,
      console.log('userData',userData),
      config
    );

    dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete User
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/user/${id}`);

    dispatch({ type: DELETE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};



// ------------------for event lucc----------------------


///Login
export const login_event = (email, password) => {



  return async (dispatch) => {

      dispatch({ type:LOGIN_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const res = await axios.post(`http://localhost:2000/api/signin_event`, {
        email, password ,
      config 
      });
      
    
      if(res.status === 200){
          const { token, user } = res.data;
          localStorage.setItem('jwt_user_token_event', token);
          localStorage.setItem('user', JSON.stringify(user._id));
          // localStorage.setItem('user', JSON.stringify(user)); token version
          dispatch({
              type:LOGIN_SUCCESS,
              payload: {
                  token, user
              }
          });
      }else{
          if(res.status === 400){
              dispatch({
                  type: LOGIN_FAIL,
                  payload: { error: res.data.error }
              });
          }
      }
  }
}

// Register
export const register_event = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
console.log('from reg',userData)
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`http://localhost:2000/api/signup_event`, userData, config);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    console.log(error.response.data.message,'error');
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
      
    });
  }
};

///Load event user
export const loadUser_event = () => {
  return async dispatch => {
    try {
      dispatch({ type: LOAD_USER_REQUEST });
      const token = localStorage.getItem('jwt_user_token_event');
      
      if (token) {
        const id = JSON.parse(localStorage.getItem('user'));
        // console.log('from admin action id',id)
        const res = await axios.get(`http://localhost:2000/api/loaduser_event/${id}`
        );

        if (res.status === 200) {
          const { success, user } = res.data;
          // console.log('user success', typeof (res.data))
          dispatch({ type: LOAD_USER_SUCCESS,
             payload:{
               user, 
               success, 
               token 
            }});
          // console.log('log',user)
        }
      }
    } catch (error) {
      dispatch({
        type: LOAD_USER_FAIL,
        payload: { error: 'Failed to login' }
      });
      console.log('error', error)
    }
  }
}


// signout event
export const signout_event = () => {
  return async dispatch => {

      dispatch({ type: LOGOUT_REQUEST });
      const res = await axios.post(`http://localhost:2000/api/admin/signout`);

      if(res.status === 200){
          localStorage.clear();
          
          dispatch({ type: LOGOUT_SUCCESS });
         
      }else{
          dispatch({
              type: LOGOUT_FAIL,
              payload: { error: res.data.error }
          });
      }

      
  }
}


// get  User Details
export const getUserDetails_event = (id) => async (dispatch) => {
  try {
    
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await axios.get(`http://localhost:2000/api/event/${id}`);

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    // console.log('single',data)
  } catch (error) {
    dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
  }
};

// Update Profile
export const updateProfile_event = (id,userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
console.log('profile data',userData)
console.log('id',id)
    const config = { headers: {  "Content-Type": "application/json" } };

    const { data } = await axios.put(`http://localhost:2000/api/editprofileevent/${id}`, userData, config);

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};


// ------------------------global controller------------------------

// get All Users
export const getAllcontroller = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });
    const { data } = await axios.get(`http://localhost:2000/api/alluser/global`);
    // console.log("res =>", data.users);
    dispatch({ type: ALL_USERS_SUCCESS, payload: data });
    // dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
    // console.log("res =>", data);
  } catch (error) {
    dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
  }
};



// get  User Details
export const getControllerDetails = (id) => async (dispatch) => {
  try {
    
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await axios.get(`http://localhost:2000/api/global/${id}`);

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    // console.log('single',data)
  } catch (error) {
    dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
  }
};

// get schedule
export const getControllerDetails_schedule = (id) => async (dispatch) => {
  try {
    
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await axios.get(`http://localhost:2000/api/global/${id}`);

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    // console.log('single',data)
  } catch (error) {
    dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
  }
};



// --------------------Blood bank---------------------


// Register
export const register_blood = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
console.log('from reg',userData)
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`http://localhost:2000/api/signup_blood`, userData, config);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    console.log(error.response.data.message,'error');
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
      
    });
  }
};


// get All Users
export const getAllBlood_group = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });
    const { data } = await axios.get(`http://localhost:2000/api/allblood/all`);
    // console.log("res =>", data.users);
    dispatch({ type: ALL_USERS_SUCCESS, payload: data });
    // dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
    // console.log("res =>", data);
  } catch (error) {
    dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
  }
};