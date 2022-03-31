// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useEffect, useState } from "react";
// import { style,makeStyles} from "@material-ui/core";
// import { fontFamily } from "@mui/system";
// import { Redirect ,useHistory} from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { clearErrors, login, register,loadUser,getAllUsers } from "../../actions/userAction";
// import {useAlert} from "react-alert"
// import { Password } from "@mui/icons-material";



// function Copyright(props) {
//   return (
//     <>
//     </>
//     // <Typography
//     //   variant="body2"
//     //   color="text.secondary"
//     //   align="center"
//     //   {...props}
//     // >
//     //   {"Copyright © "}
//     //   <Link color="inherit" href="https://material-ui.com/">
//     //     Whole Sale BD
//     //   </Link>{" "}
//     //   {new Date().getFullYear()}
//     //   {"."}
//     // </Typography>
//   );
// }

// const useStyles= makeStyles({
//   terms :{
//     // 
//    fontFamily: 'system-ui',
//    fontSize:'18px',
//    textDecorationLine:'underline',
//    cursor:'pointer',
//    margin:'0px 2px',
//    color:'darkcyan',
//   '&:hover': {
//     color:'blue',
//   }},

//   policy : {
//   fontFamily: 'system-ui',
//   fontSize:'18px',
//   textDecorationLine:'underline',
//   cursor:'pointer',
//   margin:'0px 2px',
//   color:'darkcyan',
//   '&:hover': {
//     color:'blue',
//   },
 
// },
 
// btn:{
//   background:'darkcyan',
//   color:'white'
// },
// row0:{
//   height:'2px',
//   width:'120px',
//   // display:'flex',
//   // flexDirection:'row',
//   // justifyContent:'center',
//   // alignItems:'center',
//   // margin:'20px',
//   background:'red'
// },
// row1:{
//   height:'2px',
//   width:'120px',
//   // display:'flex',
//   // flexDirection:'row',
//   // justifyContent:'center',
//   // alignItems:'center',
//   // margin:'20px',
//   background:'red',
// },

// login: {
//   color:"darkcyan",
//   textDecoration:"none",
//   cursor:'pointer',
//   margin:"5px",
//   fontFamily:'system-ui',
//   fontSize:'18px',
//   fontWeight:'700',
//   '&:hover': {
//     color:'blue',
//   }
// },
// logintext: {
//   color:'#181d6b',
//   textDecoration:"none",
//   cursor:'pointer',
//   margin:"5px",
//   // fontFamily:'system-ui',
//   fontSize:'16px',
//   fontWeight:'700'
// }



// })

// const theme = createTheme();

// export default function SignIn() {
//     const history = useHistory();
//     const styles=useStyles();
//     const alert = useAlert();
//     const dispatch = useDispatch();
  
//   const { error, loading, isAuthenticated,user } = useSelector(
//     (state) => state.user
//   );
 
//   const [load, setLoad] = useState(true);
  
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
  



//  const loginSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login(loginEmail, loginPassword));
//   };

// // const loginSubmit = (e) => {
// //   e.preventDefault();
// //   const user = {
// //     loginEmail,loginPassword
// // }
// //   dispatch(login(user));
// // };

  
  
//   // const redirect = location.search ? location.search.split("=")[1] : '/dashboard';
//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(getAllUsers());
//     }
    
//     dispatch(clearErrors());
//     // if (isAuthenticated) {
      
//     //   history.push('/dashboard');
//     // }
    
//     setTimeout(()=> {
//       setLoad(false)
//     }, 500)

//   }, [dispatch, error, alert,  isAuthenticated,]);
  
//   // console.log(user.role,"role");
//   return (
//     <div>
//     {load? ('rimel') : (
//     <div style={{backgroundColor:'#000000',height:'100vh',width:'100%',overflow:'hidden',display:'flex',justifyContent:'center',alignItems:'center'}}>
      
//     <ThemeProvider theme={theme}>
//       <Container
//         component="main"
//         maxWidth="xs"
//         style={{ backgroundColor: " #727272", borderRadius: "20px" ,height:'auto'}}
//       >
//         <CssBaseline />
//         <Box style={{ fontWeight: '700' ,}}
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
      
//           <Typography sx={{ mt: 1, mb: 4 }} component="h1" variant="h5" style={{fontWeight:'700'}}>
//             <span style={{color:'#181d6b'}}>LUCC</span>  <span style={{color:'#4cd8ac'}}>Signin</span>
          
          
//           </Typography>
          
//           <p    className={styles.logintext}>
//           By signing up, you agree to our 
//         <span className={styles.terms} >
//           terms
//         </span>
//         &
//         <span className={styles.policy}>
//         policy
//         </span>
//       </p>
//           <Box
//             component="form"
//             onSubmit={loginSubmit}
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             <TextField sx={{ input: { color: 'red' } }}
//               autoFocus
//               margin="normal"
//               required
//               fullWidth
//               id="standard-helperText"
//               label="Email"
//               value={loginEmail}
//               onChange={(event) => setLoginEmail(event.target.value)}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={loginPassword}
//               onChange={(event) => setLoginPassword(event.target.value)}
//             />
           
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button className={styles.btn}
              
//               fullWidth
//               variant="contained"
//               sx={{ mt: 1, mb: 4 }}
//             type='submit'
//             >
//               Sign in
//             </Button>
           
//             <Grid >
           
//             <Grid container
//                   direction="row"
//                   justifyContent="center"
//                   alignItems="center">

//             <Typography className={styles.row0}></Typography>
//             <Typography  > Or</Typography>
//             <Typography className={styles.row1}></Typography>
//             </Grid>
           
//               <Grid container
//                   direction="row"
//                   justifyContent="center"
//                   alignItems="center"
//                   sx={{ mt: 1, mb: 4 }}>

//                 <Link className={styles.logintext} href="/registration" variant="body2">
//                   Don`t have an account? <span className={styles.login}>Sign Up</span>
//                 </Link>
//               </Grid>
           
//             </Grid>
//           </Box>
//         </Box>
//         {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
//       </Container>
//     </ThemeProvider>
//     </div>
//     )}
   
//     </div>
//   );
// }