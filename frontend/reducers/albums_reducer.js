import { RECEIVE_ALL_ALBUMS, RECEIVE_ONE_ALBUM } from '../actions/music_actions';
import { merge } from 'lodash';

const albumsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ALBUMS:
      return action.albums
    case RECEIVE_ONE_ALBUM:
      return merge({}, state, { [action.album.id]: action.album })
    default:
      return state;
  }
}

export default albumsReducer;
