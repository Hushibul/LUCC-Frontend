import  axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import About_ICT_FEST from './about/about_ICT_FEST'
import About_LUCC_CARNIVAL from './about/about_LUCC_CARNIVAL'
import About_TECHSTORM from './about/about_TECHSTORM'

const About = () => {

    const [User, setuser] = useState('');
    useEffect(() => {
  axios.get('http://localhost:2000/api/global/61f52ca054963c095446e5b3')
 .then((response) => {
   setuser(response.data);});
   }, [ ]);
   console.log('event',User.select_event_name)

 let About 

    if(User.select_event_name=='ict_fest'){
         About= <About_ICT_FEST/>

    }else if(User.select_event_name=='lucc_carnival'){
         About= <About_LUCC_CARNIVAL/>
    }
    else if(User.select_event_name=='tech_storm'){
         About= <About_TECHSTORM/>
    }else{
         return null
    }


    return (

        <div>
           {About}

        </div>
    );
}

export default About;
