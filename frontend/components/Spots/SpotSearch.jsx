import SpotMap from './SpotMap';
import SpotIndex from './SpotIndex';
import React from 'react';
// import FilterForm from './filter_form';

const SpotSearch = ({ spots, updateFilter }) => {
  return (
    <div>
      <SpotIndex spots={spots}/>
      <div className='spot-map-show-index'>
        <SpotMap spots={spots} updateFilter={updateFilter} zoom={11}/>
      </div>
    </div>
  )
}

export default SpotSearch;
