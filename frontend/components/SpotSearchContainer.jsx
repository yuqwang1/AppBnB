import { connect } from 'react-redux';
import SpotSearch from './SpotSearch';
import React from 'react';
// import { Link,withRouter } from 'react-router-dom'
// import { fetchSpots } from '../actions/spot_actions';
import { updateFilter } from '../actions/filter_actions';

export const msp = (state) => {
  return {
    spots: Object.values(state.entities.spots),
    // minGuest: state.ui.filters.minGuest,
    // maxGuest: state.ui.filters.maxGuest
  };
}

export const mdp = (dispatch) => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
}

export default connect(msp, mdp)(SpotSearch)
