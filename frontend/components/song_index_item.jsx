import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchOneSong, fetchAllSongs, fetchSavedSongs, saveSong, unsaveSong, removeSongFromPlaylist, fetchOnePlaylist, fetchSearchedSongs } from '../actions/music_actions';
import { openModal } from '../actions/modal_actions';
import classnames from 'classnames';
import { setCurrentSong, setQueue, toggleSong } from './../actions/music_player_actions';

class SongIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = { saved: props.song.saved };

    this.handleSave = this.handleSave.bind(this);
    this.handleUnsave = this.handleUnsave.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    // this.setInitialState = this.setInitialState.bind(this);
    this.setStateTrue = this.setStateTrue.bind(this);
    this.setStateFalse = this.setStateFalse.bind(this);
    this.handleRemoveFromPlaylist = this.handleRemoveFromPlaylist.bind(this);
    this.refetch = this.refetch.bind(this);
    this.refetchPlaylist = this.refetchPlaylist.bind(this);
  }

  handlePlay() {
    // debugger
    this.props.setCurrentSong(this.props.song);
    this.props.setQueue(this.props.queue);
    this.props.toggleSong();
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

    // debugger

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
    //
    // let playButton = (<i className="fa fa-play"></i>)
    // let musicNoteButton = (<i className="fa fa-music"></i>)
    // <button onClick={this.handlePlay}>{playButton}</button>
    // {musicNoteButton}

    // debugger

    let playButtonContainer = (
      <div className="play-btn-container">
        <button onClick={this.handlePlay}><i className="fa fa-play"></i></button>
        <i className="fa fa-music"></i>
      </div>
    )

    if (this.props.currSong.id === song.id) {
    // if (JSON.stringify(this.props.currSong) === JSON.stringify(song)) {
      playButtonContainer = (
        <div className="play-btn-container">
          <i className="fa fa-volume-up"></i>
        </div>
      )
    }

    let finalClass = classnames('song-index-item', {'active-song': this.props.currSong.id === song.id });

    // debugger

    // <button onClick={this.handlePlay}><h2>{playButton}{musicNoteButton}<span><p>{song.name}</p></span></h2></button>
    return (
      <li className={finalClass}>

        <div className="song-index-main-info">

          {playButtonContainer}

          <div className="song-index-text">

            <div>
              <button onClick={this.handlePlay}><h2>{song.name}</h2></button>
            </div>

            <div className="song-links">
              <h4><Link className="song-link-item" to={`/artists/${song.artistId}`}>{song.artistName}</Link> •
                <Link className="song-link-item" to={`/albums/${song.albumId}`}>{song.albumTitle}</Link></h4>
            </div>

          </div>

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

const mapStateToProps = (state) => ({
  currSong: state.ui.musicPlayer.currentSong
})

const mapDispatchToProps = (dispatch) => ({
  saveSong: (id) => dispatch(saveSong(id)),
  unsaveSong: (id) => dispatch(unsaveSong(id)),
  fetchAllSongs: () => (dispatch(fetchAllSongs())),
  fetchSavedSongs: () => (dispatch(fetchSavedSongs())),
  fetchOneSong: (id) => (dispatch(fetchOneSong(id))),
  fetchOnePlaylist: (playlistId) => dispatch(fetchOnePlaylist(playlistId)),
  fetchSearchedSongs: (searchTerm) => (dispatch(fetchSearchedSongs(searchTerm))),
  removeSongFromPlaylist: (id, data) => (dispatch(removeSongFromPlaylist(id, data))),
  openModal: (id) => dispatch(openModal({ modal:'add_to_playlist', song_id: id })),
  setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
  toggleSong: () => (dispatch(toggleSong())),
  setQueue: (queue) => (dispatch(setQueue(queue)))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)
                      (SongIndexItem));





                      // <button onClick={this.handlePlay}>
                      //   <div>
                      //     <div className="toggle-btns">{playButton}{musicNoteButton}</div>
                      //     <div><p>{song.name}</p></div>
                      //   </div>
                      // </button>
                      // <h4><Link className="ugh" to={`/artists/${song.artistId}`}>{song.artistName}</Link> •
                      //   <Link className="ugh" to={`/albums/${song.albumId}`}>{song.albumTitle}</Link></h4>
