import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { refetchUserInfo } from '../actions/session_actions';

class UserIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { users: this.props.users, type: this.props.type };
  }

  componentDidMount() {
    this.setState({ users: this.props.users, type: this.props.type });
  }

  componentWillReceiveProps(newProps) {
    if (this.props.users != newProps.users) {
      this.setState({ users: newProps.users });
    }
  }

  render() {
    let { users, type } = this.state;
    // console.log(users, type);

    let title;
    let empty;
    switch (type) {
      case 'following':
        title = 'Following'
        empty = <p className="empty-user-list">You're not following any users yet. Find users to follow from the search page!</p>
        break;
      case 'followers':
        title = 'Followers'
        empty = <p className="empty-user-list">No users are following you yet. Find users to interact with from the search page!</p>
        break;
      default:
        title = 'Users'
        empty = null;
        break;
    }

    let result;
    if (users) {
      result = (
        Object.values(users).map(
          user => (
            <div key={user.id} className="single-user-bar">
              <p>@{user.username}</p>
              <button> { user.following ? '✓' : '+' } </button>
            </div>
          )
        )
      )
    } else {
      result = empty;
    }

    return (
      <div className="user-list">
        <h1>{title}</h1>
        <ul className="user-list-items">
          {result}
        </ul>
      </div>
    )
  }

}

export default UserIndex;
