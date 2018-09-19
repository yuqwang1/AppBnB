import React from 'react'
import SpotIndexItem from './SpotIndexItem'
import { withRouter } from 'react-router-dom'
class SpotIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  componentDidMount () {

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

export default withRouter(SpotIndex);
