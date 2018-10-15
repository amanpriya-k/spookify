json.extract! user, :id, :username, :email

json.album_ids user.saved_album_ids
json.song_ids user.saved_song_ids
json.artist_ids user.followed_artist_ids
json.playlist_ids user.followed_playlist_ids
