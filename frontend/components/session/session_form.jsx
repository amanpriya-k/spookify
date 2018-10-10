import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectOnSuccess = this.redirectOnSuccess.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
    // .then((res) => { return this.redirectOnSuccess() });
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

  render() {
    let { errors, formType, processForm, loginDemo } = this.props;

    const emailInput =  formType === 'Sign Up' ? (<div> <input type="text" onChange={this.handleChange('email')} value={this.state.email} placeholder="Email"/>  </div>) : null

    const errorsList = errors.length > 0 ? (<ul className="session-errors"> {errors.map((error, idx) => (<li key={idx}>{error}</li>) )} </ul>) : null

    const bottomButton = formType === 'Sign Up' ? (
      <div className="bottom-form">
        <p>Already have an account? <a href='/#/login'>Log In</a></p>
      </div>
    ) : (
      <div className="bottom-form">
        <p>Don't have an account? <a href='/#/signup'>Sign up</a></p>
      </div>
    )

    return (
      <div className="session-page">

        <a href="/#/" className="session-header">
          <div className="session-header-logo">
            <img src='/assets/black-icon'></img>
            <p>Spookify</p>
          </div>
        </a>


        <div className="demo">
          <button onClick={this.demoUser}>DEMO USER</button>
        </div>

        <p className="or">or</p>

        <h3> { formType === 'Sign Up' ? 'Sign up for a new account' : 'Log in with your username' } </h3>
        {errorsList}

        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 onChange={this.handleChange('username')}
                 value={this.state.username}
                 placeholder="Username"/>


          {emailInput}

          <input type="password"
                 onChange={this.handleChange('password')}
                 value={this.state.password}
                 placeholder="Password"/>

          <input type="submit" value={formType === 'Login' ? 'LOG IN' : 'SIGN UP'} />
          {bottomButton}
        </form>
      </div>
    );
  }

}


export default withRouter(SessionForm);
