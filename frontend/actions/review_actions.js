import * as ReviewApiUtil from '../util/review_api_util';


export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

export const removeReview = (id) => {
  return {
    type: REMOVE_REVIEW,
    id
  }
}

export const createReview = (review) => {
  return dispatch => {
    return ReviewApiUtil.createReview(review).then(review => {
      return dispatch(receiveReview(review))
    })
  }
}

export const deleteReview = (id) => {
  return dispatch => {
    return ReviewApiUtil.deleteReview(id).then(review => {
      return dispatch(removeReview(id))
    })
  }
}
