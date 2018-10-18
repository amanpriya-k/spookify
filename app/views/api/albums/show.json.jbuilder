json.album do
  json.extract! @album, :title, :id
  json.artist_name @album.artist.name
  json.artist_id @album.artist.id

  json.cover_url @album.cover.service_url
  json.saved current_user.saved_album_ids.include?(@album.id)
end


json.songs do
  @album.songs.each do |song|
    json.partial! 'api/songs/song', song: song
  end
end
