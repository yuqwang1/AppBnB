import SpotMap from './SpotMap'
import SpotIndex from './SpotIndex'
import React from 'react'

class SpotSearch extends React.Component {
  render () {
    return (
      <div>
        <div>
          <SpotMap/>
        </div>
        <div>
          <SpotIndex/>
        </div>
      </div>

    )
  }
}

export default SpotSearch
