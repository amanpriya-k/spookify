import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'

class BrowseNav extends React.Component {

  render() {
    return(
      <div className="browse-nav">
        <Link to="/browse/albums">Albums</Link>
        <Link to="/browse/artists">Artists</Link>
        <Link to="/browse/songs">Songs</Link>
        <Link to="/browse/playlists">Playlists</Link>
      </div>
    )
  }

}

export default BrowseNav;
