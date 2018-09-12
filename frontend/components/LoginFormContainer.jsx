import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions';
import SessionForm from './SessionForm';
import { Link } from 'react-router-dom';
import React from 'react';

export const msp = ({ session, errors, entities: { users } }) => {
  return {
    errors: errors,
    currentUser: users[session.currentUserId],
    formType: 'LOG IN',
    navLink: <Link to='/signup'>Sign Up</Link>,
    // loggedIn: Boolean(session.currentUserId)
  };
};

export const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(msp, mdp)(SessionForm);
