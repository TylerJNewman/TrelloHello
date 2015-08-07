class RemoveBoardIdFromBoard < ActiveRecord::Migration
  def change
    remove_column :boards, :board_id, :integer
  end
end
