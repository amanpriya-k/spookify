import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'
import SideNav from './side_nav';
import Browse from './browse';
import Splash from './splash'
import BrowseNav from './browse_nav'
import AlbumIndex from './album_index'
import ArtistIndex from './artist_index'
import SongIndex from './song_index'
import AlbumShow from './album_show'

class Main extends React.Component {

  render() {
    // debugger

    // if (!currentUser) {
    //   console.log('wtfff');
    //   return (
    //     null
    //   )
    // }

    return(
      <div className="main">

        <SideNav/>
        <ProtectedRoute path="/browse/:albums" component={Browse}></ProtectedRoute>


      </div>
    )
  }

}
// <ProtectedRoute path="/browse/albums" component={AlbumIndex}></ProtectedRoute>
// <ProtectedRoute path="/browse/artists" component={ArtistIndex}></ProtectedRoute>
// <ProtectedRoute path="/browse/artists" component={ArtistIndex}></ProtectedRoute>
//
//
// <ProtectedRoute path="/albums/:albumId" component={Browse}></ProtectedRoute>


// <ProtectedRoute path="/browse/artists" component={ArtistIndex}></ProtectedRoute>
// <ProtectedRoute path="/browse/songs" component={SongIndex}></ProtectedRoute>
// export default Main;


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id
});

export default connect(mapStateToProps)
                      (Main);


// <div className="temp-music-space"> music player here </div>
