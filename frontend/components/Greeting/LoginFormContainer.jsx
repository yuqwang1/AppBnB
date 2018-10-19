import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './SessionForm';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions'

export const msp = ({ session, errors, entities: { users } }) => {
  // debugger
  return {
    errors: errors.session,
    currentUser: users[session.currentUserId],
    formType: 'Log in',
    navLink: <Link to='/signup'>Sign Up</Link>,
    status_text: 'Don’t have an account?'
    // loggedIn: Boolean(session.currentUserId)
  };
};

export const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button className='otherForm-button' onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(connect(msp, mdp)(SessionForm));
