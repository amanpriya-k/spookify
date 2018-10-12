@songs.each do |song|
  json.set! song.id do
    json.extract! song, :name
    json.album song.album
    json.artist song.album.artist
    if song.album.cover.attached?
      json.cover_url url_for(song.album.cover)
    end
  end
end
