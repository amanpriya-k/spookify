class DropPlaylistSongs < ActiveRecord::Migration[5.2]
  def change
    drop_table :playlists_songs
  end
end
