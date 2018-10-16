import { RECEIVE_ALL_PLAYLISTS, RECEIVE_ONE_PLAYLIST, REMOVE_ONE_PLAYLIST} from '../actions/music_actions';
import { merge } from 'lodash';

const playlistsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return action.playlists
    case RECEIVE_ONE_PLAYLIST:
      newState = { [action.playlist.id]: action.playlist };
      // debugger
      return newState;
    case REMOVE_ONE_PLAYLIST:
      let newState = merge({}, state);
      delete newState[action.playlist.id];
      return newState;
    default:
      return state;
  }
}

export default playlistsReducer;
