@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :name, :id
    json.user_id playlist.user.id
    json.owned current_user.playlist_ids.include?(playlist.id)

    json.songs do
      playlist.songs.each do |song|
        json.partial! 'api/songs/song', song: song
      end
    end

    if playlist.image.attached?
      json.image_url playlist.image.service_url
    end
  end
end
