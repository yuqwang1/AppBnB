import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const CLEAR_BOOKING_ERRORS = 'CLEAR_BOOKING_ERRORS';

export const receiveBookings = (bookings) => {
  return {
    type: RECEIVE_BOOKINGS,
    bookings
  }
}

export const receiveBooking = (booking) => {
  return {
    type: RECEIVE_BOOKING,
    booking
  }
}

export const receiveBookingErrors = (errors) => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors
  }
}

export const clearBookingErrors = () => {
  return {
    type: CLEAR_BOOKING_ERRORS
  }
}


export const fetchBookings = () => {
  return dispatch => {
    return BookingApiUtil.fetchBookings().then(bookings => {
      return dispatch(receiveBookings(bookings))
    })
  }
}

export const createBooking = (booking) => {
  return dispatch => {
    return BookingApiUtil.createBooking(booking).then(booking => {
      return dispatch(receiveBooking(booking))},
    errors => {
      return dispatch(receiveBookingErrors(errors.responseJSON))
    })
  }
}
