class CreateSongsInPlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :songs_in_playlists do |t|
      t.integer :song_id, null: false
      t.integer :playlist_id, null: false

      t.timestamps
    end
    add_index :songs_in_playlists, [:song_id, :playlist_id], unique: true
    add_index :songs_in_playlists, :playlist_id, unique: true

  end
end
