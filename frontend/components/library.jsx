import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js';
import LibraryNav from './library_nav';
import AlbumIndex from './album_index';
import ArtistIndex from './artist_index';
import SongIndex from './song_index';
import PlaylistIndex from './playlist_index';
import Modal from './new_playlist_modal';

class Library extends React.Component {

  componentDidMount(){
    document.title = 'Library';
  }

  render() {
    return(
      <div className="browse-container">

        <Modal></Modal>

        <LibraryNav></LibraryNav>

        <Switch>
          <ProtectedRoute path="/library/albums" component={AlbumIndex}></ProtectedRoute>
          <ProtectedRoute path="/library/artists" component={ArtistIndex}></ProtectedRoute>
          <ProtectedRoute path="/library/songs" component={SongIndex}></ProtectedRoute>
          <ProtectedRoute path="/library/playlists" component={PlaylistIndex}></ProtectedRoute>
        </Switch>


      </div>
    )
  }

}

export default Library;
