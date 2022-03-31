import React, { Component } from 'react';

class Preloader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchSuccess: false
        }
    }
    componentDidMount() {
        window.addEventListener('load', () => {
            this.setState({
                fetchSuccess: true
            });
        });
    }
    render() {
        const classNamess = this.state.fetchSuccess ? 'd-none' : '';
        return (
            <div id="preloader" className={`${classNamess}`}>
                <div className="loader-cubes">
                    <div className="loader-cube1 loader-cube"></div>
                    <div className="loader-cube2 loader-cube"></div>
                    <div className="loader-cube4 loader-cube"></div>
                    <div className="loader-cube3 loader-cube"></div>
                </div>
            </div>
        );
    }
}

export default Preloader;