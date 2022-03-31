import React, { Component, Fragment } from 'react';

import About from './About ';
import Banner from './Banner';
import Counter from './Counter';
import Project from './Project';
import Service from './Service';
import Video from './Video';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <About/>
                <Service/>
                <Project/>
                <Counter/>
               <Video/>
               
            </Fragment>
        );
    }
}

export default Content;