import React from 'react';
import { MoonLoader } from 'react-spinners';

const Loading = (state) => {
  return (
    <div className="react-spinner-container">
      <MoonLoader
        className="pacman-loader"
        sizeUnit={"px"}
        size={40}
        color={'#008489'}
        loading={state.loading}
      />
    </div>
  )
};

export default Loading;
