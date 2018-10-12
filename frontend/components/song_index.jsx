import React from 'react';
import { connect } from 'react-redux';
import { fetchAllSongs } from './../actions/music_actions';

class SongIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllSongs();
  }

  render() {

    let { songs } = this.props;
    if (songs.length < 1) {
      return null;
    }

    return(
      <div className="song-index-container">
        <ul className="song-index">
          {songs.map(
            (song, idx) =>
            (<li key={idx}>
              <h2>♪ <span>{song.name}</span></h2>
              <h4>{song.artistName} • {song.albumTitle}</h4>
            </li>)
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  songs: Object.values(state.entities.songs)
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllSongs: () => (dispatch(fetchAllSongs()))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (SongIndex)
