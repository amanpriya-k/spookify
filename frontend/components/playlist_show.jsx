import React from 'react';
import { connect } from 'react-redux';
import { fetchOnePlaylist } from './../actions/music_actions';
import SongIndexItem from './song_index_item';

class PlaylistShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchOnePlaylist(this.props.match.params.playlistId);
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


    return(
      <div className="playlist-show-container">
        <div className="playlist-info">
          <div className="img-container">
            <img src={playlist.coverUrl}></img>
            <i className="far fa-play-circle"></i>
          </div>
          <h1>{playlist.name}</h1>
          <button>PLAY</button>
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

const mapStateToProps = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchOnePlaylist: (playlistId) => dispatch(fetchOnePlaylist(playlistId))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (PlaylistShow);
