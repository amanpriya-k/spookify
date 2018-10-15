
// songs

export const fetchSavedSongs = () => (
  $.ajax({
    url: 'api/songs/saved_songs',
    method: 'GET'
  })
);

export const saveSong = (id) => (
  $.ajax({
    url: `api/songs/${id}/save`,
    method: 'POST'
  })
)

// albums

export const fetchSavedAlbums = () => (
  $.ajax({
    url: 'api/albums/saved_albums',
    method: 'GET'
  })
);

export const saveAlbum = (id) => (
  $.ajax({
    url: `api/albums/${id}/save`,
    method: 'POST'
  })
)

export const unsaveAlbum = (id) => (
  $.ajax({
    url: `api/albums/${id}/unsave`,
    method: 'DELETE'
  })
)


// artists

export const fetchFollowedArtists = () => (
  $.ajax({
    url: 'api/artists/followed_artists',
    method: 'GET'
  })
);

export const followArtist = (id) => (
  $.ajax({
    url: `api/artists/${id}/follow`,
    method: 'POST'
  })
)

export const unfollowArtist = (id) => (
  $.ajax({
    url: `api/artists/${id}/unfollow`,
    method: 'DELETE'
  })
)

// playlists

export const fetchFollowedPlaylists = () => (
  $.ajax({
    url: 'api/playlists/followed_playlists',
    method: 'GET'
  })
);

export const followPlaylist = (id) => (
  $.ajax({
    url: `api/playlists/${id}/follow`,
    method: 'POST'
  })
)

export const unfollowPlaylist = (id) => (
  $.ajax({
    url: `api/playlists/${id}/unfollow`,
    method: 'DELETE'
  })
)
