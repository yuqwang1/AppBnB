import { connect } from 'react-redux';
import SpotSearch from './SpotSearch';
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

export const msp = (state) => {
  return {
    spots: Object.values(state.entities.spots)
  };
};

export const mdp = (dispatch) => {
  return {
    fetchSpots: () => dispatch(fetchSpots())
  };
}


export default connect(msp,mdp)(SpotSearch);
