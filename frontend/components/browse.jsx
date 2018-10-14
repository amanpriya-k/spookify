import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'
import BrowseNav from './browse_nav'
import AlbumIndex from './album_index'
import ArtistIndex from './artist_index'
import SongIndex from './song_index'
import PlaylistIndex from './playlist_index'

class Browse extends React.Component {

  render() {
    return(
      <div className="browse-container">

        <BrowseNav></BrowseNav>

        <Switch>
          <ProtectedRoute path="/browse/albums" component={AlbumIndex}></ProtectedRoute>
          <ProtectedRoute path="/browse/artists" component={ArtistIndex}></ProtectedRoute>
          <ProtectedRoute path="/browse/songs" component={SongIndex}></ProtectedRoute>
          <ProtectedRoute path="/browse/playlists" component={PlaylistIndex}></ProtectedRoute>
        </Switch>


      </div>
    )
  }

}

export default Browse;
