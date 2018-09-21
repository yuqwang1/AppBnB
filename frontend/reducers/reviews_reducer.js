import merge from 'lodash/merge';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';


const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      return merge({}, state, { [action.review.id]: action.review });
    case REMOVE_REVIEW:
      const remove = merge({}, state)
      delete remove[action.id]
      return remove
    default:
      return state
  }
}

export default reviewsReducer;
