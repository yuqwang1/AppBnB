json.booking do
  json.partial! 'api/bookings/booking', booking: @booking
end

json.user do
  json.partial! 'api/users/user', user: @booking.user
end 
