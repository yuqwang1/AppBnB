class CreateBooking < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :spot_id, null: false
      t.integer :user_id, null: false
      t.datetime :check_in, null: false
      t.datetime :check_out, null: false
    end
  end
end
