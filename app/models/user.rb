class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :spots,
    class_name: 'Spot',
    primary_key: :id,
    foreign_key: :host_id

  # has_many :bookings,
  #   class_name: 'Booking',
  #   primary_key: :id,
  #   foreign_key: :user_id
  #
  # has_many :reviews,
  #   class_name: 'Review',
  #   primary_key: :id,
  #   foreign_key: :user_id


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
