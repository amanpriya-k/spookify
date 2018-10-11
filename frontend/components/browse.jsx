import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'

class Browse extends React.Component {

  render() {
    return(
      <div>
        <h1>Browsing</h1>
      </div>
    )
  }

}

export default Browse;
