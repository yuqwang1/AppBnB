import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Greeting from './Greeting';
import { withRouter } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.currentUserId],
    // loggedIn: Boolean(session.currentUserId)
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));
