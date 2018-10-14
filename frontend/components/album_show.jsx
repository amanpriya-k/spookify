import React from 'react';
import { connect } from 'react-redux';
import { fetchOneAlbum } from './../actions/music_actions';
import SongIndexItem from './song_index_item';

class AlbumShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchOneAlbum(this.props.match.params.albumId);
  }

  render() {

    let { album } = this.props;
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
  fetchOneAlbum: (albumId) => dispatch(fetchOneAlbum(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (AlbumShow);
