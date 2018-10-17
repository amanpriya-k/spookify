import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'
import SideNav from './side_nav';
import Browse from './browse';
import Library from './library';
import Search from './search';
import BrowseNav from './browse_nav';
import AlbumIndex from './album_index';
import ArtistIndex from './artist_index';
import SongIndex from './song_index';
import AlbumShow from './album_show';
import ArtistShow from './artist_show';
import PlaylistShow from './playlist_show';
import UserShow from './user_show';
import Modal from './new_playlist_modal';

class Main extends React.Component {

  render() {

    return(
      <div className="main">

        <Modal></Modal>

        <SideNav/>

        <Switch>
          <ProtectedRoute path="/browse" component={Browse}></ProtectedRoute>
          <ProtectedRoute path="/library" component={Library}></ProtectedRoute>
          <ProtectedRoute path="/search" component={Search}></ProtectedRoute>
          <ProtectedRoute path="/albums/:albumId" component={AlbumShow}></ProtectedRoute>
          <ProtectedRoute path="/artists/:artistId" component={ArtistShow}></ProtectedRoute>
          <ProtectedRoute path="/playlists/:playlistId" component={PlaylistShow}></ProtectedRoute>
          <ProtectedRoute path="/user/:id" component={UserShow}></ProtectedRoute>
        </Switch>


      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id
});

export default connect(mapStateToProps)
                      (Main);
