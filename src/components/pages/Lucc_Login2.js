import  React,{ useEffect, useState }  from "react";
import {Link} from 'react-router-dom'
import { Redirect ,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register,loadUser,getAllUsers } from "../../actions/userAction";
import {useAlert} from "react-alert"


// assets import
import "../../assets/css/Rimel_Form_css/css/style.css"
import logo_10 from "../../assets/images/LUCC LOGO Main File[168].png"
import bg10_l from "../../assets/images/bg.jpg"

export default function Lucc_Login2() {

    const history = useHistory();
  
    const alert = useAlert();
    const dispatch = useDispatch();
  
  const { error, loading, isAuthenticated,user } = useSelector(
    (state) => state.user
  );
 
  const [load, setLoad] = useState(true);
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  



 const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
    console.log("loginEmail",loginEmail,"LoginPassword", loginPassword)
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
      
      history.push('/');
    }
    
    setTimeout(()=> {
      setLoad(false)
    }, 500)

  }, [dispatch, error, alert,  isAuthenticated,]);
  
  // console.log(user.role,"role");



    return (
        <div>
            
  <>
    
    <section className="fxt-template-animation fxt-template-layout10 loaded">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-6 col-12 fxt-bg-img"
            style={{backgroundImage: `url(${bg10_l})`}}
          >
            <div className="fxt-header">
              <a href="login-10.html" className="fxt-logo">
                <img src={logo_10} alt="Logo" />
              </a>
              {/* <h1>Welcome To Leading Universirt Computer Club</h1> */}
              <p>
              Welcome To Leading Universirt Computer Club
              </p>
              <Link to="/registration2" className="fxt-btn-ghost">
                Register
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-12 fxt-bg-color">
            <div className="fxt-content">
              <div className="fxt-form">
                <h2>Login into your account</h2>

                {/* ------form--   */}
                 <form onSubmit={loginSubmit}>
                  <div className="form-group">
                    <div className="fxt-transformY-50 fxt-transition-delay-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email Address"
                        required="required"
                        value={loginEmail}
                        onChange={(event) => setLoginEmail(event.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <div className="fxt-transformY-50 fxt-transition-delay-4">
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
                  </div>
                  <div className="form-group">
                    <div className="fxt-transformY-50 fxt-transition-delay-3">
                      <div className="fxt-checkbox-area">
                        <div className="checkbox">
                          <input id="checkbox1" type="checkbox" />
                          <label htmlFor="checkbox1">Keep me logged in</label>
                        </div>
                        <a
                          href="forgot-password-10.html"
                          className="switcher-text2"
                        >
                          Forgot Password
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="fxt-transformY-50 fxt-transition-delay-5">
                      <div className="text-center">
                        <button type="submit" className="fxt-btn-fill">
                          Log in
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="fxt-footer">
                <ul className="fxt-socials">
                  <li className="fxt-facebook fxt-transformY-50 fxt-transition-delay-6">
                    <a href="#" title="Facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="fxt-twitter fxt-transformY-50 fxt-transition-delay-7">
                    <a href="#" title="twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="fxt-google fxt-transformY-50 fxt-transition-delay-8">
                    <a href="#" title="google">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li className="fxt-linkedin fxt-transformY-50 fxt-transition-delay-9">
                    <a href="#" title="linkedin">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="fxt-pinterest fxt-transformY-50 fxt-transition-delay-9">
                    <a href="#" title="pinterest">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
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
