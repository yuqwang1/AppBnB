import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

const mapOptions = {
  center: {
    lat: 40.715494,
    lng: -74.002209
  },
  zoom: 13
};

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
})

class SpotShowMap extends React.Component {

  componentDidMount () {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);

    this.registerListeners();
  }

  registerListeners () {
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = getCoordsObj(event.latLng);
    });
  }



  render () {
    return (
      <div className='spot-show-map' ref='map' >
      </div>
    )
  }
}

export default withRouter(SpotShowMap);
