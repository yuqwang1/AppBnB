class MarkerManager {
  constructor (map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

updateMarkers (spots) {
    const spotsObj = {};
    spots.forEach(spot => spotObj[spot.id] = spot);

    spots.filter(spot => !this.market[spot.id])
      .forEach(newSpot => this.createMarkerFromSpot(newSpot, this.handleClick))

    Object.keys(this.markers)
      .filter(spotId => !spotsObj[spotId])
      .forEach((spotId) => this.removeMarker(this.markers[spotId]))
  }

createMarkerFromSpot (spot) {
    const position = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot.id
    });

    marker.addListener('click', () => this.handleClick(spot));
    this.markers[marker.spotId] = marker;
  }

  removerMarker (marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }
}

export default MarkerManager;
