json.extract! user, :id, :username, :email

json.album_ids user.saved_album_ids
json.song_ids user.saved_song_ids
json.artist_ids user.followed_artist_ids
json.playlist_ids user.followed_playlist_ids

json.followers do
  user.followers.each do |user_f|
    json.set! user_f.id do
      json.partial! 'api/users/user', user: user_f
    end
  end
end

json.following do
  user.following.each do |user_s|
    json.set! user_s.id do
      json.partial! 'api/users/user', user: user_s
    end
  end
end
