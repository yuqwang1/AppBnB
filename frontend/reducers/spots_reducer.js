import { RECEIVE_SPOTS, RECEIVE_SPOT } from '../actions/spot_actions'
import merge from 'lodash/merge';

export const spotsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.spots || {}
    case RECEIVE_SPOT:
      return merge({}, state, { [action.spot.id]: action.spot })
    default:
      return state
  }
}
