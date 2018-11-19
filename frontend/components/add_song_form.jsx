import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { addSongToPlaylist, fetchFollowedPlaylists, receivePlaylistErrors } from '../actions/music_actions';
import { closeModal } from '../actions/modal_actions';
import { userOwnedPlaylists } from '../reducers/selectors';

class AddSongForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.redirectToShow = this.redirectToShow.bind(this);

    this.state = { song_id: this.props.songId, playlist_id: null, playlists: null };
  }

  componentDidMount () {
    this.props.fetchFollowedPlaylists()
  }

  componentWillUnmount() {
    this.props.receivePlaylistErrors([]);
  }

  handleSubmit(playlist_id) {

    return (e) => {
      e.preventDefault();
      let playlist_song = { song_id: this.state.song_id, playlist_id: playlist_id }

      this.props.addSongToPlaylist(playlist_song)
      .then(this.props.closeModal)
      .then( () => this.redirectToShow(playlist_id) );
    }
  }



  redirectToShow(playlist_id) {
    this.props.history.push(`/playlists/${playlist_id}`);
  }

  render(){
    let { closeModal, playlists, errors } = this.props;

    if (!playlists) {
      return null;
    }

    let currErrors = null;
    if (errors.length > 0 ) {
      currErrors = errors.map( (error, idx) => (<h4 className="modal-error" key={idx}>{error}</h4>));
    }

    return(
      <div className="modal-container">
        <button className="modal-x" onClick={closeModal}> × </button>
        <h1> Add to playlist </h1>

          {currErrors}

          <ul className="playlist-index">
            {playlists.map(
              (playlist, idx) =>

              (<li key={playlist.id}>

                <button onClick={ this.handleSubmit(playlist.id) }>

                    <div className="img-container">
                      <img src={window.images.playlist}></img>
                    <i className="fa fa-plus-circle" ></i>
                    </div>

                </button>

                <h3>{playlist.name}</h3>

              </li>)
            )}
          </ul>

      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  playlists: userOwnedPlaylists(state.entities.playlists),
  errors: state.errors.playlists
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  addSongToPlaylist: (data) => dispatch(addSongToPlaylist(data)),
  fetchFollowedPlaylists: () => (dispatch(fetchFollowedPlaylists())),
  receivePlaylistErrors: (errors) => dispatch(receivePlaylistErrors(errors))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddSongForm));
