export const createReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
}


export const deleteReview = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`
  })
}
