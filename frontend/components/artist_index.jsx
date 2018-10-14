import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { fetchAllArtists, fetchFollowedArtists } from './../actions/music_actions';
import BrowseNav from './browse_nav'

class ArtistIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.location.pathname == "/browse/artists") {
      this.props.fetchAllArtists();
    } else {
      this.props.fetchFollowedArtists();
    }
  }

  render() {
    let { artists } = this.props;
    if (artists.length < 1) {
      return null;
    }

    return(
      <div className="artist-index-container">
        <div>
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
  fetchFollowedArtists: () => (dispatch(fetchFollowedArtists()))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (ArtistIndex)
