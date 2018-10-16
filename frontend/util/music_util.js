
// albums

export const fetchAllAlbums = () => (
  $.ajax({
    url: '/api/albums',
    method: 'GET'
  })
);

export const fetchOneAlbum = (albumId) => (
  $.ajax({
    url: `/api/albums/${albumId}`,
    method: 'GET'
  })
);

// artists

export const fetchAllArtists = () => (
  $.ajax({
    url: '/api/artists',
    method: 'GET'
  })
);

export const fetchOneArtist = (artistId) => (
  $.ajax({
    url: `/api/artists/${artistId}`,
    method: 'GET'
  })
);

// playlists

export const fetchAllPlaylists = () => (
  $.ajax({
    url: '/api/playlists',
    method: 'GET'
  })
);

export const fetchOnePlaylist = (playlistId) => (
  $.ajax({
    url: `/api/playlists/${playlistId}`,
    method: 'GET'
  })
);

export const createPlaylist = (playlist) => (
  $.ajax({
    url: `/api/playlists/`,
    method: 'POST',
    data: { playlist }
  })
);

export const deletePlaylist = (id) => (
  $.ajax({
    url: `/api/playlists/${id}`,
    method: 'DELETE'
  })
);

export const addSongToPlaylist = (data) => (
  $.ajax({
    url: '/api/playlist_songs',
    method: 'POST',
    data: { playlist_song: data }
  })
)

// songs

export const fetchAllSongs = () => (
  $.ajax({
    url: '/api/songs',
    method: 'GET'
  })
);

export const fetchOneSong = (songId) => (
  $.ajax({
    url: `/api/songs/${songId}`,
    method: 'GET'
  })
);
