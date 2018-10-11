class AddIndexToFollowAndSave < ActiveRecord::Migration[5.2]
  def change
    add_index :follows, [:user_id, :followable_id, :followable_type], unique: true
    add_index :saves, [:user_id, :saveable_id, :saveable_type], unique: true

  end
end
