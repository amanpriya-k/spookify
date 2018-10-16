json.extract! user, :id, :username, :email
json.date user.created_at.to_date

json.album_ids user.saved_album_ids
json.song_ids user.saved_song_ids
json.artist_ids user.followed_artist_ids
json.playlist_ids user.followed_playlist_ids

json.followers do
  user.followers.each do |user_f|
    json.set! user_f.id do
      json.extract! user_f, :username, :id
      json.following user.following_ids.include?(user_f.id)
    end
  end
end

json.following do
  user.following.each do |user_s|
    json.set! user_s.id do
      json.extract! user_s, :username, :id
      json.following user.following_ids.include?(user_s.id)
    end
  end
end
