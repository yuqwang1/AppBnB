import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';


class SpotShowMap extends React.Component {

  componentDidMount () {
    const mapOptions = {
      center: {
        lat: this.props.spots[0].lat, lng: this.props.spots[0].lng
      },
      zoom: 16
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new google.maps.Circle({
      strokeColor: '#71cec9',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#90ece4',
      fillOpacity: 0.6,
      map: this.map,
      center: { lat: mapOptions.center.lat, lng: mapOptions.center.lng },
      radius: 150
    })
  }



  render () {
    return (
      <div className='spot-map' ref='map'>
      </div>
    )
  }
}

export default withRouter(SpotShowMap);
