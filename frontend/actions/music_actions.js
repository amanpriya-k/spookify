export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';

import * as MusicApiUtil from '../util/music_util'

export const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

export const receiveAllArtists = (artists) => ({
  type: RECEIVE_ALL_ARTISTS,
  artists
});

export const receiveAllAlbums = (albums) => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const receiveAllPlaylists = (playlists) => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
});

// thunk actions


export const fetchAllSongs = () => (dispatch) => (
  MusicApiUtil.fetchAllSongs()
    .then(songs => dispatch(receiveAllSongs(songs)))
)

export const fetchAllArtists = () => (dispatch) => (
  MusicApiUtil.fetchAllArtists()
    .then(songs => dispatch(receiveAllArtists(songs)))
)

export const fetchAllAlbums = () => (dispatch) => (
  MusicApiUtil.fetchAllAlbums()
    .then(albums => dispatch(receiveAllAlbums(albums)))
)

export const fetchAllPlaylists = () => (dispatch) => (
  MusicApiUtil.fetchAllSongs()
    .then(playlists => dispatch(receiveAllPlaylists(playlists)))
)
