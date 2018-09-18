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
  return dispatch => {
    return SpotsApiUtil.fetchSpot(id).then(payload => {
      return dispatch(receiveSpot(payload))
    })
  }
}

export const createSpot = (spot) => {
  return dispatch => {
    return SpotsApiUtil.createSpot(spot).then(spot => {
      return dispatch(receiveSpot(spot))
    })
  }
}
