import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/slick-carousel/slick/slick.css';
// import '../node_modules/slick-carousel/slick/slick-theme.css';
import '../node_modules/animate.css/animate.css';
import '../node_modules/magnific-popup/dist/magnific-popup.css';
// import '../node_modules/react-circular-progressbar/dist/styles.css';
import './assets/css/font-awesome.min.css';
import './assets/css/flaticon.css';
import './assets/css/style.css';



import { Provider } from "react-redux";
import store from "./store";
import AlertTemplate from "react-alert-template-basic";
import {positions, transitions, Provider as AlertProvider } from "react-alert";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};
ReactDOM.render(
 
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
  </Provider>,
 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
