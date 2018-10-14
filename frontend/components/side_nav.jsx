import React from 'react';
import { Redirect} from 'react-router-dom';
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
          <a href="/#/search"><i className="fa fa-search"><span>Search</span></i></a>
          <a href="/#/browse/albums"><i className="fa fa-home"><span>Home</span></i></a>
          <a href="/#/library/albums"><i className="fa fa-bookmark"><span>Your Library</span></i></a>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)
