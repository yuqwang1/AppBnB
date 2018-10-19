import { connect } from 'react-redux'
import { signup, clearErrors } from '../../actions/session_actions'
import SessionForm from './SessionForm'
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { openModal, closeModal } from '../../actions/modal_actions'

export const msp = ({ session, errors, entities: { users } }) => {
  // debugger
  return {
    errors: errors.session,
    formType: 'Sign up',
    currentUser: users[session.currentUserId],
    status_text: 'Already have an App-bnb account?'
  }
}

export const mdp = (dispatch) => {
  // debugger
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button className='otherForm-button' onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default withRouter(connect(msp, mdp)(SessionForm))
