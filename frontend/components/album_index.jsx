import React from 'react';
import { connect } from 'react-redux';
import { fetchAllAlbums } from './../actions/music_actions';

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

    console.log("coverurl", albums[0].coverUrl);

    return(
      <div className="albumIndexContainer">
        <ul className="album-index">
          {albums.map(
            (album, idx) =>
            (<li key={idx}>
              <img src={album.coverUrl}></img>
              <h2>{album.title}</h2>
              <h3>{album.artistName}</h3>
            </li>)
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  albums: Object.values(state.entities.albums)
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllAlbums: () => (dispatch(fetchAllAlbums()))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (AlbumIndex)
