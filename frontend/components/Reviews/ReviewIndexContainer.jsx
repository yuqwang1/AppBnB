import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import { deleteReview } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    reviews: Object.values(state.entities.reviews),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteReview: id => dispatch(deleteReview(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
