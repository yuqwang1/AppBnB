export const createReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: `/api/spots/${review.spotId}/reviews`,
    data: { review }
  })
}

export const fetchReviews = (spotId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/spots/${spotId}/reviews`
  })
}

export const deleteReview = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`
  })
}
