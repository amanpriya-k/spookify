export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_NEW_USER = 'RECEIVE_NEW_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_NEW_USERS = 'RECEIVE_NEW_USERS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

import * as SessionApiUtil from '../util/session_api_util'
import * as UserUtil from '../util/user_util'

// normal actions

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveNewUser = (payload) => ({
  type: RECEIVE_NEW_USER,
  payload
});

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveNewUsers = (users) => ({
  type: RECEIVE_NEW_USERS,
  users
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// thunk actions

export const signup = (user) => (dispatch) => (
  SessionApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const login = (user) => (dispatch) => (
  SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => (dispatch) => (
  SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const loginDemo = () => (dispatch) => {
  //
  return (SessionApiUtil.loginDemo()
    .then(user => dispatch(receiveCurrentUser(user)),
          errors => dispatch(receiveErrors(errors.responseJSON))))
}

export const refetchUserInfo = (id) => (dispatch) => (
  UserUtil.refetchUserInfo(id)
    .then(user => dispatch(receiveCurrentUser(user)))
)

export const follow = (userId, otherId) => (dispatch) => (
  UserUtil.follow(userId, otherId)
    .then(user => dispatch(receiveNewUser(user)))
)

export const unfollow = (userId, otherId) => (dispatch) => (
  UserUtil.unfollow(userId, otherId)
    .then(user => dispatch(receiveNewUser(user)))
)

export const searchUsers = (searchTerm) => (dispatch) => (
  UserUtil.searchUsers(searchTerm)
    .then(users => dispatch(receiveNewUsers(users)))
)
