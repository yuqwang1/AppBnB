class Spot < ApplicationRecord
  validates :title, :details, :lat, :lng, presence: true

  belongs_to :host,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :host_id

  has_many :bookings,
    class_name: 'Booking',
    primary_key: :id,
    foreign_key: :spot_id

  has_many :reviews,
    class_name: 'Review',
    primary_key: :id,
    foreign_key: :spot_id

  has_many :reviewers,
    through: :reviews,
    source: :author

  has_many :bookers,
    through: :bookings,
    source: :user

end
