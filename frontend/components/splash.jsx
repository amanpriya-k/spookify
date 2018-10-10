import React from 'react';
import { Link, Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import SideNav from './side_nav';

const Splash = () => {
  return (
    <div className='splash'>
        <div className='splash-nav'>
          <a href="/#/" className='splash-logo'>
            <p>Spookify</p>
            <img src='/assets/white-icon'></img>
          </a>

          <div className='splash-nav-links'>
            <Link to="/signup"> Sign Up </Link>
            <Link to="/login"> Login </Link>
          </div>
        </div>

        <div className='splash-img'>
          <h1>Music for everyone.</h1>
          <h3>Millions of songs. No credit card needed.</h3>
          <Link className='splash-btn' to="/signup"> GET SPOOKIFY FREE </Link>
        </div>

        <div className="splash-bottom">
          <p>Spookify</p>
          <img src='/assets/white-icon'></img>
        </div>
    </div>
  )
}

export default Splash;
