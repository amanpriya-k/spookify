import { RECEIVE_ALL_PLAYLISTS} from '../actions/music_actions';

const playlistsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return action.playlists
    default:
      return state;
  }
}

export default playlistsReducer;
