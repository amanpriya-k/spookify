import React from 'react';
import ReactDOM from 'react-dom';
import * as UserUtil from './util/user_util'
import { signup, login, logout, loginDemo, refetchUserInfo } from './actions/session_actions'
import configureStore from './store/store'
import Root from './components/root';
import { searchSongs, searchAlbums, searchArtists, searchPlaylists } from './util/music_util';
import { fetchAllAlbums,
         fetchAllArtists,
         fetchAllSongs,
         fetchOneAlbum,
         fetchAllPlaylists,
         fetchOnePlaylist,
         fetchSavedSongs,
         fetchSavedAlbums,
         fetchFollowedArtists,
         fetchFollowedPlaylists,
         deletePlaylist,
         createPlaylist,
         addSongToPlaylist,
         fetchSearchedSongs,
         fetchSearchedArtists,
         fetchSearchedPlaylists  } from './actions/music_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store}/>, root);


  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.loginDemo = loginDemo;
  window.fetchAllAlbums = fetchAllAlbums;
  window.fetchAllArtists = fetchAllArtists;
  window.fetchAllPlaylists = fetchAllPlaylists;
  window.fetchAllSongs = fetchAllSongs;
  window.fetchOneAlbum = fetchOneAlbum;
  window.fetchOnePlaylist = fetchOnePlaylist;
  window.fetchSavedSongs = fetchSavedSongs;
  window.fetchSavedAlbums = fetchSavedAlbums;
  window.fetchFollowedArtists = fetchFollowedArtists;
  window.fetchFollowedPlaylists = fetchFollowedPlaylists;
  window.deletePlaylist = deletePlaylist;
  window.createPlaylist = createPlaylist;
  window.addSongToPlaylist = addSongToPlaylist;
  window.fetchSearchedSongs = fetchSearchedSongs;
  window.fetchSearchedArtists = fetchSearchedArtists;
  window.fetchSearchedPlaylists = fetchSearchedPlaylists;
  window.searchSongs = searchSongs;
  window.searchAlbums = searchAlbums;
  window.searchPlaylists = searchPlaylists;
  window.searchArtists = searchArtists;
  window.refetchUserInfo = refetchUserInfo;
  window.UserUtil = UserUtil;
});
