import {  SET_CURRENT_SONG,
          TOGGLE_SONG,
          SET_QUEUE,
          ADD_TO_QUEUE,
          TOGGLE_SHUFFLE } from '../actions/music_player_actions';
import { merge } from 'lodash';

const nullState = {
  currentSong: {
        // songName: 'God is a Woman',
        // songId: 826,
        // imageUrl: 'https://s3.us-west-1.amazonaws.com/spookify-dev/sweetener-album.jpg?response-content-disposition=inline&X-Amz-Security-Token=FQoGZXIvYXdzEFsaDEO5NWDBVNU%2Br8l7yiL6AXrVk%2Bo%2FsdhIbTGcQAST%2B6K7r8mc%2FFX3R6DKKWriedMZBqDBnhCeb%2FDtvwZJQTvJEYBf%2F%2Fqw9PCBRwPQ%2F1HqIwh9w6Q1fByTkffua1%2BqDQoWIOheU4Y%2FXMwQ5baR1NRYvwyhUXL4MAWeFfIksjx8oENp3tO6eiuPAQ8LdbGp83ODmKTByTK45EexbM5Rb1MpaT%2BijzqJUUiatkamEvL9MKdYPn9RCK3lBEfA%2FkMnA4vIh15WiYjw971cMBuaLHxbAd4JfRtCjCk4YScBXDyLsTtH4HJIxgf7cGdyKpu3wxEOedc5HiteQeYIiCV%2F08tQBIb7uWP6vs78FP4o4eud3gU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20181017T210034Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAT5INYYERQNMORIYM%2F20181017%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=538f84675fbcbdbfb77fae8f879d9130ec0165226585a740598ecf74fa8dbed8',
        audioUrl: 'https://s3-us-west-1.amazonaws.com/spookify-dev/silence.mp3',
        // albumId: 445,
        // artistName: 'Ariana Grande',
        // artistId: 645
      },
  playing: false,
  queue: [],
  // queue_idx: 0,
  shuffle: false
};


const musicPlayerReducer = (state = nullState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case SET_CURRENT_SONG:
      newState.currentSong = action.song;
      return newState;
    case TOGGLE_SONG:
      if (newState.playing === true) {
        newState.playing = false;
      } else {
        newState.playing = true;
      }
      return newState;
    case SET_QUEUE:
      newState.queue = action.queue;
      return newState;
    case ADD_TO_QUEUE:
      newState.queue.push(action.song);
      return newState;
    default:
      return state;
  }
}

export default musicPlayerReducer;
