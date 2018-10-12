import { RECEIVE_ALL_ALBUMS } from '../actions/music_actions';

const albumsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ALBUMS:
      return action.albums
    default:
      return state;
  }
}

export default albumsReducer;
