import { RECEIVE_ALL_SONGS, RECEIVE_ONE_SONG } from '../actions/music_actions';
import { merge } from 'lodash';

const songsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_SONGS:
      return action.songs
    case RECEIVE_ONE_SONG:
      return merge({}, state, action.song)
    default:
      return state;
  }
}

export default songsReducer;
