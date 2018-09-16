import SpotMap from './SpotMap';
import SpotIndex from './SpotIndex';
import React from 'react';
import { withRouter } from 'react-router-dom';

const SpotSearch = ({ spots, updateFilter }) => {
  return (
    <div>
      <div>
        <SpotIndex spots={spots}/>
      </div>

      <div>
        <SpotMap spots={spots} updateFilter={updateFilter}/>
      </div>
    </div>
  )
}

export default SpotSearch;
