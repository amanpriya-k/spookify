import React from 'react';
import { Redirect, Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

class SideNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.currentUser) {
      return null;
    }
    return (
      <div className="side-bar">
        <div className="side-bar-logo">
          <a href="/#/">
            <p>Spookify</p>
            <img src={window.images.white_icon}></img>
          </a>
        </div>

        <div className="side-bar-links">
          <NavLink className={ this.props.match.params.section === "search" ? "active-links" : "" } to="/search"><i className="fa fa-search"><span>Search</span></i></NavLink>
          <NavLink className={ this.props.match.params.section === "browse" ? "active-links" : "" } to="/browse/albums"><i className="fa fa-home"><span>Home</span></i></NavLink>
          <NavLink className={ this.props.match.params.section === "library" ? "active-links" : "" } to="/library/albums"><i className="fa fa-bookmark"><span>Your Library</span></i></NavLink>
        </div>


        <div className="side-bar-bottom">
          <a href="/#/"><i className="fa fa-user"><span>{this.props.currentUser.username}</span></i></a>
          <button onClick={() => this.props.logout()}>LOG OUT</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav))
