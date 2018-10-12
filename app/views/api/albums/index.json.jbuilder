@albums.each do |album|
  json.set! album.id do
    json.extract! album, :title
    json.artist_name album.artist.name
    if album.cover.attached?
      json.cover_url album.cover.service_url
    end
  end
end
