import { connect } from "react-redux";
import SearchBar from './searchBar';
import { fetchSpots } from '../../actions/spot_actions';
import { withRouter } from 'react-router-dom'

export const mdp = (dispatch) => ({
  fetchSpots: (data) => dispatch(fetchSpots(data))
});

export default withRouter(connect(null, mdp)(SearchBar));
