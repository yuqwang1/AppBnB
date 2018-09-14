import { RECEIVE_SPOTS } from '../actions/spot_actions';

export const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.spots;
    default:
      return state;
    }
}
