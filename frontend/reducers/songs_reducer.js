import { RECEIVE_ALL_SONGS, RECEIVE_ONE_SONG, RECEIVE_ONE_ALBUM, RECEIVE_ONE_ARTIST, RECEIVE_ONE_PLAYLIST } from '../actions/music_actions';
import { merge } from 'lodash';

const songsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_SONGS:
      return action.songs
    case RECEIVE_ONE_SONG:
      return merge({}, state, action.song)
    case RECEIVE_ONE_ALBUM:
      // debugger
      return action.payload.songs
    case RECEIVE_ONE_ARTIST:
      return action.payload.songs
    case RECEIVE_ONE_PLAYLIST:
      debugger
      if (action.payload.songs) {
        return action.payload.songs
      } else {
        return {};
      }
    default:
      return state;
  }
}

export default songsReducer;
