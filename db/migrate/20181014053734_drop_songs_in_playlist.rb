class DropSongsInPlaylist < ActiveRecord::Migration[5.2]
  def change
    drop_table :songs_in_playlists
  end
end
