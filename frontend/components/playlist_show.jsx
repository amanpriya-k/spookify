import React from 'react';
import { connect } from 'react-redux';
import { fetchOnePlaylist, followPlaylist, unfollowPlaylist, deletePlaylist } from './../actions/music_actions';
import SongIndexItem from './song_index_item';

class PlaylistShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { followed: null }
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
  }

  componentDidMount() {
    this.props.fetchOnePlaylist(this.props.match.params.playlistId)
        .then( () => this.setInitialState() )
  }

  setInitialState() {
    this.setState( { followed: this.props.playlist.followed });
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


  render() {

    let { playlist } = this.props;
    if(!playlist ) {
      return null;
    }

    let songs;
    if (playlist.songs && Object.values(playlist.songs).length > 0) {
      songs = Object.values(playlist.songs).map(
        (song, idx) =>
        ( <SongIndexItem key={idx} song={song}></SongIndexItem> )
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
            <img src={'https://s3.us-west-1.amazonaws.com/spookify-dev/playlist-image.png?response-content-disposition=inline&X-Amz-Security-Token=FQoGZXIvYXdzEB8aDKiOmkN9J65j%2BzkR7SL6AZbapgjoLmy0gwzx%2Bl0%2BtpgnpvkguS04H4tc4qA6OH6du4dqs4h5cLYQbPKcqdYiHi%2FxRX8ZWAYaTXdB8OBrF%2BRqZQ0NHIO%2FnDM7YANoRs9eHroR6YelCwGzXlf7JZS5o0RWkyCAWK6R5WVPQwksI9rYn9Sq88bUKjtkrCvPrgtW0PfPAjXdlx4IK2B0N81W%2FrWUkehzNYDPwrO9Fy%2BDZgMo%2B4aHkWwzr7qwPB0S5TH1UEFwbj%2BkzFVw%2Frb15fGyupO%2BQnAE4018b9b%2FR2GkZ9O5c9f5Gxeuy7ngBkZKaa2ZPqGI0gULWQ%2BcB5It4nh8mtksKxnDO5DjIrgomNSQ3gU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20181015T054830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAT5INYYERUKTNNXGW%2F20181015%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=3c8e47bee2558f18300cbb7553566345d0c5e26a533f58a570769c6da1ae0738'}></img>
            <i className="far fa-play-circle"></i>
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
