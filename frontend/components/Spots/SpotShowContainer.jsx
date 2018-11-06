import { connect } from 'react-redux';
import SpotShow from './SpotShow';
import { fetchSpot } from '../../actions/spot_actions';
import { fetchReviews, deleteReview, updateReview } from '../../actions/review_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchUsers } from '../../actions/session_actions'

export const msp = (state, ownProps) => {
  return ({
    spot: state.entities.spots[ownProps.match.params.spotId],
    reviews: Object.values(state.entities.reviews),
    currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.currentUserId],
    users: state.entities.users
  })
}

export const mdp = (dispatch) => {
  return ({
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    fetchReviews: (id) => dispatch(fetchReviews(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    deleteReview: (id) => dispatch(deleteReview(id)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: modal => dispatch(closeModal(modal)),
  })
}

export default connect(msp, mdp)(SpotShow);
