class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :title, null:false
      t.string :board_id, null: false

      t.timestamps null: false
    end
  end
end
