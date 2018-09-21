import merge from 'lodash/merge'
import { RECEIVE_BOOKING, RECEIVE_BOOKINGS } from '../actions/booking_actions';

export const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return merge({}, state, { [action.booking.id]: action.booking })

    default:
      return state;
  }
}
