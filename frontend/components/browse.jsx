import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'
import BrowseNav from './browse_nav'

class Browse extends React.Component {

  render() {
    return(
      <div className="browse-container">
        <BrowseNav></BrowseNav>
        <Switch>
        </Switch>
      </div>
    )
  }

}
// <ProtectedRoute path="browse/albums" component={}></ProtectedRoute>
// <ProtectedRoute path="browse/albums" component={}></ProtectedRoute>
// <ProtectedRoute path="browse/albums" component={}></ProtectedRoute>
// <ProtectedRoute path="browse/albums" component={}></ProtectedRoute>

export default Browse;
