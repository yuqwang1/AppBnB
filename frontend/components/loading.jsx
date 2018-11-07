import React from 'react';
import { css } from 'react-emotion';
import { BeatLoader } from 'react-spinners';


const Loading = (state) => {
  return (
    <div className="spinner-container">
      <BeatLoader
        className='moon-loader'
        sizeUnit={"px"}
        size={30}
        color={'#008489'}
        loading={state.loading}
      />
    </div>
  )
};

export default Loading;
