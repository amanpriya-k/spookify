import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    this.props.processForm(this.state).then(() => { this.props.history.push('/browse') });
  }

  handleChange(type) {
    return (e) => ( this.setState({ [type]: e.currentTarget.value }) );
  }

  render() {
    // debugger
    let { errors, formType, processForm } = this.props;

    const emailInput =  formType === 'Sign Up' ? (<div> <label>Email</label> <input type="text" onChange={this.handleChange('email')} value={this.state.email} />  </div>) : null

    const errorsList = errors.length > 0 ? (<ul> {errors.map((error, idx) => (<li key={idx}>{error}</li>) )} </ul>) : null
    // console.log(errors)
    return (
      <div>
        <h3> {formType} </h3>
        {errorsList}

        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text"
                 onChange={this.handleChange('username')}
                 value={this.state.username} />


          {emailInput}

          <label>Password</label>
          <input type="text"
                 onChange={this.handleChange('password')}
                 value={this.state.password} />

          <input type="submit" value={formType} />
        </form>
      </div>
    );
  }

}


export default withRouter(SessionForm);
