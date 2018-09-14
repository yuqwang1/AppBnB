import * as SpotsApiUtil from '../util/spot_api_util'

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';

export const receiveSpots = (spots) => {
  return {
    type: "RECEIVE_SPOTS",
    spots
  }
}

export const fetchSpots = () => {
  return dispatch => {
    return SpotsApiUtil.fetchSpots().then( spots => {
      return dispatch({type: RECEIVE_SPOTS, spots })
    })
  }
}
