json.playlist do
  json.extract! @playlist, :name, :id

  json.owned current_user.playlist_ids.include?(@playlist.id)

  json.followed current_user.followed_playlist_ids.include?(@playlist.id)
end

json.songs do
  if @playlist.songs.length > 0

    @playlist.songs.each do |song|
      json.partial! 'api/songs/song', song: song
    end

  elsif
    {}
  end
end

# debugger
