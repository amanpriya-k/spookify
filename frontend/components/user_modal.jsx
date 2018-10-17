import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { closeModal } from '../actions/modal_actions';
import { follow, unfollow } from '../actions/session_actions';

class UserModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = { subjectUser: this.props.subjectUser, currentUserId: this.props.currentUserId };
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  handleFollow() {
    let { subjectUser, currentUserId } = this.state;
    this.props.follow(currentUserId, subjectUser.id)
        .then(() => this.props.closeModal());
  }

  handleUnfollow() {
    let { subjectUser, currentUserId } = this.state;
    this.props.unfollow(currentUserId, subjectUser.id)
      .then(() => this.props.closeModal());
  }

  render() {

    let { subjectUser, currentUserId } = this.state;
    let { closeModal } = this.props;

    let button;
    if (subjectUser.following) {
      button = (<button onClick={this.handleUnfollow}>UNFOLLLOW</button>);
    } else {
      button = (<button onClick={this.handleFollow}>FOLLOW</button>);
    }

    return(
      <div className="user-modal">
        <button className="modal-x" onClick={closeModal}> × </button>
        <div className="user-info-modal">
          <i className="fa fa-user-circle"></i>
          <h1>@{subjectUser.username}</h1>
          {button}
        </div>
      </div>
    )
  }

}


const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  follow: (currentUserId, subjectUserId) => dispatch(follow(currentUserId, subjectUserId)),
  unfollow: (currentUserId, subjectUserId) => dispatch(unfollow(currentUserId, subjectUserId))
})


export default withRouter(connect(null, mapDispatchToProps)(UserModal));
