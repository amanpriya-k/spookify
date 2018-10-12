export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_ONE_ALBUM = 'RECEIVE_ONE_ALBUM';
export const RECEIVE_ONE_SONG = 'RECEIVE_ONE_SONG';
export const RECEIVE_ONE_ARTIST = 'RECEIVE_ONE_ARTIST';

import * as MusicApiUtil from '../util/music_util'

export const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

export const receiveOneSong = (song) => ({
  type: RECEIVE_ONE_SONG,
  song
});

export const receiveAllArtists = (artists) => ({
  type: RECEIVE_ALL_ARTISTS,
  artists
});

export const receiveOneArtist = (artist) => ({
  type: RECEIVE_ONE_ARTIST,
  artist
});

export const receiveAllAlbums = (albums) => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const receiveOneAlbum = (album) => ({
  type: RECEIVE_ONE_ALBUM,
  album
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

export const fetchOneSong = (songId) => (dispatch) => (
  MusicApiUtil.fetchOneArtist(songId)
    .then(song => dispatch(receiveOneSong(song)))
)

export const fetchAllArtists = () => (dispatch) => (
  MusicApiUtil.fetchAllArtists()
    .then(songs => dispatch(receiveAllArtists(songs)))
)

export const fetchOneArtist = (artistId) => (dispatch) => (
  MusicApiUtil.fetchOneArtist(artistId)
    .then(artist => dispatch(receiveOneArtist(artist)))
)

export const fetchAllAlbums = () => (dispatch) => (
  MusicApiUtil.fetchAllAlbums()
    .then(albums => dispatch(receiveAllAlbums(albums)))
)

export const fetchOneAlbum = (albumId) => (dispatch) => (
  MusicApiUtil.fetchOneAlbum(albumId)
    .then(album => dispatch(receiveOneAlbum(album)))
)

export const fetchAllPlaylists = () => (dispatch) => (
  MusicApiUtil.fetchAllSongs()
    .then(playlists => dispatch(receiveAllPlaylists(playlists)))
)
