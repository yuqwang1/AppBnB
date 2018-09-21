class Api::ReviewsController < ApplicationRecord
  
  def create
    @review = current_user.reviews.new(review_params)
    if review.save
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
