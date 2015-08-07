class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.string :board_id, null: false
      t.string :ord, null: false

      t.timestamps null: false
    end

    add_index :lists, :board_id
  end
end
