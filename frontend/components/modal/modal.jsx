import React from 'react'
import { closeModal } from '../../actions/modal_actions'
import { connect } from 'react-redux'
import LoginFormContainer from '../Greeting/LoginFormContainer'
import SignupFormContainer from '../Greeting/SignupFormContainer'
import ReviewFormContainer from '../Reviews/ReviewFormContainer'
import EditReviewContainer from '../Reviews/EditReviewContainer'
import { withRouter } from 'react-router'

function Modal ({ modal, closeModal }) {
  // debugger
  if (!modal) {
    return null
  }
  let component
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />
      break
    case 'signup':
      component = <SignupFormContainer />
      break
    case 'leaveReview':
      component = <ReviewFormContainer />
      break
    case 'updateReview':
      component = <EditReviewContainer />
      break
    default:
      return null
  }
  // debugger
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  )
}

const mapStateToProps = ( state, ownProps ) => {
  // debugger
  return {
    modal: state.ui.modal,
    spot: state.entities.spots[ownProps.match.params.spotId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal))
