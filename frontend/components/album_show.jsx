import React from 'react';
import { connect } from 'react-redux';
import { fetchOneAlbum } from './../actions/music_actions';
import BrowseNav from './browse_nav'

class AlbumShow extends React.Component {

  constructor(props) {
    super(props);
    console.log('in show');
  }

  componentDidMount() {
    debugger
    this.props.fetchOneAlbum(this.props.match.params.albumId);
  }

  render() {
    // debugger


    let { album } = this.props;
    if(!album || !album.songs) {
      console.log("havent fetched album yet");
      return null;
    }

    console.log(album.title);

    return(
      <div className="album-show-container">
        <h1>SHOW PAGE FOR ALBUM {album.title}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchOneAlbum: (albumId) => dispatch(fetchOneAlbum(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (AlbumShow);
