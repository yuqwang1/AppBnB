import * as SpotsApiUtil from '../util/spot_api_util'

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS'
export const RECEIVE_SPOT = 'RECEIVE_SPOT'

export const receiveSpots = (spots) => {
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

export const fetchSpots = (filters) => {
  return dispatch => {
    return SpotsApiUtil.fetchSpots(filters).then(spots => {
      return dispatch(receiveSpots(spots))
    })
  }
}

export const fetchSpot = (id) => {
  return dispatch => {
    return SpotsApiUtil.fetchSpot(id).then(spot => {
      return dispatch(receiveSpot(spot))
    })
  }
}
