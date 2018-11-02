import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import { updateReview, clearErrors } from '../../actions/review_actions';
import { fetchSpot } from '../../actions/spot_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const reviews = Object.values(state.entities.reviews)
  const currentReview = reviews[reviews.length - 1]
  const review = {
    id: currentReview.id,
    review: currentReview.review,
    rating: currentReview.rating,
  }
  return ({
    errors: state.errors.reviews,
    formType: 'updateReview',
    review: review,
    spot: state.entities.spots[ownProps.match.params.spotId],
    currentUser: state.entities.users[state.session.currentUserId],
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
