import React from 'react'
import SpotIndexItem from './SpotIndexItem'
import { withRouter } from 'react-router-dom'
import { fetchSpots } from '../../actions/spot_actions';
import { connect } from 'react-redux';
import Star from '../star';
import Loading from '../loading'

class SpotIndex extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    this.props.fetchSpots();
    window.scrollTo(0, 0);
  }

  emptyPage () {
    return (
      <div className='spot-error'>
        <h1>No Matched Result, Please Try Again</h1>
      </div>
    )
  }

  render () {
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
              <SpotIndexItem spot={spot} key={spot.id} />
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
  }
}

export default withRouter(connect(msp, mdp)(SpotIndex))
