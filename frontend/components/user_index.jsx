import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { refetchUserInfo } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';
import { css } from 'react-emotion';
import { PulseLoader } from 'react-spinners';

class UserIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { users: this.props.users, type: this.props.type, loading: true };
  }

  componentDidMount() {
    this.setState({ users: this.props.users, type: this.props.type });
    window.setTimeout(
      this.setState({loading: false}),
       900);
  }

  componentWillReceiveProps(newProps) {
    if (JSON.stringify(this.props.users) != JSON.stringify(newProps.users)) {
      this.setState({ users: newProps.users });
      window.setTimeout(
        this.setState({loading: false}),
         900);
    }
  }

  render() {
    let { users, type } = this.state;
    let { currentUserId } = this.props;
    // console.log(users, type);

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    // debugger

    if (this.state.loading) {
      return (
        <div className='sweet-loading'>
          <PulseLoader
            sizeUnit={"px"}
            height={30}
            width={30}
            color={'#1DB954'}
            loading={this.state.loading}
          />
        </div>
      )
    }

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
    if (users && currentUserId) {
      result = (
        Object.values(users).map(
          user => (
            <button key={user.id * Math.random()} onClick={() => this.props.openModal(currentUserId, user)} className="pl-btn">
              <div className="single-user-bar" >
                <div>
                  <p>@{user.username}</p>
                </div>
                <div>
                  <p>{user.following ? '   ✓' : '   +' } </p>
                </div>
             </div>
            </button>
          )
        )
      )
    } else {
      result = empty;
    }

    return (
      <div className="user-list">
        { result.length > 0 ? <h1>{title}</h1> : null }
        <ul className="user-list-items">
          {result}
        </ul>
      </div>
    )
  }

}

// export default UserIndex;

const mapStateToProps = (state) => ({
  currentUserId: state.session.id
})

const mapDispatchToProps = (dispatch) => ({
  openModal: (currentUserId, subjectUser) => dispatch(openModal
    ({ modal:'user_modal', currentUserId: currentUserId, subjectUser: subjectUser }))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserIndex))
