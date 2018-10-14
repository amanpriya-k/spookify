# == Schema Information
#
# Table name: playlists
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class Playlist < ApplicationRecord
  validates :name, presence: true

  belongs_to :user

  has_one_attached :image

  has_many :playlist_songs

  has_many :songs, through: :playlist_songs

end
