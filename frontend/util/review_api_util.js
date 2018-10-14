export const createReview = (review) => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: `/api/spots/${review.spot_id}/reviews`,
    data: { review }
  })
}

export const fetchReviews = (spotId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/spots/${spotId}/reviews`
  })
}

export const deleteReview = (reviewId) => {
  debugger
  return $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${reviewId}`
  })
}
