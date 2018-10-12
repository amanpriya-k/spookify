

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

export const fetchAllSongs = () => (
  $.ajax({
    url: '/api/songs',
    method: 'GET'
  })
);
