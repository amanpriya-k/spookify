class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :user_id
      t.integer :followable_id
      t.string :followable_type
      t.references :followable, polymorphic: true, index: true

      t.timestamps
    end

  end
end
