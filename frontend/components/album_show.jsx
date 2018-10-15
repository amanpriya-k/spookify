import React from 'react';
import { connect } from 'react-redux';
import { fetchOneAlbum, saveAlbum, unsaveAlbum } from './../actions/music_actions';
import SongIndexItem from './song_index_item';

class AlbumShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { saved: null };
    this.handleSave = this.handleSave.bind(this);
    this.handleUnsave = this.handleUnsave.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
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

  render() {

    let { album, saveAlbum, unsaveAlbum } = this.props;
    if(!album) {
      return null;
    }

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
      saveButton = (<button onClick={this.handleSave}>SAVE TO LIBRARY</button>)
    } else {
      saveButton = (<button onClick={this.handleUnsave}>REMOVE FROM LIBRARY</button>)
    }

    return(
      <div className="album-show-container">
        <div className="album-info">
          <div className="img-container">
            <img src={album.coverUrl}></img>
            <i className="far fa-play-circle"></i>
          </div>
          <h1>{album.title}</h1>
          <h2>{album.artist}</h2>
          <button>PLAY</button>
          {saveButton}
          <h3>{songs ? Object.values(album.songs).length : 0} SONGS</h3>
        </div>

        <div className="album-songs">
          <ul className="song-index">
            {songs ? songs : <li></li>}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchOneAlbum: (albumId) => dispatch(fetchOneAlbum(albumId)),
  fetchSavedAlbums: () => dispatch(fetchSavedAlbums()),
  saveAlbum: (albumId) => dispatch(saveAlbum(albumId)),
  unsaveAlbum: (albumId) => dispatch(unsaveAlbum(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (AlbumShow);
