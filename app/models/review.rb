class Review < ApplicationRecord
  validates :review, :rating, presence: true

  belongs_to :author,
  class_name: 'User',
  foreign_key: :user_id,
  primary_key: :id

  belongs_to :spot,
  class_name: 'Spot',
  foreign_key: :spot_id,
  primary_key: :id

end
