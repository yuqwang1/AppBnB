import React from 'react';
import { Link } from 'react-router-dom';
// import SearchBar from './searchBar/SearchBarContainer';
import BookingFormContainer from '../Bookings/BookingFormContainer';
import ReviewFormContainer from '../Reviews/ReviewFormContainer';
import SpotShowMap from './SpotShowMap';
import ReactStars from 'react-stars';
import moment from 'moment';
import { DayPickerRangeController } from 'react-dates';
import Loading from '../loading';


class SpotShow extends React.Component {
  constructor (props) {
    super(props);
    this.state = { check_in: null, check_out: null, loading: true }
    setTimeout(() => this.setState({ loading: false }), 1200);
  }

  componentDidMount () {
    // debugger
    this.props.fetchSpot(this.props.match.params.spotId)
    this.props.fetchReviews(this.props.match.params.spotId)
    this.props.fetchUsers();
    window.scrollTo(0, 0);
}

  componentWillReceiveProps (nextProps) {
    if (this.props.spot && this.props.spot.id !== parseInt(nextProps.match.params.spotId)) {
      this.props.fetchSpot(nextProps.match.params.spotId);

    }
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.reviews[(this.props.reviews.length - 1)].id);
  }


  render () {
    if (this.state.loading) {
      return <Loading state={this.state}/>
    }
    if (!this.props.spot || !this.props.reviews) {
      return <div>Loading.....</div>;
    } else {
      const loggedin = this.props.currentUser;
      const spot = this.props.spot || { img_url: '', title: '', guest: 0, bedrooms: 0, beds: 0, bath: 0, details: '' }

      let center = new google.maps.LatLng(spot.lat, spot.lng);
      let zoom = 14;
      // debugger
      const reviews = this.props.reviews.map((review) => {
        const reviewUser = this.props.users[review.user_id]
        if (!review) return null;
        if (!reviewUser) {
          return (
            <h1 key={review.id}>loading</h1>
          )
        }
        return (
          <li className='single-review' key={review.id}>
            <div className='review-user-rating'>
              <img className='single-review-img' src={reviewUser.img_url}></img>
              <div className='single-review-content-one'>
                <div className='single-review-user'>{reviewUser.username}</div>
                <div className='single-review-date'>{reviewUser.created_at.slice(0,7)}</div>
              </div>
              { this.props.currentUserId === review.user_id ? <div className='single-review-rating'><ReactStars color2='#008489' value={ review.rating } half = { true } size={ 14 } edit={ false } /></div> : null }
            </div>
            <div className='single-review-content'>{review.review}</div>

            { this.props.currentUserId === review.user_id ? <div className='review-deletion'> <i className="fas fa-trash-alt" onClick={ (e) => this.handleSubmit(e) } type='submit'></i> </div> : null}

          </li>
        )
      }
      )

      const reviewed = this.props.reviews.map((review) => {

        if (this.props.currentUserId === review.user_id) {
          return true
        }
        return false
      }
      )

      return (
        <div className='spot-show-body'>
          <img className='spot-show-image' src={spot.img_url} />
          <div className='show-content'>
            <div className='spot-detail-show-page'>
              <div className='spot-detail-container'>
                <h2 className='spot-show-header'>ENTIRE APARTMENT</h2>
                <div className='spot-show-title'>{spot.title}</div>
                <div className='icon-list-show-page'>
                  <div className='icon-show-page'> <i className="fas fa-user-friends" />  {spot.guest} guest </div>
                  <div className='icon-show-page'> <i className="fas fa-warehouse" />  {spot.bedrooms} bedroom </div>
                  <div className='icon-show-page'> <i className="fas fa-bed" />  {spot.beds} bed </div>
                  <div className='icon-show-page'> <i className="fas fa-bath" />  {spot.bath} bath </div>
                </div>
                <div className='details-show-page'>{spot.details}</div>
                <div className='Amenities'>
                  <div className='Amenities-left'>
                    <div className='icon-Amenities-page'><i className="fas fa-wifi"> Wifi</i></div>
                    <div className='icon-Amenities-page'><i className="fas fa-utensils"> Kitchen</i></div>
                  </div>
                  <div className='Amenities-left'>
                    <div className='icon-Amenities-page'><i className="fas fa-tv"> Cable TV</i></div>
                    <div className='icon-Amenities-page'><i className="fas fa-coffee"> Breakfast</i></div>
                  </div>
                </div>
                {loggedin ? reviewed.includes(true) ? <button className='review-button' onClick={() => this.props.openModal('updateReview')}>Edit your review</button> : <button className='review-button' onClick={() => this.props.openModal('leaveReview')}>Leave a review</button> : <button className='review-button' onClick={() => this.props.openModal('login')}>Please log in to leave a review</button>}
                <h3 className='available-title'>Availability</h3>
                <div className="availability-calendar">
                  <DayPickerRangeController
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    hideKeyboardShortcutsPanel={true}
                    numberOfMonths={2}
                  />
                </div>
                <div className='guest-review'>{reviews}</div>
              </div>
              <div className='spot-show-map'>
                <SpotShowMap
                  spots={[spot]}
                  center={center}
                  zoom={zoom}/>
              </div>
            </div>
            <BookingFormContainer/>
          </div>

        </div>
      )
    }
}



}

export default SpotShow;
