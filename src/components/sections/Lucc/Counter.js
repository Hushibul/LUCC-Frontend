// import React from 'react';
import  axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {Link} from "react-router-dom"
import { useSelector, useDispatch,} from "react-redux";



export default function Counter() {
    const [focus, setFocus] = useState(false);

    const [User, setuser] = useState('');
    useEffect(() => {

     //  if (error) {
     //    alert.error(error);
     //    dispatch(clearErrors());
     //  }
  
     
      
     //  dispatch(getControllerDetails('61dc089f410a853a542123e8'));

     // data  = axios.get(`http://localhost:2000/api/global/61dc089f410a853a542123e8`);


     axios.get('http://localhost:2000/api/global/61dc26e7f878ca44c022060e')
 .then((response) => {
   setuser(response.data);
  
 
 });

      
    }, []);

    const counterblock = [
        { icon: 'flaticon-graphic', count: `${User.counter1}`, title: 'Executive Member' },
        { icon: 'flaticon-plan', count: `${User.counter2}`, title: 'Member' },
        { icon: 'flaticon-target-1', count: `${User.counter3}`, title: 'Committee Members' },
        { icon: 'flaticon-teamwork', count: `${User.counter4}`, title: 'advisor' },
    ]
    
    return (
        <section className="fact-section-two">
            <div className="container">
                <div className="fact-two-inner">
                    <div className="fact-boxes row justify-content-between align-items-center">
                        {counterblock.map((item, i) => (
                            <div key={i} className="col-lg-3 col-6">
                                <div className="fact-box fact-box-two text-center mb-40">
                                    <div className="icon">
                                        <i className={item.icon} />
                                    </div>
                                    <CountUp start={focus ? 0 : null} end={parseInt(item.count)} duration={5} redraw={true}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span className="counter" ref={countUpRef} />
                                                <VisibilitySensor
                                                    onChange={isVisible => {
                                                        if (isVisible) {
                                                            setFocus(true);
                                                        }
                                                    }}
                                                >
                                                    <span className="plus-icon">+</span>
                                                </VisibilitySensor>
                                            </div>
                                        )}
                                    </CountUp>
                                    <p className="title">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}