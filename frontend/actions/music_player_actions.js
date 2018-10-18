export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';

export const setCurrentSong = (songId) => ({
  type: SET_CURRENT_SONG,

})


export const setCurrentTrack = trackId => {
  return {
    type: SET_CURRENT_TRACK,
    trackId
  };
};


export const playAudio = () => {
  return { type: PLAY_AUDIO };
};
export const pauseAudio = () => {
  return { type: PAUSE_AUDIO };
};
export const setTrackQueue = queue => {
  return {
    type: SET_TRACK_QUEUE,
    queue
  };
};
export const addTrackQueue = trackId => {
  return {
    type: ADD_TRACK_QUEUE,
    trackId
  };
};
export const getQueuePos = () => {
  return { type: GET_QUEUE_POS };
};
export const nextTrack = () => {
  return { type: NEXT_TRACK };
};
export const prevTrack = () => {
  return { type: PREV_TRACK };
};
export const clearPlayer = () => {
  return { type: CLEAR_PLAYER };
};
export const toggleRepeat = () => {
  return { type: TOGGLE_REPEAT };
};
export const toggleShuffle = () => {
  return { type: TOGGLE_SHUFFLE };
};
