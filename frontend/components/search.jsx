import React from 'react';
import { connect } from 'react-redux';
import SearchResults from './search_results';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    let { searchTerm } = this.state;

    console.log(`rerendering search with ${searchTerm}`);

    let results;
    if (!(searchTerm.length > 0)) {
      results = (
        <div className="null-search-results">
          <h1>Search Spookify</h1>
          <h4>Find your favorite songs, artists, albums, podcasts and playlists.</h4>
        </div>
      )
    } else {
      results = (<SearchResults searchTerm={searchTerm} ></SearchResults>)
    }

    return (
      <div className="search">
        <div className="search-input">
          <input autofocus="autofocus"
                 type="text"
                 value={this.state.searchTerm}
                 onChange={this.updateInput}
                 placeholder="Start typing..."></input>
       </div>

        {results}
      </div>
    )
  }
}

export default Search;
