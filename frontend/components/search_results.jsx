import React from 'react';
import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import ArtistIndex from './artist_index';
import SongIndex from './song_index';
import PlaylistIndex from './playlist_index';

class SearchResults extends React.Component {

  render() {
    let { searchTerm } = this.props;

    console.log(`rerendering searchresults with ${searchTerm}`);

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
