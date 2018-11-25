import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { fetchOneArtist, followArtist, unfollowArtist } from './../actions/music_actions';
import SongIndexItem from './song_index_item';
import SongIndex from './song_index';
import { setCurrentSong, setQueue, toggleSong } from './../actions/music_player_actions';

class ArtistShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { followed: null };
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.getQueue = this.getQueue.bind(this);
  }

  componentDidMount() {
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

  handlePlay() {
    this.props.setCurrentSong(this.props.songs[0]);
    this.props.setQueue(this.props.songs);
    this.props.toggleSong();
  }

  getQueue(currSongIdx) {
    let { songs } = this.props;
    let queue = songs.slice(1);
    return queue;
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
                <Link className="img-link" to={`/albums/${album.id}`}>
                  <div className="img-container">
                    <img src={album.coverUrl}></img>
                    <i className="far fa-play-circle"></i>
                  </div>
                </Link>
                <Link to={`/albums/${album.id}`}><h2>{album.title}</h2></Link>
              </li>)
            )}
          </ul>
        </div>
      )
    } else {
      albums = null;
    }

    let songs;
    if ( artist.songs && Object.values(artist.songs).length > 0  ) {
      songs = (
        <div>
          <h3>Top Songs</h3>
          <ul className="song-index">
            <SongIndex></SongIndex>
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
                <button onClick={this.handlePlay}>PLAY</button>
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
            <div>
              <h3>Top Songs</h3>
              <ul className="song-index">
                <SongIndex></SongIndex>
              </ul>
            </div>
          </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  artist: state.entities.artists[ownProps.match.params.artistId],
  songs: Object.values(state.entities.songs)
});

const mapDispatchToProps = (dispatch) => ({
  fetchOneArtist: (artistId) => dispatch(fetchOneArtist(artistId)),
  followArtist: (artistId) => dispatch(followArtist(artistId)),
  unfollowArtist: (artistId) => dispatch(unfollowArtist(artistId)),
  setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
  toggleSong: () => (dispatch(toggleSong())),
  setQueue: (queue) => (dispatch(setQueue(queue)))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (ArtistShow);
