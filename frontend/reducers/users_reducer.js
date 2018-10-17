import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS, RECEIVE_NEW_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_NEW_USER:
      // debugger
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users)
    default:
      return state;
  }
}

export default usersReducer;
