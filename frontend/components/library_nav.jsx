import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'
import { createPlaylist } from '../actions/music_actions';
import { openModal } from '../actions/modal_actions';


class LibraryNav extends React.Component {

  render() {
    return(
      <div className="top-nav">

        <div className="library-nav">
          <NavLink activeClassName="link-active" to="/library/albums">Albums<br></br><h1>__</h1></NavLink>
          <NavLink activeClassName="link-active" to="/library/artists">Artists<br></br><h1>__</h1></NavLink>
          <NavLink activeClassName="link-active" to="/library/songs">Songs<br></br><h1>__</h1></NavLink>
          <NavLink activeClassName="link-active" to="/library/playlists">Playlists<br></br><h1>__</h1></NavLink>
          <button onClick={this.props.openModal}>NEW PLAYLIST</button>
        </div>

      </div>
    )
  }

}


const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal('playlist'))
})

export default withRouter(connect(null, mapDispatchToProps)(LibraryNav))
