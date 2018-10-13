import React from 'react';
import { connect } from 'react-redux';
import { fetchAllArtists } from './../actions/music_actions';
import BrowseNav from './browse_nav'

class ArtistIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllArtists();
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
                <h2>{artist.name}</h2>
              </li>)
            )}
          </ul>
        </div>
      </div>
    )
  }
}
// <BrowseNav></BrowseNav>

const mapStateToProps = (state) => ({
  artists: Object.values(state.entities.artists)
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllArtists: () => (dispatch(fetchAllArtists()))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (ArtistIndex)
