import { connect } from 'react-redux';
import SpotShow from './SpotShow';
import { fetchSpot } from '../../actions/spot_actions';
import { fetchReviews, deleteReview } from '../../actions/review_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

export const msp = (state, ownProps) => {
  // debugger
  return ({
    spot: state.entities.spots[ownProps.match.params.spotId],
    reviews: Object.values(state.entities.reviews),
    user: state.entities.users,
    currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.currentUserId]
  })
}

export const mdp = (dispatch) => {
  // debugger
  return ({
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    fetchReviews: (id) => dispatch(fetchReviews(id)),
    deleteReview: (id) => dispatch(deleteReview(id)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: modal => dispatch(closeModal(modal))
  })
}

export default connect(msp, mdp)(SpotShow);
