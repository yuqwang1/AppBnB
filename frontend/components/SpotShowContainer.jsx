import { connect } from 'react-redux';
import SpotShow from './SpotShow';
import { fetchSpot } from '../actions/spot_actions';

export const msp = (state, ownProps) => {
  // debugger
  return ({
    spot: state.entities.spots[ownProps.match.params.spotId]
  })
}

export const mdp = (dispatch) => {
  return ({
    fetchSpot: (id) => dispatch(fetchSpot(id)),
  })
}

export default connect(msp, mdp)(SpotShow);
