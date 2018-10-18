export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const TOGGLE_SONG = 'TOGGLE_SONG';
export const SET_QUEUE = 'SET_QUEUE';
export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';
export const TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE';


export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  song
})

export const toggleSong = () => ({
  type: TOGGLE_SONG
})

export const setQueue = (queue) => ({
  type: SET_QUEUE,
  queue
})

export const addToQueue = (song) => ({
  type: ADD_TO_QUEUE,
  song
})

export const toggleShuffle = () => ({
  type: TOGGLE_SHUFFLE
})


//
// export const getQueuePos = () => {
//   return { type: GET_QUEUE_POS };
// };
// export const nextTrack = () => {
//   return { type: NEXT_TRACK };
// };
// export const prevTrack = () => {
//   return { type: PREV_TRACK };
// };
// export const clearPlayer = () => {
//   return { type: CLEAR_PLAYER };
// };
// export const toggleRepeat = () => {
//   return { type: TOGGLE_REPEAT };
// };
// export const toggleShuffle = () => {
//   return { type: TOGGLE_SHUFFLE };
// };
