import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchOneSong, fetchAllSongs, fetchSavedSongs, saveSong, unsaveSong, removeSongFromPlaylist, fetchOnePlaylist, fetchSearchedSongs } from '../actions/music_actions';
import { openModal } from '../actions/modal_actions';

class SongIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = { saved: props.song.saved };

    this.handleSave = this.handleSave.bind(this);
    this.handleUnsave = this.handleUnsave.bind(this);
    // this.setInitialState = this.setInitialState.bind(this);
    this.setStateTrue = this.setStateTrue.bind(this);
    this.setStateFalse = this.setStateFalse.bind(this);
    this.handleRemoveFromPlaylist = this.handleRemoveFromPlaylist.bind(this);
    this.refetch = this.refetch.bind(this);
    this.refetchPlaylist = this.refetchPlaylist.bind(this);
  }

  handleSave() {
    this.props.saveSong(this.props.song.id)
      // .then( () => this.setStateTrue() )
      // .then( () => this.refetch() )
  }

  handleUnsave() {
    this.props.unsaveSong(this.props.song.id)
      // .then( () => this.setStateFalse() )
      .then( () => this.refetch() )
  }

  handleRemoveFromPlaylist(id, data) {
    return (e) => {
      this.props.removeSongFromPlaylist(id, data)
        .then( () => this.refetchPlaylist() )
    }
  }

  // setInitialState() {
  //   this.setState( { saved: this.props.song.saved } );
  // }

  setStateTrue() {
    this.setState({ saved: true });
  }

  setStateFalse() {
    this.setState({ saved: false });
  }

  refetch() {
    if (this.props.location.pathname == "/browse/songs") {
      this.props.fetchAllSongs();
    } else if (this.props.location.pathname == "/library/songs") {
      this.props.fetchSavedSongs();
    } else if (this.props.location.pathname == "/search") {
      // this.props.fetchSearchedSongs(this.props.searchTerm);
    }
  }

  refetchPlaylist() {
    let playlistId = this.props.match.params.playlistId;
    this.props.fetchOnePlaylist(playlistId);
  }

  render () {
    let { song, openModal, inPlaylist, searchTerm } = this.props;

    if (!song) {
      return null;
    }

    let removeButton = null;
    if (inPlaylist === true) {
      removeButton = (<button className="rm-pl-btn" onClick={this.handleRemoveFromPlaylist(this.props.match.params.playlistId, { song_id: song.id })}><i className="fa fa-times-circle"></i></button> )
    }

    let saveButton;
    if (this.state.saved === false) {
      saveButton = (<button className="save-btn" onClick={this.handleSave}><i className="fa fa-plus"></i></button>)
    } else {
      saveButton = (<button className="unsave-btn" onClick={this.handleUnsave}><i className="fa fa-check"></i></button>)
    }

    return (
      <li className="song-index-item">
        <div>
          <Link to={`/albums/${song.albumId}`}><h2>♪ <span><p>{song.name}</p></span></h2></Link>
          <h4><Link className="ugh" to={`/artists/${song.artistId}`}>{song.artistName}</Link> •
            <Link className="ugh" to={`/albums/${song.albumId}`}>{song.albumTitle}</Link></h4>
        </div>

        <div className="song-btns">
          {removeButton}
          <button onClick={() => openModal(song.id)} className="pl-btn"> <i className="fa fa-ellipsis-h"></i> </button>
          {saveButton}
        </div>
      </li>
    )
  }

}



const mapDispatchToProps = (dispatch) => ({
  saveSong: (id) => dispatch(saveSong(id)),
  unsaveSong: (id) => dispatch(unsaveSong(id)),
  fetchAllSongs: () => (dispatch(fetchAllSongs())),
  fetchSavedSongs: () => (dispatch(fetchSavedSongs())),
  fetchOneSong: (id) => (dispatch(fetchOneSong(id))),
  fetchOnePlaylist: (playlistId) => dispatch(fetchOnePlaylist(playlistId)),
  fetchSearchedSongs: (searchTerm) => (dispatch(fetchSearchedSongs(searchTerm))),
  removeSongFromPlaylist: (id, data) => (dispatch(removeSongFromPlaylist(id, data))),
  openModal: (id) => dispatch(openModal({ modal:'add_to_playlist', song_id: id }))
});

export default withRouter(connect(null, mapDispatchToProps)
                      (SongIndexItem));
