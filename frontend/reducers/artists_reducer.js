import { RECEIVE_ALL_ARTISTS, RECEIVE_ONE_ARTIST } from '../actions/music_actions';
import { merge } from 'lodash';

const artistsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ARTISTS:
      return action.artists
    case RECEIVE_ONE_ARTIST:
      return merge({}, state, { [action.artist.id]: action.artist})
    default:
      return state;
  }
}

export default artistsReducer;
