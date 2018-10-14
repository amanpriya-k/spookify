import React from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'

class LibraryNav extends React.Component {

  render() {
    return(
      <div className="library-nav">
        <NavLink activeClassName="link-active" to="/library/albums">Albums<br></br><h1>__</h1></NavLink>
        <NavLink activeClassName="link-active" to="/library/artists">Artists<br></br><h1>__</h1></NavLink>
        <NavLink activeClassName="link-active" to="/library/songs">Songs<br></br><h1>__</h1></NavLink>
        <NavLink activeClassName="link-active" to="/library/playlists">Playlists<br></br><h1>__</h1></NavLink>
      </div>
    )
  }

}

export default LibraryNav;
