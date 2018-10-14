# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord

  has_many :savings, as: :saveable

  belongs_to :album

  has_many :playlist_songs

  has_many :playlists, through: :playlist_songs


end
