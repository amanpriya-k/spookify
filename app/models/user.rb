  # == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  after_initialize :ensure_session_token
  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password


  has_many :savings,
    foreign_key: :user_id,
    class_name: :Save

  has_many :follows

  has_many :saved_songs,
    through: :savings,
    source: :saveable,
    source_type: 'Song'

  has_many :saved_albums,
    through: :savings,
    source: :saveable,
    source_type: 'Album'

  has_many :followed_artists,
    through: :follows,
    source: :followable,
    source_type: 'Artist'

  has_many :followed_playlists,
    through: :follows,
    source: :followable,
    source_type: 'Playlist'

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if (user && user.is_password?(password))
    nil
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

end
