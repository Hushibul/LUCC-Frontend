import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from '../src/actions/userAction';
import { useSelector, useDispatch, } from "react-redux";

// Preloader
import Preloader from './components/layouts/Preloader';
// Pages

import Lucc from './components/pages/Lucc';
import Profile_update from './components/pages/Profile_update';
import Profile_View from './components/pages/Profile_view';
import Contact from './components/pages/Contact';
import AboutLucc from './components/pages/AboutLucc';
import Founder from './components/pages/Founder';
import Advisor from './components/pages/Advisor';
import CommitteeMember from './components/pages/CommitteeMember';
import Event from './components/pages/Events';
import LoginForm from './components/sections/Lucc/Form/form1';
import EventsForm from './components/sections/Lucc/Form/form2';
import Lu_login from '../src/components/pages/Lu_login';
import Profile from '../src/components/pages/Profile';
import Edit_profile from '../src/components/pages/edit_profile';
import Lucc_Registration2 from '../src/components/pages/Lucc_Registration2';
import Lucc_Login2 from '../src/components/pages/Lucc_Login2';
import PrivateRoute from '../src/HOC/PrivateRoute';

// -----------event-------
import Login1 from '../src/components/pages/Login1';
import RegistrationForm1 from '../src/components/pages/RegistrationForm1';
import Events_site from './event/Event/Index';
import Auth_eventRoute from '../src/HOC/Auth_event';
import Events_LU_user_reg_form from './event/Event/component/reg_form/LU_user_reg_form';
import Events_Non_LU_user_form from './event/Event/component/reg_form/Non_LU_user_form';
import Events_profile_form_reg from './event/Event/component/reg_form/profile_form_reg';

// ---------------------Blood bank-------------------
import Blood from './components/sections/Blood/Blood';
import Blood_reg_form from './components/sections/Blood/reg_form/reg_form';
import Blood_table from './components/sections/Blood/Table/Blood_table';




function App() {


  const { isAuthenticated } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  //  const ID = JSON.parse(localStorage.getItem('user')); 
  //  const[id,setState]=useState('')

  useEffect(() => {

    if (!isAuthenticated) {
      dispatch(loadUser());
    
    }

  }, [isAuthenticated]);


  return (
    <Router>
      {/* <Regform/>
      <Member4></Member4> */}
      <Preloader />
      <Switch>
        <Route exact path="/" component={Lucc} />

        <Route path="/aboutlucc" component={AboutLucc} />
        <PrivateRoute path="/profile_update" component={Profile_update} />
        <PrivateRoute path="/profile_view/:pid" component={Profile_View} />

        <Route path="/contact" component={Contact} />
        <Route path="/founder" component={Founder} />
        <Route path="/advisor" component={Advisor} />
        <Route path="/committee" component={CommitteeMember} />
        <Route path="/event" component={Event} />
        <Route path="/loginform" component={LoginForm} />
        <Route path="/eventform" component={EventsForm} />
        <Route path="/eventsite" component={Events_site} />
        <Route path="/login" component={Lu_login} />

        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/edit_profile" component={Edit_profile} />
        <Route path="/login1" component={Login1} />
        <Route path="/registration" component={RegistrationForm1} />
        <Route path="/registration2" component={Lucc_Registration2} />
        <Route path="/login2" component={Lucc_Login2} />


        {/* ---------blood route--------- */}
        <Route path="/blood" component={Blood} />
        <Route path="/blood_reg_form" component={Blood_reg_form} />
        <Route path="/Blood_table" component={Blood_table} />



        {/* ------------event --------- */}

        <Auth_eventRoute path="/event_registration_lu" component={Events_LU_user_reg_form} />
        <Auth_eventRoute path="/event_registration_non_lu" component={Events_Non_LU_user_form} />
        <Route path="/event_profile_form_reg" component={Events_profile_form_reg} />

      </Switch>
    </Router>
  );
}

export default App;
