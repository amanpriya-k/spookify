import React from 'react';
import { Link, Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import SideNav from './side_nav';

class Splash extends React.Component {

  componentDidMount() {
    document.title = "Spookify"
  }

  render() {
    return (
      <div className='splash'>
          <div className='splash-nav'>
            <a href="/#/" className='splash-logo'>
              <p>Spookify</p>
              <img src={window.images.white_icon}></img>
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
            <p className="bottom-words">Spookify</p>
            <img className="bottom-logo" src={window.images.white_icon}></img>
            <div className="bottom-lists">
              <div>
                <h3>About the developer</h3>
                <h4><a href="https://github.com/amanpriya-k">GitHub </a> </h4>
                <h4><a href="https://www.linkedin.com/in/amanpriyakulkarni/">LinkedIn </a> </h4>
              </div>
              <div>
                <h3>Useful Links</h3>
                <h4><a href="/#/signup"> Sign Up </a> </h4>
                <h4><a href="/#/login"> Log In </a> </h4>
                <h4><a href="/#/"> Home </a> </h4>
              </div>
            </div>

            <p>developed by Riya Kulkarni!</p>
            <img src={window.images.spook}></img>
          </div>
      </div>
    )
  }

}

export default Splash;
