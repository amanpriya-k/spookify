import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS, RECEIVE_NEW_USER, RECEIVE_NEW_USERS } from '../actions/session_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_NEW_USER:
      let tempState = merge({}, state,
        action.payload.followers,
        action.payload.following);
      delete tempState[action.payload.user.id];
      let newState = merge({}, tempState, { [action.payload.user.id]: action.payload.user });
        // debugger
      return newState;
    case RECEIVE_ALL_USERS:
      // debugger
      return merge({}, state, action.users);
    case RECEIVE_NEW_USERS:
    // debugger
      return action.users
    default:
      return state;
  }
}

export default usersReducer;
