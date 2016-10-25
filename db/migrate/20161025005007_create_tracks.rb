class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.string :name, null: false
      t.string :roll, null: false
      t.integer :time_start, null: false

      t.timestamps
    end
  end
end
