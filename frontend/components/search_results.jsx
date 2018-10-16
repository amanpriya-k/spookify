import React from 'react';
import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import ArtistIndex from './artist_index';
import SongIndex from './song_index';
import PlaylistIndex from './playlist_index';

class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchTerm: props.searchTerm };
  }

  componentWillReceiveProps(newProps) {
    if ( this.props.searchTerm != newProps.searchTerm ) {
      this.setState({ searchTerm: newProps.searchTerm })
    }
  }

  render() {
    let { searchTerm } = this.props;

    let songs = (<SongIndex searchTerm={searchTerm} ></SongIndex>);
    let artists = (<ArtistIndex searchTerm={searchTerm} ></ArtistIndex>);
    let albums = (<AlbumIndex searchTerm={searchTerm} ></AlbumIndex>);
    let playlists = (<PlaylistIndex searchTerm={searchTerm} ></PlaylistIndex>);

    let empty = (<div><h4>Sorry, there's nothing here!</h4></div>)

    return(
      <div className="search-results">
        <SongIndex searchTerm={searchTerm} ></SongIndex>
        <ArtistIndex searchTerm={searchTerm} ></ArtistIndex>
        <AlbumIndex searchTerm={searchTerm} ></AlbumIndex>
        <PlaylistIndex searchTerm={searchTerm} ></PlaylistIndex>
      </div>
    )
  }

}

export default SearchResults;
