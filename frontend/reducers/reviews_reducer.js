import merge from 'lodash/merge';
import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from '../actions/review_actions';


export const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      return merge({}, state, action.currentReview);
    case RECEIVE_REVIEWS:
      return action.reviews;
    case REMOVE_REVIEW:
    // debugger
      const remove = merge({}, state)
      delete remove[action.reviewId]
      return remove
    default:
      return state
  }
}
