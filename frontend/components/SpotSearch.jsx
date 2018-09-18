import SpotMap from './SpotMap';
import SpotIndex from './SpotIndex';
import React from 'react';
// import FilterForm from './filter_form';

const SpotSearch = ({ spots, updateFilter }) => {
  return (
    <div>
      <div className='spot-img-list'>
        <SpotIndex spots={spots}/>
      </div>
      <div className='map-page'>
        <SpotMap spots={spots} updateFilter={updateFilter}/>
      </div>
    </div>
  )
}

export default SpotSearch;
