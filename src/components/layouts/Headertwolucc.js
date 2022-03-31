import React, { Component, Fragment } from 'react';
import { Link,useHistory,withRouter } from 'react-router-dom';
import Navmenu from './Navmenu';
import OffCanvas from './Offcanvas';
import classNames from 'classnames'
import { connect } from "react-redux";
import { signout} from "../../actions/userAction";
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

// import logo from '../../assets/img/logo-2.png';
import logo from '../../assets/images/LUCC LOGO Main File[168].png';

class Headertwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classmethod: false,
            togglemethod: false
        };
        this.addClass = this.addClass.bind(this);
        this.removeClass = this.removeClass.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
    }
    addClass() {
        this.setState({
            classmethod: true
        });
    }

    removeClass() {
        this.setState({
            classmethod: false
        });
    }
    toggleClass() {
        this.setState({
            togglemethod: !this.state.togglemethod
        });
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth < 991
            });
        }, false);
        window.addEventListener('load', () => {
            this.setState({
                isMobile: window.innerWidth < 991
            });
        }, false);
        // Sticky header
        window.addEventListener('scroll', () => {
            this.setState({
                isTop: window.scrollY > 110
            });
        }, false);
    }
    render() {

        const { isAuthenticated } = this.props.User

        const Signout=()=>{
           this.props.signout()
           this.props.history.push("/login2");
            console.log('signout')
            
        }

        const mobileactive = this.state.isMobile ? 'breakpoint-on' : '';
        const stickyheader = this.state.isTop ? 'sticky-on' : '';
        return (
            <Fragment>
                <header className={`header-two sticky-header ${stickyheader}`}>
                    {/* Header Topbar */}
                   
                    {/* Header Menu  */}
                    <div className="header-nav sticky-nav">
                        <div className="container-fluid container-1600">
                            <div className={`nav-container ${mobileactive}`}>
                                {/* Site Logo */}
                                <div className="site-logo">
                                    <Link to="/hometwo"><img style={{height:'50px',width:"150px" ,objectFit: "cover"}} src={logo} alt="Logo" /></Link>
                                </div>
                                {/* Main Menu */}
                                <div className={classNames("nav-menu d-lg-flex align-items-center", { "menu-on": this.state.togglemethod })}>
                                    {/* Navbar Close Icon */}
                                    <div className="navbar-close" onClick={this.toggleClass}>
                                        <div className="cross-wrap"><span /><span /></div>
                                    </div>
                                    {/* Mneu Items */}
                                    <div className="menu-items">
                                    <Navmenu />
                                        
                                    
                                    </div>
                                    {/* Pushed Item */}
                                    <div className="nav-pushed-item" />
                                </div>
                                {/* Navbar Extra  */}
                                <div className="navbar-extra d-flex align-items-center">
                                    {/* language selection */}
                                   
                                    <div className="language-selection">
                                        {/* <Link className="language-btn" style={{background:'#ff4a17',color:'snow',fontWeight:"700"}} to="#">Join Now</Link> */}
                                        
                                        {/* <Link to='/login2' className="" style={{color:'#ff4a17',fontWeight:"700"}} to="#"><AccountCircleOutlinedIcon style={{height:"40px",width:'40px'}} /></Link> */}
                                        {isAuthenticated? 
                                        // <li><button onClick={Signout}>Sign-Out</button></li> 
                                        <div>
                                        <Link to='/profile_update'style={{color:'#ff4a17',fontWeight:"700"}}>< AccountBoxIcon style={{height:"40px",width:'40px'}} /></Link>
                                        <ul className="language-list">
                                        <li><Link onClick={Signout} to="/"><LogoutSharpIcon/></Link></li>
                                        {/* <li><Link to="/registration2">Registration</Link></li> */}
                                        </ul>
                                        </div>

                                     :
                                        <Link to='/login2' className="" style={{color:'#ff4a17',fontWeight:"700"}}><LoginSharpIcon style={{height:"40px",width:'40px'}} /></Link>
                                        
                                        }
                                        
                                       {/* {isAuthenticated? <ul className="language-list">
                                           
                                            <li><button onClick={Signout}>Sign-Out</button></li>
                                            
                                        </ul> :
                                        <ul className="language-list">
                                        <li><Link to="/login2">Login</Link></li>
                                        <li><Link to="/registration2">Registration</Link></li>
                                        
                                    </ul>} */}

                                       
                                        {/* <ul className="language-list">
                                            <li><Link to="/login2">Login</Link></li>
                                            <li><Link to="/registration2">Registration</Link></li>
                                            
                                        </ul> */}
                                    </div>
                                    {/* off canvas menu toggler*/}
                                    {/* <div className="offcanvas-toggler" onClick={this.addClass}>
                                        <span><span /><span /><span /></span>
                                    </div> */}
                                    {/* Navbar Toggler */}
                                    <div className={classNames("navbar-toggler", { "active": this.state.togglemethod })} onClick={this.toggleClass}>
                                        <span /><span /><span />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={classNames("offcanvas-wrapper", { "show-offcanvas": this.state.classmethod })}>
                    <div className={classNames("offcanvas-overly", { "show-overly": this.state.classmethod })} onClick={this.removeClass} />
                    <div className="offcanvas-widget">
                        <Link to="#" className="offcanvas-close" onClick={this.removeClass} ><i className="fal fa-times" /></Link>
                        <OffCanvas />
                    </div >
                </div >
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return { User: state.user };
  };
  const mapDispatchToProps = {
    signout
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Headertwo))