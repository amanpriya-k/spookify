import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';
import { fetchAllPlaylists, fetchFollowedPlaylists, fetchSearchedPlaylists } from './../actions/music_actions';
import { css } from 'react-emotion';
import { PulseLoader } from 'react-spinners';

class PlaylistIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    if (this.props.location.pathname == "/browse/playlists") {
      this.props.fetchAllPlaylists()
      .then( () => setTimeout(() => this.setState({loading: false}), 900));
    } else  if (this.props.location.pathname == "/library/playlists") {
      this.props.fetchFollowedPlaylists()
      .then( () => setTimeout(() => this.setState({loading: false}), 900));
    } else if ( this.props.searchTerm != undefined ) {
      this.props.fetchSearchedPlaylists(this.props.searchTerm)
      .then( () => setTimeout(() => this.setState({loading: false}), 900));
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchTerm != newProps.searchTerm ) {
      this.props.fetchSearchedPlaylists(newProps.searchTerm)
      .then( () => setTimeout(() => this.setState({loading: false}), 900));
    }
  }

  render() {
    let { playlists } = this.props;


    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    if (this.state.loading) {
      return (
        <div className='sweet-loading'>
          <PulseLoader
            sizeUnit={"px"}
            height={30}
            width={30}
            color={'#1DB954'}
            loading={this.state.loading}
          />
        </div>
      )
    }

    if (playlists.length < 1) {
      return null;
    }

    return(
      <div>
        { this.props.searchTerm ? <h1>Playlists</h1> : null }
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
  fetchFollowedPlaylists: () => (dispatch(fetchFollowedPlaylists())),
  fetchSearchedPlaylists: (searchTerm) => (dispatch(fetchSearchedPlaylists(searchTerm)))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)
                      (PlaylistIndex));
