class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :title, null: false
      t.text :details, null: false
      t.string :spot_type, null: false
      t.string :location, null:false
      t.integer :cost, null:false
      t.integer :guest, null: false
      t.string :img_url, null: false
      t.integer :bedrooms, null: false
      t.integer :beds, null:false
      t.integer :bath, null:false
      t.integer :booking_id
      t.integer :review_id
      t.integer :host_id
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
    add_index :spots, :host_id, unique: true
    add_index :spots, :title, unique: true
  end
end
