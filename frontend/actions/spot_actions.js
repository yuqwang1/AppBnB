import * as SpotsApiUtil from '../util/spot_api_util'

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS'
export const RECEIVE_SPOT = 'RECEIVE_SPOT'

export const receiveSpots = (spots) => {
  // debugger
  return {
    type: 'RECEIVE_SPOTS',
    spots
  }
}

export const receiveSpot = (spot) => {
  // debugger
  return {
    type: 'RECEIVE_SPOT',
    spot
  }
}

export const fetchSpots = (data) => {
  // debugger
  return dispatch => {
    // debugger
    return SpotsApiUtil.fetchSpots(data).then(spots => {
      // debugger
      return dispatch(receiveSpots(spots))
    })
  }
}

export const fetchSpot = (id) => {
  // debugger
  return dispatch => {
    return SpotsApiUtil.fetchSpot(id).then(payload => {
      // debugger
      return dispatch(receiveSpot(payload))
    })
  }
}

export const createSpot = (spot) => {
  return dispatch => {
    return SpotsApiUtil.createSpot(spot).then(spot => {
      // debugger
      return dispatch(receiveSpot(spot))
    })
  }
}
