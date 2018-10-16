import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { fetchOneArtist, followArtist, unfollowArtist } from './../actions/music_actions';
import SongIndexItem from './song_index_item';

class ArtistShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { followed: null };
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
  }

  componentDidMount() {
    document.title = `${this.props.artist.name}`;
    this.props.fetchOneArtist(this.props.match.params.artistId)
      .then( () => this.setInitialState() )
  }

  setInitialState() {
    this.setState( { followed: this.props.artist.followed });
  }

  handleFollow() {
    this.setState({ followed: true })
    this.props.followArtist(this.props.artist.id)
  }

  handleUnfollow() {
    this.setState({ followed: false })
    this.props.unfollowArtist(this.props.artist.id)
  }

  render() {

    let { artist } = this.props;
    if(!artist || !artist.albums) {
      return null;
    }

    let followButton;
    if (!this.state.followed) {
      followButton = (<button onClick={this.handleFollow}>FOLLOW</button>)
    } else {
      followButton = (<button onClick={this.handleUnfollow}>UNFOLLOW</button>)
    }

    let albums;
    if ( artist.albums && Object.values(artist.albums).length > 0 ) {
      albums = (
        <div>
          <h3>Albums</h3>
          <ul className="album-index">
            {Object.values(artist.albums).map(
              (album, idx) =>
              (<li key={idx}>
                <div className="img-container">
                  <img src={album.coverUrl}></img>
                  <i className="far fa-play-circle"></i>
                </div>
                <Link to={`/albums/${album.id}`}><h2>{album.title}</h2></Link>
              </li>)
            )}
          </ul>
        </div>
      )
    } else {
      albums = null;
    }

    debugger;

    let songs;
    if ( artist.songs && Object.values(artist.songs).length > 0  ) {
      songs = (
        <div>
          <h3>Top Songs</h3>
          <ul className="song-index">
            {Object.values(artist.songs).map(
              (song, idx) =>
              ( <SongIndexItem key={idx} song={song}></SongIndexItem> )
            )}
          </ul>
        </div>
      )
    } else {
      null;
    }


    return(
      <div className="artist-show-container">

          <div className="header-container">
            <div className="header-image">
              <img src={artist.imageUrl}></img>
            </div>
            <div className="header-text">
              <h1>{artist.name}</h1>
              <h3>325,462 monthly listeners</h3>
              <div className="buttons">
                <button>PLAY</button>
                {followButton}
              </div>
            </div>
          </div>

          <div className="fade">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="content-container">
            {albums}
            {songs}
          </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  artist: state.entities.artists[ownProps.match.params.artistId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchOneArtist: (artistId) => dispatch(fetchOneArtist(artistId)),
  followArtist: (artistId) => dispatch(followArtist(artistId)),
  unfollowArtist: (artistId) => dispatch(unfollowArtist(artistId)),
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (ArtistShow);
