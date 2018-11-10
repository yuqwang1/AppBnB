import React from 'react'
import SpotIndexItem from './SpotIndexItem'
import { withRouter } from 'react-router-dom'
import { fetchSpots } from '../../actions/spot_actions';
import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions'
import Star from '../star';

class SpotIndex extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    window.scrollTo(0, 0);
    this.props.fetchReviews();
  }


  emptyPage () {
    return (
      <div className='spot-error'>
        <h1>No matched result, Please try keyword</h1>
        <h1> such as Manhattan, Central Park</h1>
      </div>
    )
  }

  render () {
    let score = 0;
    this.props.reviews.forEach(review => score += review.rating);
    score = score / this.props.reviews.length || 0;
    if (this.props.spots.length === 0) {
      return (
        this.emptyPage.bind(this)()
      )
    } else {
      return (
        <div>
          <h1 className='spot-list-title'>Explore Airbnb</h1>
          <div className='spot-img-list'>
            {this.props.spots.map(spot =>
              <div key={spot.id}>
                <SpotIndexItem spot={spot} />
              </div>
            )}
          </div>
        </div>
      )
    }
  }
}


const msp = (state, ownProps) => {
  return ({
    reviews: Object.values(state.entities.reviews)
  }
)};
const mdp = (dispatch) => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    fetchReviews: (id) => dispatch(fetchReviews(id))
  }
}

export default withRouter(connect(msp, mdp)(SpotIndex))
