import React from 'react';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

class SideNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!currentUser) {
      return null;
    }
    console.log('wut');
    return (
      <div>
        <h2> {this.props.currentUser.username} </h2>
        <button onClick={this.props.logout}>Log Out</button>
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
