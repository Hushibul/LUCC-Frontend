import React,{useEffect} from "react"
import $ from 'jquery';
// import css
import "../Assets/css/bootstrap.css"
// import "../Assets/css/fonts.css"
import "../Assets/css/style.css"
import "../Assets/css/google_font.css"

// import "../Assets/js/script"

// img
import logo_default from'../Assets/images/logo-default.png'
import logo_default2x from'../Assets/images/logo-default@2x.png'
import home_1_01_470x590 from'../Assets/images/home-1-01-470x590.jpg'
import home_1_02_270x257 from'../Assets/images/home-1-02-270x257.jpg'
import bg_parallax_02_1894x1950 from'../Assets/images/bg-parallax-02-1894x1950.jpg'



import Header from "./component/header"
import Coutdown from "./component/coutdown"
import Aboutevent from "./component/about"
import Team from "./component/team"
import Contest from "./component/Contest"
import Schedule from "./component/schedule"
import Sponsor from "./component/sponsor"
import PhotoGallery from "./component/photoGallery"
import Promo_Video from "./component/promo_Video"
import Footer from "./component/footer"
import Schedule2 from "./component/schedule2"

 const Foo = () => {



     return (



    <>


     <Header></Header>
      {/* <div className="preloader">
        <div className="preloader-body">
          <div className="cssload-container">
            <div className="cssload-speeding-wheel" />
          </div>
          <p>Loading...</p>
        </div>
      </div> */}
      <div className="page">
        {/* Section Header Default*/}
       

        {/* Section Book Your Ticket*/}
        <Coutdown></Coutdown>
       {/* Section Biggest 2019 Digital Conference*/}
       <Aboutevent></Aboutevent>
        {/* Section Who Is Speaking*/}
        {/* <Team></Team> */}
        <Contest></Contest>
{/* Section Conference Schedule*/}
        <Schedule></Schedule>
        {/* <Schedule2></Schedule2> */}
          {/* Section Official Sponsors*/}
        <Sponsor></Sponsor>
        {/* Section Photo Gallery*/}
        <PhotoGallery></PhotoGallery>
       
       {/* Section Conference Schedule*/}
        <Promo_Video></Promo_Video>
 
        {/* Footer Classic*/}
        <Footer></Footer>
      
      </div>
      
    </>

    
  )
    }

  export default  Foo