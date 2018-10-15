json.set! song.id do
  json.extract! song, :name, :id
  json.album_title song.album.title
  json.artist_name song.album.artist.name

  json.saved current_user.saved_song_ids.include?(song.id)
end
