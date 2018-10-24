import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import { updateReview, clearErrors } from '../../actions/review_actions';
import { fetchSpot } from '../../actions/spot_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return ({
    errors: state.errors.reviews,
    review: { review: '', rating: 3, spotId: ownProps.match.params.spotId },
    spot: state.entities.spots[ownProps.match.params.spotId],
    currentUser: state.entities.users[state.session.currentUserId],
    reviews: Object.values(state.entities.reviews),
    currentUserId: state.session.currentUserId,
  }
)};

const mdp = dispatch => {
  return ({
    updateReview: review => dispatch(updateReview(review)),
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
  })
};

export default withRouter(connect(msp, mdp)(ReviewForm));
