import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchOneSong, fetchAllSongs, fetchSavedSongs, saveSong, unsaveSong } from '../actions/music_actions';

class SongIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = { saved: props.song.saved };

    this.handleSave = this.handleSave.bind(this);
    this.handleUnsave = this.handleUnsave.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.setStateTrue = this.setStateTrue.bind(this);
    this.setStateFalse = this.setStateFalse.bind(this);
    this.refetch = this.refetch.bind(this);
  }

  handleSave() {
    this.props.saveSong(this.props.song.id)
      .then( () => this.setStateTrue() )
      .then( () => this.refetch() )
  }

  handleUnsave() {
    this.props.unsaveSong(this.props.song.id)
      .then( () => this.setStateFalse() )
      .then( () => this.refetch() )
  }

  setInitialState() {
    this.setState( { saved: this.props.song.saved } );
  }

  setStateTrue() {
    this.setState({ saved: true });
  }

  setStateFalse() {
    this.setState({ saved: false });
  }

  refetch() {
    if (this.props.location.pathname == "/browse/songs") {
      this.props.fetchAllSongs();
    } else {
      this.props.fetchSavedSongs();
    }
    // this.props.fetchOneSong(this.props.song.id)
    //   .then( () => this.setState( { saved: this.props.song.saved} ))
  }

  // componentWillReceiveProps(newProps) {
  //     if (this.props.song.id != newProps.song.id ) {
  //       this.setState( { saved: newProps.song.saved } )
  //     }
  // }

  render () {

    let { song } = this.props;

    if (!song) {
      return null;
    }
    // debugger
    let saveButton;
    if (this.state.saved === false) {
      saveButton = (<button className="save-btn" onClick={this.handleSave}> + </button>)
    } else {
      saveButton = (<button className="unsave-btn" onClick={this.handleUnsave}> ✓ </button>)
    }

    return (
      <li className="song-index-item">
        <div>
          <Link to="/"><h2>♪ <span><p>{song.name}</p></span></h2></Link>
          <h4><Link className="ugh" to="/">{song.artistName}</Link> • <Link className="ugh" to="/">{song.albumTitle}</Link></h4>
        </div>

        <div className="song-btns">
          {saveButton}
        </div>
      </li>
    )
  }

}

const mapStateToProps = (state, ownProps) => ({

});


const mapDispatchToProps = (dispatch) => ({
  saveSong: (id) => dispatch(saveSong(id)),
  unsaveSong: (id) => dispatch(unsaveSong(id)),
  fetchAllSongs: () => (dispatch(fetchAllSongs())),
  fetchSavedSongs: () => (dispatch(fetchSavedSongs())),
  fetchOneSong: (id) => (dispatch(fetchOneSong(id)))
});

export default withRouter(connect(null, mapDispatchToProps)
                      (SongIndexItem));
