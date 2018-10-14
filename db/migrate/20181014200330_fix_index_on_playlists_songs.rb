class FixIndexOnPlaylistsSongs < ActiveRecord::Migration[5.2]
  def change
    remove_index :playlist_songs, column: :playlist_id, unique: true
    add_index :playlist_songs, :playlist_id
  end
end
