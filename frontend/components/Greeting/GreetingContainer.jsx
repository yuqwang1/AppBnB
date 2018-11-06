import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import Greeting from './Greeting'
import { withRouter } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions'
import { fetchSpots } from '../../actions/spot_actions'

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    spots: Object.values(state.entities.spots)
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  fetchSpots: () => dispatch(fetchSpots())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting))
