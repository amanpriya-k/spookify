import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout, loginDemo } from './actions/session_actions'
import configureStore from './store/store'
import Root from './components/root';
import { fetchAllAlbums, fetchAllArtists, fetchAllSongs } from './actions/music_actions'

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
  window.fetchAllSongs = fetchAllSongs;
});
