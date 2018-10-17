@users.each do |user|
  json.set! user.id do
    json.extract! user, :username, :id
    json.following current_user.following_ids.include?(user.id)
  end
end
