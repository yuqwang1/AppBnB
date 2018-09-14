import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = (errors) => {
  debugger
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  }
}

// THUNK ACTION CREATORS
export const login = (user) => {
  // debugger
  return (dispatch) => {
    return SessionApiUtil.login(user).then( user => {
      // debugger
      return dispatch(receiveCurrentUser(user));
    }, errors => {
      // debugger
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

export const signup = (user) => {
  return dispatch => {
    return SessionApiUtil.signup(user).then( user=> {
      return dispatch(receiveCurrentUser(user));
    },errors => {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

export const logout = () => {
  // debugger
  return dispatch => {
    return SessionApiUtil.logout().then( () => {
      return dispatch(logoutCurrentUser());
    });
  };
};
