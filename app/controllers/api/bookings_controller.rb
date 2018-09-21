class Api::BookingsController < ApplicationController
  before_action :require_login, only: [:create]

  def create
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id
    if @booking.save
      @bookings = Booking.where(user_id: current_user.id)
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def update
    @booking = Booking.find(params[:id])
    if @booking.update(booking_params)
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def index
    @bookings = Booking.where(user_id: current_user.id)
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
  end




  private
  def booking_params
    params.require(:booking).permit(:user_id, :spot_id, :check_in, :check_out, :guest)
  end

end
