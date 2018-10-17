import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './BookingForm';
import { createBooking, clearBookingErrors, clearBooking } from '../../actions/booking_actions';
import { fetchSpot } from '../../actions/spot_actions'

const msp = (state, ownProps) => {
  return ({
    errors: state.errors.bookings,
    bookings: Object.values(state.entities.bookings),
    spot: state.entities.spots[ownProps.match.params.spotId] || {},
    reviews: Object.values(state.entities.reviews)
  }
)};

const mdp = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  clearBookingErrors: () => dispatch(clearBookingErrors()),
  fetchSpot: (id) => dispatch(fetchSpot(id)),
  clearBooking: () => dispatch(clearBooking())
});

export default withRouter(connect(msp, mdp)(BookingForm));
