@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :name, :id
    json.user_id playlist.user.id

    if playlist.image.attached?
      json.image_url playlist.image.service_url
    end
  end
end
