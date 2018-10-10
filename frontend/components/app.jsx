import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
// import LoginFormContainer from './session/login_form_container'
// import SignupFormContainer from './session/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'
import Splash from './splash'
import SideNav from './side_nav';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // debugger/
    return(
      <div>
        <h1>Spookify App</h1>

            <AuthRoute path="/" component={Splash} />
            <ProtectedRoute path="/browse" component={SideNav} />

      </div>
    )
  }

}


export default App;
