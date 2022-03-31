import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// const PrivateRoute = ({component: Component, ...rest}) => {

//     const { error, loading, isAuthenticated,user } = useSelector(
//         (state) => state.user
//       );

// // console.log(user.role,"role");

//     return <Route {...rest} component={(props) => {
//         // const token = window.localStorage.getItem('token');
//         if(user.role=="super-admin"&& isAuthenticated){
//             return <Component {...props} />
//         }
//         else if(user.role=="admin"&&isAuthenticated){
//             return  <Redirect to={`/layout`} />
//         }
//          else{
//             return <Redirect to={`/`} />
//         }
//     }} />
// }

// export default PrivateRoute; 



const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} component={(props) => {
        const token = window.localStorage.getItem('jwt_user_token_v2');
        if(token){
            return <Component {...props} />
        }else{
            return <Redirect to={`/`} />
        }
    }} />
}

export default PrivateRoute;

// return <Route {...rest} component={(props) => {
//     // const token = window.localStorage.getItem('token');
//     if(user.role=="super-admin" ){
//         return <Component {...props} />
//     }
//     else if(user.role=="admin"){
//         return  <Redirect to={`/layout`} />
//     }
//      else{
//         return <Redirect to={`/`} />
//     }
// }} />