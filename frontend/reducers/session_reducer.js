import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

let DefaultState = {
  currentUserId: null
}

export const sessionReducer = (state = { currentUserId: null }, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUserId: action.currentUser.id
      }
    case LOGOUT_CURRENT_USER:
      return DefaultState
    default:
      return state
  }
}
