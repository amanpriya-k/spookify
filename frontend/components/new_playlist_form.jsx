import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPlaylist } from '../actions/music_actions';
import { closeModal } from '../actions/modal_actions';


class NewPlaylistForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirectToShow = this.redirectToShow.bind(this);
    this.state = { name: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    let playlist = this.state;
    this.setState({ name: '' });
    this.props.createPlaylist(playlist)
      .then(this.props.closeModal)
      .then( () => this.redirectToShow() );
  }

  handleChange(e) {
    this.setState({ name: e.target.value })
  }

  redirectToShow() {
    this.props.history.push(`/playlists/${this.props.last_playlist.id}`);
  }

  render(){
    let { closeModal } = this.props;
    return(
      <div className="modal-container">
        <button className="modal-x" onClick={closeModal}> × </button>
        <form className="playlist-form" onSubmit={this.handleSubmit}>
          <h1>Create new playlist</h1>
          <div className="playlist-input">
            <label>Playlist name</label>
            <input type="text"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Start typing...">
            </input>
          </div>
          <div className="modal-buttons">
            <button onClick={closeModal}>CANCEL</button>
            <button type="submit">CREATE</button>
          </div>
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  last_playlist: Object.values(state.entities.playlists).slice(-1)[0]
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPlaylistForm));
