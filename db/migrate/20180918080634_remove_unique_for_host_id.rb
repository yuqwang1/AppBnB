class RemoveUniqueForHostId < ActiveRecord::Migration[5.2]
  def change
    remove_index :spots, :host_id
    add_index :spots, :host_id
  end
end
