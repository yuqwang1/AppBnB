import { connect } from 'react-redux';
import { updateFilter } from '../actions/filter_actions';
import SpotSearch from './SpotSearch';

const msp = (state) => {
  return {
    spots: Object.values(state.entities.spots)
  };
};

const mdp = (dispatch) => {
  return {
    updateFilters: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default connect(msp, mdp)(SpotSearch);
