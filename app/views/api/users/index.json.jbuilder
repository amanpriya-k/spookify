@users.each do |user|
  json.set! user.id do
    json.extract! user_f, :username, :id
  end
end
