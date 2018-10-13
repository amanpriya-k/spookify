import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { ProtectedRoute } from '../util/auth_route_util.js'
import { fetchAllAlbums } from './../actions/music_actions';
import AlbumShow from './album_show';
import BrowseNav from './browse_nav'

class AlbumIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllAlbums();
  }

  render() {

    let { albums } = this.props;
    if (albums.length < 1) {
      return null;
    }

    return(
      <div className="albumIndexContainer">
        <div>

          <ul className="album-index">

            {albums.map(
              (album, idx) =>
              (<li key={idx}>
                <div className="img-container">
                  <img src={album.coverUrl}></img>
                  <i className="far fa-play-circle"></i>
                </div>
                <Link to={`/browse/albums/${album.id}`}><h2>{album.title}</h2></Link>
                <h3>{album.artistName}</h3>
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
  albums: Object.values(state.entities.albums)
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllAlbums: () => (dispatch(fetchAllAlbums()))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (AlbumIndex)





                      // <ProtectedRoute path="/albums/:albumId" component={AlbumShow}></ProtectedRoute>
