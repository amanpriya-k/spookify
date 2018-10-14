json.extract! album, :title, :id
json.artist album.artist.name

json.songs do
  album.songs.each do |song|
    json.partial! 'api/songs/song', song: song
  end
end

json.cover_url album.cover.service_url
