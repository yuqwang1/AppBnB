json.set! 'spot' do
  json.partial! '/api/spots/spot', spot: @spot
end



json.set! 'users' do
  @spot.reviews.each do |review|
    json.set! review.user_id do
      json.partial! 'api/users/user', user: review.author
    end
  end
end
