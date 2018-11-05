import * as SpotsApiUtil from '../util/spot_api_util'

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS'
export const RECEIVE_SPOT = 'RECEIVE_SPOT'

export const receiveSpots = (spots) => {
  return {
    type: RECEIVE_SPOTS,
    spots
  }
}

export const receiveSpot = ({ spot, users, reviews }) => {
  return {
    type: RECEIVE_SPOT,
    spot,
    users,
    reviews
  }
}

export const fetchSpots = (data) => {
  return dispatch => {
    return SpotsApiUtil.fetchSpots(data).then(spots => {
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
