import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOneAlbum, saveAlbum, unsaveAlbum } from './../actions/music_actions';
import SongIndexItem from './song_index_item';
import SongIndex from './song_index';
import { setCurrentSong, setQueue, toggleSong } from './../actions/music_player_actions';

class AlbumShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { saved: null };
    this.handleSave = this.handleSave.bind(this);
    this.handleUnsave = this.handleUnsave.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.getQueue = this.getQueue.bind(this);
  }

  componentDidMount() {
    this.props.fetchOneAlbum(this.props.match.params.albumId)
      .then( () => this.setInitialState() )
  }

  setInitialState() {
    this.setState( { saved: this.props.album.saved });
  }

  handleSave() {
    this.setState({ saved: true })
    this.props.saveAlbum(this.props.album.id)
  }

  handleUnsave() {
    this.setState({ saved: false })
    this.props.unsaveAlbum(this.props.album.id)
  }

  handlePlay() {
    this.props.setCurrentSong(this.props.songs[0]);
    this.props.setQueue(this.props.queue);
    this.props.toggleSong();
  }

  getQueue(currSongIdx) {
    let { songs } = this.props;
    let queue = songs.slice(1);
    return queue;
  }

  render() {

    let { album, saveAlbum, unsaveAlbum } = this.props;
    if(!album) {
      return null;
    }

    // debugger

    let songs;
    if (album.songs && Object.values(album.songs).length > 0) {
      songs = Object.values(album.songs).map(
        (song, idx) =>
        ( <SongIndexItem key={idx} song={song}></SongIndexItem> )
      )
    } else {
      songs = null
    }

    let saveButton;
    if (!this.state.saved) {
      saveButton = (<button onClick={this.handleSave}>SAVE</button>)
    } else {
      saveButton = (<button onClick={this.handleUnsave}>UNSAVE</button>)
    }

    return(
      <div className="album-show-container">
        <div className="album-info">
          <div className="img-container">
            <img src={album.coverUrl}></img>
            <i className="far fa-play-circle"></i>
          </div>
          <h1>{album.title}</h1>
          <Link to={`/artists/${album.artistId}`}><h2>{album.artistName}</h2></Link>
          <button onClick={this.handlePlay}>PLAY</button>
          {saveButton}

        </div>

        <div className="album-songs">
          <ul className="song-index">
            <SongIndex></SongIndex>
          </ul>
        </div>
      </div>
    )
  }
}
// {songs ? songs : <li></li>}

const mapStateToProps = (state, ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId],
  songs: Object.values(state.entities.songs)
});

const mapDispatchToProps = (dispatch) => ({
  fetchOneAlbum: (albumId) => dispatch(fetchOneAlbum(albumId)),
  fetchSavedAlbums: () => dispatch(fetchSavedAlbums()),
  saveAlbum: (albumId) => dispatch(saveAlbum(albumId)),
  unsaveAlbum: (albumId) => dispatch(unsaveAlbum(albumId)),
  setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
  toggleSong: () => (dispatch(toggleSong())),
  setQueue: (queue) => (dispatch(setQueue(queue)))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (AlbumShow);
