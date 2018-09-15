import { connect } from 'react-redux'
import SpotSearch from './SpotSearch'
// import React from 'react'
// import { Link,withRouter } from 'react-router-dom'
import { fetchSpots } from '../actions/spot_actions'

export const msp = (state) => {
  return {
    spots: Object.values(state.entities.spots)
  }
}

export const mdp = (dispatch) => {
  return {
    fetchSpots: () => dispatch(fetchSpots())
  }
}

export default connect(msp, mdp)(SpotSearch)
