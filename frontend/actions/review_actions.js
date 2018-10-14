import * as ReviewApiUtil from '../util/review_api_util';


export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

export const receiveReview = (currentReview) => {
  return {
    type: RECEIVE_REVIEW,
    currentReview
  }
}

export const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  }
}

export const removeReview = (reviewId) => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  }
}

export const createReview = (review) => {
  return dispatch => {
    return ReviewApiUtil.createReview(review).then(review => {
      return dispatch(receiveReview(review))
},
    errors => {
      return dispatch(receiveReviewErrors(errors.responseJSON))
    })
  }
}

export const fetchReviews = (spotId) => {
  return dispatch => {
    return ReviewApiUtil.fetchReviews(spotId).then(reviews => {
      return dispatch(receiveReviews(reviews))
    })
  }
}

export const deleteReview = (reviewId) => {

  return dispatch => {
    return ReviewApiUtil.deleteReview(reviewId).then(review => {
      return dispatch(removeReview(reviewId))
    },
    errors => {
      return dispatch(receiveReviewErrors(errors.responseJSON))
    })
  }
}


export const receiveReviewErrors = errors => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
