import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';
import { fetchAllSongs, fetchSavedSongs, fetchSearchedSongs } from './../actions/music_actions';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { songs: null };
    this.setInitialState = this.setInitialState.bind(this);
  }

  componentDidMount() {
    if (this.props.location.pathname == "/browse/songs") {
      this.props.fetchAllSongs()
        .then(() => this.setInitialState())
    } else if (this.props.location.pathname == "/library/songs") {
      this.props.fetchSavedSongs()
        .then(() => this.setInitialState())
    } else if ( this.props.searchTerm != undefined) {
      this.props.fetchSearchedSongs(this.props.searchTerm)
        .then(() => this.setInitialState())
    }
  }

  componentWillReceiveProps(newProps) {
    if ( !(this.props.songs.length === 0 && newProps.songs.length === 0) && (this.props.songs != newProps.songs) ) {
      this.setState( { songs: newProps.songs } )
    }
  }

  setInitialState() {
    this.setState( { songs: this.props.songs} );
  }

  render() {
    let { songs } = this.props;

    if (songs.length < 1) {
      return null;
    }

    console.log(`rerendering songindex with ${this.props.searchTerm}`);


    return(
      <div className="song-index-container">
        { this.props.searchTerm ? <h1>Songs</h1> : null }
        <ul className="song-index">
          {songs.map(
            (song, idx) =>
            ( <SongIndexItem key={song.id} song={song}></SongIndexItem> )
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
  fetchSavedSongs: () => (dispatch(fetchSavedSongs())),
  fetchSearchedSongs: (searchTerm) => (dispatch(fetchSearchedSongs(searchTerm)))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)
                      (SongIndex));
