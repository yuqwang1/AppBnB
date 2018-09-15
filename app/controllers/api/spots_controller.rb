class Api::SpotsController < ApplicationController
  before_action :require_login, only: [:create]
  def create
    @spot = Spot.new(spot_param)
    @spot.host_id = current_user.id
    if @spot.save
      render :show
    else
      render json: @spot.error.full_messages, status: 422
    end
  end

  def update
    @spot = current_user.spots.find(param[:id])
    if @spot.update(spot_param)
      render :show
    else
      render json: @spot.error.full_messages, status: 422
    end
  end

  def index
    if bounds
      @spots = Spot.in_bounds(bounds)
    else
      @spots = Spot.all
    end
  end

  private
  def spot_param
    params.require(:spot).permit(:title, :details, :lat, :lng)
  end

  def bounds
    params[:bounds]
  end
end
