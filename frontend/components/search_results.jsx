import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlbumIndex from './album_index';
import ArtistIndex from './artist_index';
import SongIndex from './song_index';
import PlaylistIndex from './playlist_index';
import UserIndex from './user_index';
import * as Util from '../util/user_util';
import { merge } from 'lodash';
import { searchUsers } from '../actions/session_actions';

class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchTerm: props.searchTerm, users: this.props.users };
  }

  componentDidMount() {
    this.props.searchUsers(this.props.searchTerm);
  }

  componentWillReceiveProps(newProps) {
    if ( this.props.searchTerm != newProps.searchTerm ) {
      this.setState({ searchTerm: newProps.searchTerm })
      this.props.searchUsers(this.props.searchTerm)
      .then( () => this.setState({ users: newProps.users }) )
    }
    if ( JSON.stringify(this.props.users) != JSON.stringify(newProps.users) ) {
      this.props.searchUsers(this.props.searchTerm)
      .then( () => this.setState({ users: newProps.users }) )
      // this.setState({ users: newProps.users });
    }
  }

  render() {
    let { users } = this.state;
    let { searchTerm, currentUserId } = this.props;

    let songs = (<SongIndex searchTerm={searchTerm} ></SongIndex>);
    let artists = (<ArtistIndex searchTerm={searchTerm} ></ArtistIndex>);
    let albums = (<AlbumIndex searchTerm={searchTerm} ></AlbumIndex>);
    let playlists = (<PlaylistIndex searchTerm={searchTerm} ></PlaylistIndex>);

    let empty = (<div><h4>Sorry, there's nothing here!</h4></div>)

    // debugger

    let searchedUsers = merge({}, users);
    delete searchedUsers[currentUserId];

    return(
      <div className="search-results">
        {songs}
        <div className="searched-users">
          <UserIndex users={searchedUsers} ></UserIndex>
        </div>
        {artists}
        {albums}
      </div>
    )
  }

}


const mapStateToProps = (state) => ({
  users: state.entities.users,
  currentUserId: state.session.id
})

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (term) => dispatch(searchUsers(term))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults))
