@albums.each do |album|
  json.set! album.id do
    json.extract! album, :title
    if album.cover.attached?
      json.cover_url url_for(album.cover)
    end
  end
end
