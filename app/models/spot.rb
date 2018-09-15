class Spot < ApplicationRecord
  validates :title, :details, :lat, :lng, presence: true

  # belongs_to :host,
  #   class_name: 'User',
  #   primary_key: :id,
  #   foreign_key: :host_id
  #
  # has_many :bookings,
  #   class_name: 'Booking',
  #   primary_key: :id,
  #   foreign_key: :spot_id
  #
  # has_many :reviews,
  #   through: :bookings,
  #   source: :review



  def self.in_bound
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng < ?", bounds[:northEast][:lng])
      .where("lng > ?", bounds[:southWest][:lng])
  end
end
