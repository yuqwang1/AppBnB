import SpotMap from './SpotMap';
import SpotIndex from './SpotIndex';
import React from 'react';
// import FilterForm from './filter_form';

const SpotSearch = ({ spots, updateFilter }) => {
  return (
    <div className='map-page'>
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
