import { RECEIVE_ALL_PLAYLISTS, RECEIVE_ONE_PLAYLIST} from '../actions/music_actions';
import { merge } from 'lodash';

const playlistsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return action.playlists
    case RECEIVE_ONE_PLAYLIST:
      return merge({}, state, { [action.playlist.id]: action.playlist })
    default:
      return state;
  }
}

export default playlistsReducer;
