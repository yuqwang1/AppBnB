import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions';
import SessionForm from './SessionForm';
import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom'

export const msp = ({ session, errors, entities: { users } }) => {
  return {
    errors: errors,
    currentUser: users[session.currentUserId],
    formType: 'LOG IN',
    navLink: <Link to='/signup'>Sign Up</Link>,
    status_text: 'Don’t have an account?'
    // loggedIn: Boolean(session.currentUserId)
  };
};

export const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default withRouter(connect(msp, mdp)(SessionForm));
