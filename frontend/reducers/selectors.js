
export const userOwnedPlaylists = (playlists) => {
  return Object.values(playlists).filter( playlist => playlist.owned );
}
