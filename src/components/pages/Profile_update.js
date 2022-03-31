import React, { Component, Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import Header from '../layouts/Header_lucc_2';

import Content from '../sections/Profile_update/Content';

class Service extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>LUCC | Services</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Content />

                {/* <Footer /> */}
            </Fragment>
        );
    }
}

export default Service;