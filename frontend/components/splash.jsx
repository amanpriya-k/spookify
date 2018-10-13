import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import SideNav from './side_nav';
import { loginDemo } from './../actions/session_actions';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
    this.helper = this.helper.bind(this);
  }

  componentDidMount() {
    document.title = "Spookify"
  }

  demoLogin() {
    this.props.demoLogin()
      .then(() => this.helper())
  }

  helper() {
    this.props.history.push('/browse/albums');
  }

  render() {
    return (
      <div className='splash'>

          <div className='splash-nav'>
            <a href="/#/" className='splash-logo'>
              <p>Spookify</p>
              <img src={window.images.white_icon}></img>
            </a>
            <div className="other-icons-nav">

              <a href="https://github.com/amanpriya-k"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/amanpriyakulkarni/"><i className="fab fa-linkedin"></i></a>
            </div>
            <div className='splash-nav-links'>
              <Link to="/signup"> Sign Up </Link>
              <Link to="/login"> Login </Link>
              <button onClick={this.demoLogin}>Demo</button>
            </div>
          </div>

          <div className='splash-img'>
            <h1>Music for everyone.</h1>
            <h3 >Millions of songs. No credit card needed.</h3>
            <Link className='splash-btn shine-me' to="/signup"> GET SPOOKIFY FREE </Link>
            <img className="spook-1 animated slideInUp delay-2s" src={window.images.spook}></img>

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
            <a target="_blank" href="https://media1.giphy.com/media/YARUMKaGd8cRG/giphy.gif?cid=3640f6095bbeae732e425a7863318478">
              <img className="spook" src={window.images.spook}></img>
            </a>

          </div>
      </div>
    )
  }

}
// <AuthRoute path="/signup" component={SignupFormContainer} ></AuthRoute>
// <AuthRoute path="/login" component={LoginFormContainer} ></AuthRoute>

// export default Splash;

const mapDispatchToProps = (dispatch) => ({
  demoLogin: () => dispatch(loginDemo())
});

export default withRouter(connect(null, mapDispatchToProps)(Splash))
