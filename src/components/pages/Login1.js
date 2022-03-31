import  React,{ useEffect, useState }  from "react";
import {Link} from 'react-router-dom'
import { Redirect ,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login_event, register,loadUser,getAllUsers } from "../../actions/userAction";
import {useAlert} from "react-alert"




///import assets
import "../../assets/css/Rimel_Form_css/css/style.css"
import logo_4 from "../../assets/images/LUCC LOGO Main File[168].png"
import bg4_l from "../../assets/images/bg2.jpg"
// import "../../assets/css/Rimel_Form_css/css/bootstrap.min.css"

export default function Login1() {


  const history = useHistory();
  
    const alert = useAlert();
    const dispatch = useDispatch();
  
  const { error, isAuthenticated } = useSelector(
    (state) => state.user
  );
 
  const [load, setLoad] = useState(true);
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  



 const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login_event(loginEmail, loginPassword));
    // console.log("loginEmail",loginEmail,"LoginPassword", loginPassword)
  };

// const loginSubmit = (e) => {
//   e.preventDefault();
//   const user = {
//     loginEmail,loginPassword
// }
//   dispatch(login(user));
// };

  
  
  // const redirect = location.search ? location.search.split("=")[1] : '/dashboard';
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(getAllUsers());
    }
    
    dispatch(clearErrors());
    if (isAuthenticated) {
      
      history.push('/event_profile_form_reg');
    }
    
    setTimeout(()=> {
      setLoad(false)
    }, 500)

  }, [dispatch, error, alert,  isAuthenticated,]);


    return (
        <div>
            <>
    
   
    <section className="fxt-template-animation fxt-template-layout4 loaded">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12 fxt-bg-wrap">
            <div className="fxt-bg-img" style={{backgroundImage: `url(${bg4_l})`}}>
              <div className="fxt-header">
                <div className="fxt-transformY-50 fxt-transition-delay-1">
                  <a href="login-4.html" className="fxt-logo">
                    <img src={logo_4} alt="Logo" />
                  </a>
                </div>
                {/* <div className="fxt-transformY-50 fxt-transition-delay-2">
                  <h1>Welcome To Our xmee</h1>
                </div>
                <div className="fxt-transformY-50 fxt-transition-delay-3">
                  <p>
                    Grursus mal suada faci lisis Lorem ipsum dolarorit more
                    ametion consectetur elit. Vesti at bulum nec odio aea the
                    dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit
                    to the dummy consectetur elit the Lorem Ipsum genera.
                  </p>
                </div> */}
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
               
               {/* ----------form---------- */}
                <form onSubmit={loginSubmit}>
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
                      value={loginEmail}
                      onChange={(event) => setLoginEmail(event.target.value)}
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
                      value={loginPassword}
                      onChange={(event) => setLoginPassword(event.target.value)}
                    />
                    <i
                      toggle="#password"
                      className="fa fa-fw fa-eye toggle-password field-icon"
                    />
                  </div>
                  <div className="form-group">
                    <div className="fxt-checkbox-area">
                      <div className="checkbox">
                        <input className="checkbox1" type="checkbox" />
                        <label htmlFor="checkbox1">Keep me logged in</label>
                      </div>
                      <a
                        href="forgot-password-4.html"
                        className="switcher-text"
                      >
                        Forgot Password
                      </a>
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="fxt-btn-fill">
                      Log in
                    </button>
                  </div>
                </form>
              </div>
              <div className="fxt-footer">
                <p>
                  Don't have an account?
                  <a
                    href="/registration"
                    className="switcher-text2 inline-text"
                  >
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
 </div>
    )
}
