class AddColumnBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :guest, :integer
    add_index :bookings, :user_id
    add_index :bookings, :spot_id
  end
end
