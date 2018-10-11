import { connect } from 'react-redux';
import SpotShow from './SpotShow';
import { fetchSpot } from '../actions/spot_actions';
import { fetchReviews } from '../actions/review_actions';

export const msp = (state, ownProps) => {
  // debugger
  return ({
    spot: state.entities.spots[ownProps.match.params.spotId],
    reviews: Object.values(state.entities.reviews),
    user: state.entities.users
  })
}

export const mdp = (dispatch) => {
  return ({
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    fetchReviews: (id) => dispatch(fetchReviews(id))
  })
}

export default connect(msp, mdp)(SpotShow);
