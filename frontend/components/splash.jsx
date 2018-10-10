import React from 'react';
import { Link, Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import SideNav from './side_nav';

const Splash = () => {
  // debugger
  return (
    <div>
      <h1>This is the splash page woohoo welcome~~~</h1>
        <Link to="/signup"> Sign Up </Link>
        <Link to="/login"> Login </Link>

        <Route path="/signup" component={SignupFormContainer} ></Route>


        <Route path="/login" component={LoginFormContainer} ></Route>

    </div>
  )
}

export default Splash;
