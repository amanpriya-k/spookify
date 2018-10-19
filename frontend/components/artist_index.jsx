import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';
import { fetchAllArtists, fetchFollowedArtists, fetchSearchedArtists } from './../actions/music_actions';
import BrowseNav from './browse_nav';
import { css } from 'react-emotion';
import { PulseLoader } from 'react-spinners';

class ArtistIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    if (this.props.location.pathname == "/browse/artists") {
      this.props.fetchAllArtists()
      .then( () => setTimeout(() => this.setState({loading: false}), 900));
    } else  if (this.props.location.pathname == "/library/artists") {
      this.props.fetchFollowedArtists()
      .then( () => setTimeout(() => this.setState({loading: false}), 900));
    } else if ( this.props.searchTerm != undefined ) {
      this.props.fetchSearchedArtists(this.props.searchTerm)
      .then( () => setTimeout(() => this.setState({loading: false}), 900));
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchTerm != newProps.searchTerm ) {
      this.props.fetchSearchedArtists(newProps.searchTerm)
      .then( () => setTimeout(() => this.setState({loading: false}), 900));
    }
  }

  render() {
    let { artists } = this.props;

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    // debugger

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

    if (artists.length < 1) {
      return null;
    }
    
    return(
      <div className="artist-index-container">
        <div>
          { this.props.searchTerm ? <h1>Artists</h1> : null }
          <ul className="artist-index">
            {artists.map(
              (artist, idx) =>
              (<li key={idx}>
                <div className="img-crop">
                  <img src={artist.imageUrl}></img>
                  <i className="far fa-play-circle"></i>
                </div>
                <Link to={`/artists/${artist.id}`}><h2>{artist.name}</h2></Link>
              </li>)
            )}
          </ul>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  artists: Object.values(state.entities.artists)
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllArtists: () => (dispatch(fetchAllArtists())),
  fetchFollowedArtists: () => (dispatch(fetchFollowedArtists())),
  fetchSearchedArtists: (searchTerm) => (dispatch(fetchSearchedArtists(searchTerm)))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)
                      (ArtistIndex));
