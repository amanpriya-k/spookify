import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectOnSuccess = this.redirectOnSuccess.bind(this);
    this.demoUser = this.demoUser.bind(this);
    this.loginAsGuest = this.loginAsGuest.bind(this);
    this.loginAsGuestHelper = this.loginAsGuestHelper.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => (console.log('trying to redirect')))
  }

  handleChange(type) {
    return (e) => ( this.setState({ [type]: e.currentTarget.value }) );
  }

  redirectOnSuccess() {
    this.props.history.push('/browse');
  }

  componentWillUnmount() {
    this.props.receiveErrors([]);
  }

  componentDidMount() {
    document.title = this.props.formType;
  }

  demoUser() {
    this.props.loginDemo();
  }


  // demo login fake typing methods shown to me by joe olivier!

  loginAsGuest() {
    const userArr = 'ghostuser'.split('');
    const passwordArr = '123456'.split('');
    const button = document.getElementById('submit');
    this.setState( { username: '', password: '' }, () =>
      this.loginAsGuestHelper(userArr, passwordArr, button)
    );
  }

  loginAsGuestHelper(userArr, passwordArr, button){
    if (userArr.length > 0) {
      this.setState(
        { username: this.state.username + userArr.shift() }, () => {
          window.setTimeout( () =>
            this.loginAsGuestHelper(userArr, passwordArr, button), 75);
        }
      );
    } else if (passwordArr.length > 0) {
      this.setState(
        { password: this.state.password + passwordArr.shift() }, () => {
          window.setTimeout( () =>
            this.loginAsGuestHelper(userArr, passwordArr, button), 100);
        }
      );
    } else {
      button.click();
    }
  }


  render() {
    let { errors, formType, processForm, loginDemo } = this.props;

    const emailInput =  formType === 'Sign Up' ? (<div> <input type="text" onChange={this.handleChange('email')} value={this.state.email} placeholder="Email"/>  </div>) : null

    const errorsList = errors.length > 0 ? (<ul className="session-errors"> {errors.map((error, idx) => (<li key={idx}>{error}</li>) )} </ul>) : null

    const bottomButton = formType === 'Sign Up' ? (
      <div className="bottom-form">
        <p>Already have an account? Wanna log in as a guest? <a href='/#/login'>Log In</a></p>
      </div>
    ) : (
      <div className="bottom-form">
        <p>Don't have an account? <a href='/#/signup'>Sign up</a></p>
      </div>
    )


    return (
      <div className="session-page">

        <div className="session-header">
          <a href="/#/" className="session-header-link">
            <div className="session-header-logo">
              <img src={window.images.black_icon}></img>
              <p>Spookify</p>
            </div>
          </a>
        </div>
        <br></br>

        <div className="demo">
          { formType === 'Login' ? <div><button id="demo" onClick={this.loginAsGuest}>DEMO USER</button><br></br><p className="or">or</p></div> : null }
        </div>


        <h3> { formType === 'Sign Up' ? 'Sign up for a new account' : 'Log in with your username' } </h3>
        {errorsList}

        <form onSubmit={this.handleSubmit}>
          <input id="username" type="text"
                 onChange={this.handleChange('username')}
                 value={this.state.username}
                 placeholder="Username"/>


          {emailInput}

          <input id="password" type="password"
                 onChange={this.handleChange('password')}
                 value={this.state.password}
                 placeholder="Password"/>

               <input id="submit" type="submit" value={formType === 'Login' ? 'LOG IN' : 'SIGN UP'} />
          <br></br>
          {bottomButton}
        </form>
      </div>
    );
  }

}


export default withRouter(SessionForm);
