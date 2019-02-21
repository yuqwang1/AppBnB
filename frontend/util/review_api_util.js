export const createReview = (review) => {
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
  return $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${reviewId}`
  })
}

export const editReview = (review) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.reviewId}`,
    data: { review }
  })
}
