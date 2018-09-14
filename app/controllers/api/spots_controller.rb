class Api::SpotsController < ApplicationController
  def create
    @spot = Spot.new(spot_param)
  end

  def index
    @spots.all
  end

  private
  def spot_param
    params.require(:spot).permit(:title, :details, :lat, :lng)
  end
end
