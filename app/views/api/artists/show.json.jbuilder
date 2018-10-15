json.extract! @artist, :name, :id

json.albums do
  @artist.albums.each do |album|
    json.set! album.id do
      json.partial! 'api/albums/album', album: album
    end
  end
end

json.songs do
  @artist.songs.limit(5).each do |song|
    json.partial! 'api/songs/song', song: song
  end
end


json.image_url @artist.photo.service_url

json.followed current_user.followed_artist_ids.include?(@artist.id)
