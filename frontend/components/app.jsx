import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'
import Splash from './splash';
import SideNav from './side_nav';
import Main from './main';
import AlbumShow from './album_show';
import Home from './home';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id='app'>
          <Switch>
            <ProtectedRoute path="/browse/:album" component={Main}></ProtectedRoute>

            <AuthRoute path="/signup" component={SignupFormContainer} ></AuthRoute>
            <AuthRoute path="/login" component={LoginFormContainer} ></AuthRoute>

            <Route path="/" component={Home} />
            <Redirect to="/"/>

          </Switch>

      </div>
    )
  }

}

// <AuthRoute exact path="/" component={Splash} />
// <ProtectedRoute path="/albums/:albumId" component={AlbumShow}></ProtectedRoute>

export default App;
