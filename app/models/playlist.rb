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
  after_initialize :add_image_to_playlist

  validates :name, presence: true

  belongs_to :user

  has_one_attached :image

  has_many :playlist_songs

  has_many :songs, through: :playlist_songs

  def add_image_to_playlist
    # img = EzDownload.open('https://s3-us-west-1.amazonaws.com/spookify-dev/playlist-image.png')
    # self.image.attach(io: img, filename: 'playlist-image.jpg')
  end

end
