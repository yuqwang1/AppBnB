# Appbnb
[Visit Appbnb!](https://app-bnb.herokuapp.com/#/)

## Basic Overview
Appbnb is a single page application inspired by Airbnb. The website allows travelers to
browse locations around the world and pick their favorite spots to book.


## Key Features
* Search spot by its name, the map filters the bounds respectively

### User Authentication
* Verify if users are logged in and users have limited access to features without logging in.
* Users can create a new account.
* A log in demo is available for visitors to browse the app conveniently.

### Spots
* Spots are listed both in picture lists and in google map. Users can click either of them to view the details.
* Spots can be filtered by its title through the search bar.
* Spot detail page shows the spot description, spot rating, amenities, all reviews and zoomed in spot location on google map.

This block of code below shows how map utility and map component controls both single spot rendering and multiple spots rendering    
```javascript
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

componentDidMount () {
  const map = this.refs.map;
  mapOptions.zoom = this.props.zoom;
  if (this.props.spots.length === 1) {
    mapOptions.center = { lat: this.props.spots[0].lat, lng: this.props.spots[0].lng }
  }
  this.map = new google.maps.Map(map, mapOptions);
  this.MarkerManager = new MarkerManager(
    this.map,
    this.handleMarkerClick.bind(this)
  );
  this.registerListeners();
  this.MarkerManager.updateMarkers(this.props.spots);
}
```
### Bookings
* When logged in, users are able to book available spots.
* Users can customize the date and guests for the spot they want to book.
* Users can view the spot rating and a booking's reviews.


### Reviews
* Current user is able to write and delete his/her review.
* Current user can rate his/her trip, view his/her rating.  


## Technologies
### Frontend
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Google Map API](https://developers.google.com/maps/documentation/javascript/tutorial)
  the map display, the spots show in the map
* [React Rating](https://www.npmjs.com/package/react-rating)
  the review rating at the bottom of the spot show page

### Backend
* [Ruby on Rails](https://rubyonrails.org/)
* [Jbuilder](https://github.com/rails/jbuilder)

### Database
* [PostgreSQL](https://www.postgresql.org/)

## Future Direction
* Let users to create and edit their own favorite spot.
* Expand the spots listing.
* Create a user profile to show the user's reviews, spots booked and any spots they host.
