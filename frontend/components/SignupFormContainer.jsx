import { connect } from 'react-redux';
import { signup, clearErrors } from '../actions/session_actions';
import SessionForm from './SessionForm';
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

export const msp = ({ session, errors, entities: { users } }) => {
  return {
    errors: errors.session,
    formType: 'SIGN UP',
    currentUser: users[session.currentUserId],
    navLink: <Link to='/login'>Log In</Link>,
    status_text: 'Already have an App-bnb account?'
  };
};

export const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
      clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(msp, mdp)(SessionForm));
