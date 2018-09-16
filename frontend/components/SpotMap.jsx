import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import MarketManager from '../util/marker_manager';

class SpotMap extends React.Component {
  constructor (props) {
    super(props);
  }


  render () {
    return (
      <div className='map' ref='map'>
        SpotMap
      </div>
    )
  }
}

export default SpotMap
