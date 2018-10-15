json.extract! @playlist, :name, :id

json.songs do
  @playlist.songs.each do |song|
    json.partial! 'api/songs/song', song: song
  end
end

json.cover_url @playlist.image.service_url

json.followed current_user.followed_playlist_ids.include?(@playlist.id)
