import React from 'react';
import { connect } from 'react-redux';
import { fetchOnePlaylist, followPlaylist, unfollowPlaylist, deletePlaylist } from './../actions/music_actions';
import SongIndexItem from './song_index_item';

class PlaylistShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { followed: null }
    // this.state = { followed: null, playlist: null }
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
  }

  componentDidMount() {
    document.title = `${this.props.playlist.name}`;
    this.props.fetchOnePlaylist(this.props.match.params.playlistId)
        .then( () => this.setInitialState() )
  }

  setInitialState() {
    this.setState( { followed: this.props.playlist.followed });
    // this.setState( { playlist: this.props.playlist, followed: this.props.playlist.followed });
  }

  handleFollow() {
    this.setState({ followed: true })
    this.props.followPlaylist(this.props.playlist.id)
  }

  handleUnfollow() {
    this.setState({ followed: false })
    this.props.unfollowPlaylist(this.props.playlist.id)
  }

  handleDelete() {
    this.props.deletePlaylist(this.props.playlist.id)
      .then( () =>  this.props.history.push(`/library/playlists/`) )
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.playlist && (this.props.playlist.songs != newProps.playlist.songs)) {
  //     // debugger
  //     newProps.fetchOnePlaylist(this.props.playlist.id)
  //     //   .then( () => this.setInitialState() )
  //     // console.log('new songs', this.state.playlist.songs);
  //   }
  // }

  // componentWillReceiveProps(newProps) {
  //   console.log("newProps ",newProps);
  //   if (this.props.playlist && newProps.playlist && (this.props.playlist.songs.length != newProps.playlist.songs.length)) {
  //     console.log(newProps.playlist.songs);
  //     this.setState({ playlist: newProps.playlist });
  //   }
  // }


  render() {
    console.log('rendering ps show');
    let { playlist } = this.props;
    // let { playlist } = this.state;
    if(!playlist ) {
      return null;
    }

    let songs;
    if (playlist.songs && Object.values(playlist.songs).length > 0) {
      songs = Object.values(playlist.songs).map(
        (song, idx) =>
        ( <SongIndexItem key={song.id} song={song} inPlaylist={true}></SongIndexItem> )
      )
    } else {
      songs = null
    }

    let followButton;
    if (!this.state.followed) {
      followButton = (<button onClick={this.handleFollow}>FOLLOW</button>)
    } else {
      followButton = (<button onClick={this.handleUnfollow}>UNFOLLOW</button>)
    }

    let deleteButton;
    if (playlist.owned) {
      deleteButton = (<button onClick={this.handleDelete}>DELETE</button>)
    } else {
      deleteButton = null;
    }

    return(
      <div className="playlist-show-container">
        <div className="playlist-info">
          <div className="img-container">
            <img src={window.images.playlist}></img>
          </div>
          <h1>{playlist.name}</h1>
          <button>PLAY</button>
          {followButton}
          {deleteButton}
          <h3>{songs ? Object.values(playlist.songs).length : 0} SONGS</h3>
        </div>

        <div className="playlist-songs">
          <ul className="song-index">
            {songs ? songs : <li></li>}
          </ul>
        </div>
      </div>
    )
  }
}
// <img src={playlist.coverUrl}></img>

const mapStateToProps = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchOnePlaylist: (playlistId) => dispatch(fetchOnePlaylist(playlistId)),
  followPlaylist: (playlistId) => dispatch(followPlaylist(playlistId)),
  unfollowPlaylist: (playlistId) => dispatch(unfollowPlaylist(playlistId)),
  deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (PlaylistShow);
