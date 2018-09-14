class AddColumnSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :lat, :float, null: false
    add_column :spots, :lng, :float, null: false
    change_column :spots, :spot_type, :string, :null => true
    change_column :spots, :location, :string, :null => true
    change_column :spots, :cost, :integer, :null => true
    change_column :spots, :guest, :integer, :null => true
    change_column :spots, :img_url, :string, :null => true
    change_column :spots, :bedrooms, :integer, :null => true
    change_column :spots, :beds, :integer, :null => true
    change_column :spots, :bath, :integer, :null => true

  end
end
