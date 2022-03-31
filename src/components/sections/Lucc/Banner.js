import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import img2 from '../../../assets/img/banner/02.jpg';
import img3 from '../../../assets/img/banner/03.jpg';
import img4 from '../../../assets/img/banner/04.jpg';

import slider1 from '../../../assets/images/slider-image/slider-1.jpg';
import slider2 from '../../../assets/images/slider-image/slider-2.jpg';
import slider3 from '../../../assets/images/slider-image/slider-3.jpg';


const bannerslide = [
    { img:slider1 , text: 'Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium /n doloremque laudanti totam raperiaeaque ipsa quaeab', btntext: 'Get Started Now', btntext1: 'Our Services' },
    { img: slider2, text: 'Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium /n doloremque laudanti totam raperiaeaque ipsa quaeab', btntext: 'Get Started Now', btntext1: 'Our Services' },
    { img: slider3 ,text: 'Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium /n doloremque laudanti totam raperiaeaque ipsa quaeab', btntext: 'Get Started Now', btntext1: 'Our Services' },
]
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <button className="slick-arrow next-arrow" onClick={onClick}><i className="fal fa-long-arrow-right" /></button>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="slick-arrow prev-arrow" onClick={onClick}><i className="fal fa-long-arrow-left" /></button>
    );
}
class Banner extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            arrows: true,
            fade: false,
            dots: false,
            swipe: true,
            adaptiveHeight: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }],
        }
        return (
            <section className="banner-section banner-section-two">
                <Slider className="" id="bannerSlider" {...settings}>
                    {bannerslide.map((item, i) => (
                        <div key={i}>
                            <div className="single-banner" style={{ backgroundImage: "url("+ item.img +") " }}>
                                {/* <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10">
                                        <h1 data-animation="fadeInDown" data-delay="0.8s">{item.title}</h1>
                                                <p data-animation="fadeInUp" data-delay="1s">{item.text} </p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        );
    }
}

export default Banner;