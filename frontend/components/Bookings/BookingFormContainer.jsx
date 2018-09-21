import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './BookingForm';
import { createBooking, clearBookingErrors } from '../../actions/booking_actions';
import { fetchSpot } from '../../actions/spot_actions'

const msp = (state, ownProps) => {
  // debugger
  return ({
    errors: state.errors.bookings,
    booking: { check_in: '', check_out: '', guest: 1 },
    spot: state.entities.spots[ownProps.match.params.spotId] || {}
  }
)};

const mdp = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  clearBookingErrors: () => dispatch(clearBookingErrors()),
  fetchSpot: (id) => dispatch(fetchSpot(id))
});

export default withRouter(connect(msp, mdp)(BookingForm));