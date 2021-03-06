import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: {
    lat: 40.739455,
    lng: -73.978460
  },
  zoom: 12
};

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
})

class SpotMap extends React.Component {

  componentDidMount () {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(
      this.map,
      this.handleMarkerClick.bind(this)
    );
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate () {
    this.MarkerManager.updateMarkers(this.props.spots);
  }
  registerListeners () {
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = getCoordsObj(event.latLng);
    });
  }

  handleMarkerClick (spot) {
    this.props.history.push(`/spots/${spot.id}`);
  }


  render () {
    return (
      <div className='spot-map' ref='map'>
      </div>
    )
  }
}

export default withRouter(SpotMap);
