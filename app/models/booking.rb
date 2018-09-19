class Booking < ApplicationRecord
  validates :user_id, :spot_id, :check_in, :check_out, :guest, presence: true
  belongs_to :spot,
    class_name: 'Spot',
    primary_key: :id,
    foreign_key: :spot_id

  belongs_to :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id
end
