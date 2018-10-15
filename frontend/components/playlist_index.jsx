import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { fetchAllPlaylists, fetchFollowedPlaylists } from './../actions/music_actions';

class PlaylistIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.location.pathname == "/browse/playlists") {
      this.props.fetchAllPlaylists();
    } else {
      this.props.fetchFollowedPlaylists();
    }
  }

  render() {
    let { playlists } = this.props;

    if (playlists.length < 1) {
      return null;
    }

    return(
      <div>
        <ul className="playlist-index">
          {playlists.map(
            (playlist, idx) =>
            (<li key={idx}>
              <Link to={`/playlists/${playlist.id}`}>
                <div className="img-container">
                  <img src={window.images.playlist}></img>
                  <i className="far fa-play-circle"></i>
                </div>
              </Link>

              <Link to={`/playlists/${playlist.id}`}><h2>{playlist.name}</h2></Link>
            </li>)
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  playlists: Object.values(state.entities.playlists)
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPlaylists: () => (dispatch(fetchAllPlaylists())),
  fetchFollowedPlaylists: () => (dispatch(fetchFollowedPlaylists()))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (PlaylistIndex)
