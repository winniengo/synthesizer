class ChangeRollType < ActiveRecord::Migration[5.0]
  def change
    change_column :tracks, :roll, :text
  end
end
