class Api::ReviewsController < ApplicationController
  # before_action :require_login, only: [:create]
  def create
    @review = current_user.reviews.new(review_params)
    @review.spot_id = params[:review][:spotId]
    if !(current_user.spots.find_by(id: params[:review][:spotId]) == nil)
      render json: ['Cannot review own location'], status: 422
    elsif @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
      @reviews = Review.where(spot_id: params[:spot_id])
  end

  def destroy
      @review = Review.find(params[:id])
      if @review
        @review.destroy!
      else
        render json: ['That review does not exist'], status: 422
      end
  end

  def update
    @review = Review.find(params[:review][:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end


  private
  def review_params
    params.require(:review).permit(:review, :rating, :spot_id)
  end
end
