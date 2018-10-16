import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import { createReview, clearErrors } from '../../actions/review_actions';
import { fetchSpot } from '../../actions/spot_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  // debugger
  return ({
    errors: state.errors.reviews,
    review: { review: '', rating: '', spotId: ownProps.match.params.spotId },
    spot: state.entities.spots[ownProps.match.params.spotId],
    currentUser: state.entities.users[state.session.currentUserId]
  }
)};

const mdp = dispatch => {
  // debugger
  return ({
    createReview: review => dispatch(createReview(review)),
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
  })
};

export default withRouter(connect(msp, mdp)(ReviewForm));
