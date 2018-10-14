


export const fetchSavedSongs = () => (
  $.ajax({
    url: 'api/songs/saved_songs',
    method: 'GET'
  })
);

export const fetchSavedAlbums = () => (
  $.ajax({
    url: 'api/albums/saved_albums',
    method: 'GET'
  })
);

export const fetchFollowedArtists = () => (
  $.ajax({
    url: 'api/artists/followed_artists',
    method: 'GET'
  })
);

export const fetchFollowedPlaylists = () => (
  $.ajax({
    url: 'api/playlists/followed_playlists',
    method: 'GET'
  })
);
