import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllSongs, fetchSavedSongs } from './../actions/music_actions';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.location.pathname == "/browse/songs") {
      this.props.fetchAllSongs();
    } else {
      this.props.fetchSavedSongs();
    }
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
            ( <SongIndexItem key={idx} song={song}></SongIndexItem> )
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
  fetchAllSongs: () => (dispatch(fetchAllSongs())),
  fetchSavedSongs: () => (dispatch(fetchSavedSongs()))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (SongIndex)
