import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navmenu from './Navmenu';
import classNames from 'classnames'

import logo from '../../assets/images/LUCC LOGO Main File[168].png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            togglemethod: false
        };
        this.toggleClass = this.toggleClass.bind(this);
    }
    toggleClass() {
        this.setState({
            togglemethod: !this.state.togglemethod
        });
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth < 991,
                isMobilesmall: window.innerWidth < 767
            });
        }, false);
        window.addEventListener('load', () => {
            this.setState({
                isMobile: window.innerWidth < 991,
                isMobilesmall: window.innerWidth < 767
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
        const mobileactive = this.state.isMobile ? 'breakpoint-on' : '';
        const smallmobileactive = this.state.isMobilesmall ? 'd-none' : '';
        const stickyheader = this.state.isTop ? 'sticky-on' : '';
        return (
            <header className={`sticky-header ${stickyheader}`}>
                {/* Header Menu  */}
                <div className="header-nav">
                    <div className="container-fluid container-1600">
                        <div className={`nav-container ${mobileactive}`}>
                            {/* Site Logo */}
                            <div className="site-logo">
                                <Link to="/"><img style={{height:'90px',width:'auto',objectFit:'contain'}}  src={logo} alt="Logo" /></Link>
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
                            <div className="navbar-extra d-lg-block d-flex align-items-center">
                                {/* Navbtn */}
                                {/* <div className={`navbar-btn nav-push-item ${smallmobileactive}`}>
                                    <Link className="main-btn main-btn-3" to="#">Consulting Now</Link>
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
        );
    }
}

export default Header;