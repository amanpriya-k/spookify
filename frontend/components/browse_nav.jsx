import React from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'

class BrowseNav extends React.Component {

  render() {
    return(
      <div className="browse-nav">
        <NavLink activeClassName="link-active" to="/browse/albums">Albums<br></br><h1>__</h1></NavLink>
        <NavLink activeClassName="link-active" to="/browse/artists">Artists<br></br><h1>__</h1></NavLink>
        <NavLink activeClassName="link-active" to="/browse/songs">Songs<br></br><h1>__</h1></NavLink>
        <NavLink activeClassName="link-active" to="/browse/playlists">Playlists<br></br><h1>__</h1></NavLink>
      </div>
    )
  }

}

export default BrowseNav;
