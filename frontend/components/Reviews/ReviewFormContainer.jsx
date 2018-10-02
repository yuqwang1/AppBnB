import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import { createReview, deleteReview } from '../../actions/review_actions';
import { fetchSpot } from '../../actions/spot_actions'

const msp = (state, ownProps) => {
  // debugger
  return ({
    errors: state.errors.review,
    review: { review: '', rating: '' },
    spot: state.entities.spots[ownProps.match.params.spotId],
    currentUser: state.entities.users[state.session.currentUserId]
  }
)};

const mdp = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  deleteReview: () => dispatch(deleteReview()),
  fetchSpot: (id) => dispatch(fetchSpot(id))
});

export default withRouter(connect(msp, mdp)(ReviewForm));
