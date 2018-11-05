import { RECEIVE_CURRENT_USER, RECEIVE_USERS } from './../actions/session_actions'
import { merge } from 'lodash'

export const usersReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users || {}
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser })
    default:
      return state
  }
}
