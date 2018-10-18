import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'
import SideNav from './side_nav';
import Browse from './browse';
import Library from './library';
import Search from './search';
import BrowseNav from './browse_nav';
import AlbumShow from './album_show';
import ArtistShow from './artist_show';
import PlaylistShow from './playlist_show';
import UserShow from './user_show';
import Modal from './new_playlist_modal';
import ReactMusicPlayer from './music_player';

class Main extends React.Component {

  render() {

    let { currentUser, song, songs, playing } = this.props;

    // let songs = [
    //   {
    //     songName: 'God is a Woman',
    //     songId: 826,
    //     imageUrl: 'https://s3.us-west-1.amazonaws.com/spookify-dev/sweetener-album.jpg?response-content-disposition=inline&X-Amz-Security-Token=FQoGZXIvYXdzEFsaDEO5NWDBVNU%2Br8l7yiL6AXrVk%2Bo%2FsdhIbTGcQAST%2B6K7r8mc%2FFX3R6DKKWriedMZBqDBnhCeb%2FDtvwZJQTvJEYBf%2F%2Fqw9PCBRwPQ%2F1HqIwh9w6Q1fByTkffua1%2BqDQoWIOheU4Y%2FXMwQ5baR1NRYvwyhUXL4MAWeFfIksjx8oENp3tO6eiuPAQ8LdbGp83ODmKTByTK45EexbM5Rb1MpaT%2BijzqJUUiatkamEvL9MKdYPn9RCK3lBEfA%2FkMnA4vIh15WiYjw971cMBuaLHxbAd4JfRtCjCk4YScBXDyLsTtH4HJIxgf7cGdyKpu3wxEOedc5HiteQeYIiCV%2F08tQBIb7uWP6vs78FP4o4eud3gU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20181017T210034Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAT5INYYERQNMORIYM%2F20181017%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=538f84675fbcbdbfb77fae8f879d9130ec0165226585a740598ecf74fa8dbed8',
    //     audioUrl: 'https://s3-us-west-1.amazonaws.com/spookify-dev/godisawoman.mp3',
    //     albumId: 445,
    //     artistName: 'Ariana Grande',
    //     artistId: 645
    //   }
    // ]

    // debugger

    return(
      <div className="main">

        <div className="top-half">
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

        <div className="music-player-container">
          <ReactMusicPlayer songs={songs} song={song} playing={this.props.playing}></ReactMusicPlayer>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,

  songs: state.ui.musicPlayer.queue,
  song: state.ui.musicPlayer.currentSong,
  playing: state.ui.musicPlayer.playing
});

export default connect(mapStateToProps)
                      (Main);
