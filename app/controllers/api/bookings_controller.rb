class Api::BookingsController < ApplicationController
  before_action :require_login

  def create
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id
    if @booking.save
      render :index
    else
      render json: @Booking.errors.full_messages, status: 422
    end
  end

  def show
    @booking = Booking.find(params[:id])
  end

  def index
    @bookings = Booking.all
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
  end

  def update
  end

  def valid_booking?(check_in, check_out)
    if check_in > check_out
      return ['Check in date are greater than check out date, please try again']
    elsif check_in == check_out
      return ['Check in and check out can not be the same date']
    else
      return true
    end
  end

  private
  def booking_parmas
    params.require(:booking).permit(:user_id, :spot_id, :check_in, :check_out, :guest)
  end

end
