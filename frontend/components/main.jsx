import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'
import SideNav from './side_nav';
import Browse from './browse';

class Main extends React.Component {

  render() {
    return(
      <div className="main">
        <SideNav/>
        <ProtectedRoute path="/browse" component={Browse}></ProtectedRoute>
        <div className="temp-music-space"> music player here </div>
      </div>
    )
  }

}


export default Main;
