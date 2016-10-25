class ChangeTimeStartType < ActiveRecord::Migration[5.0]
  def change
    change_column :tracks, :time_start, :string
  end
end
