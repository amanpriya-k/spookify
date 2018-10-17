import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { refetchUserInfo } from '../actions/session_actions';
import UserIndex from './user_index';
import Modal from './new_playlist_modal';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    this.props.refetchUserInfo(this.props.match.params.id)
      .then( () => this.setState({ user: this.props.user }))
  }

  componentWillReceiveProps(newProps) {
    if (JSON.stringify(this.props.users) != JSON.stringify(newProps.users)) {
      // debugger
      this.setState({ users: newProps.users, user: newProps.users[this.props.match.params.id] });
    }
  }

  render() {
    let { user } = this.state;

    if (!user) {
      return null;
    }

    return(
      <div className="user-show">

        <Modal></Modal>

        <div className="user-header">
          <i className="fa fa-user-circle"></i>
          <h1>{user.username}</h1>
          <hr></hr>
          <h3>{user.email}</h3>
          <h4>member since {user.date} </h4>
        </div>

        <div className="user-lists">
          <UserIndex type={'following'} users={user.following}></UserIndex>
          <UserIndex type={'followers'} users={user.followers}></UserIndex>
        </div>

      </div>
    )
  }

}


const mapStateToProps = (state, ownProps) => ({
  user: Object.values(state.entities.users)[0],
  users: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
  refetchUserInfo: (id) => dispatch(refetchUserInfo(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
