
class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(spots) {
    const spotsObj = {};
    spots.forEach(spot => (spotsObj[spot.id] = spot));

    spots
      .filter(spot => !this.markers[spot.id])
      .forEach(newSpot =>
        this.createMarkerFromspot(newSpot, this.handleClick)
      );

    Object.keys(this.markers)
      .filter(spotId => !spotsObj[spotId])
      .forEach(spotId => this.removeMarker(this.markers[spotId]));
  }

  createMarkerFromspot(spot) {
    const position = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot.id
    });

    marker.addListener("click", () => this.handleClick(spot));
    this.markers[marker.spotId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }
}


export default MarkerManager;
