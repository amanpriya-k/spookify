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
      <div>
        <h2> welcome, {this.props.currentUser.username} </h2>
        <button onClick={() => this.props.logout()}>Log Out</button>
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
