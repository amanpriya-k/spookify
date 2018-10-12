import { RECEIVE_ALL_ARTISTS } from '../actions/music_actions';

const artistsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ARTISTS:
      return action.artists
    default:
      return state;
  }
}

export default artistsReducer;
