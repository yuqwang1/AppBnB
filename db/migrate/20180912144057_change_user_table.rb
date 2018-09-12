class ChangeUserTable < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :img_url, :string, :null => true
    change_column :users, :booking_id, :integer, :null => true 
  end
end
