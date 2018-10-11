import React from 'react';
import { Link } from 'react-router-dom';
// import SearchBar from './searchBar/SearchBarContainer';
import BookingFormContainer from './Bookings/BookingFormContainer';
import ReviewFormContainer from './Reviews/ReviewFormContainer';

class SpotShow extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    // debugger
    this.props.fetchSpot(this.props.match.params.spotId)
    this.props.fetchReviews(this.props.match.params.spotId)
    window.scrollTo(0, 0);
}

  componentWillReceiveProps (nextProps) {
    if (!this.props.spot || this.props.spot.id !== parseInt(nextProps.match.params.spotId)) {
      this.props.fetchSpot(nextProps.match.params.spotId);

    }
  }



  render () {
    if(!this.props.spot || !this.props.reviews) {
      return <div>Loading.....</div>;
    }
    // debugger
    const spot = this.props.spot || { img_url: '', title: '', guest: 0, bedrooms: 0, beds: 0, bath: 0, details: '' }

    const reviews = this.props.reviews.map((review) => {
      if (!review) return null;
      return (
        <li className='single-review' key={review.id}>
          <div className='single-review-user'>User {review.user_id}</div>
          <div className='single-review-content'>{review.review}</div>
        </li>
      )
    }
)

    return (
      <div className='spot-show-body'>
        <img className='spot-show-image' src={spot.img_url} />
        <div className='show-content'>
          <div className='spot-detail-show-page'>
            <h2 className='spot-show-header'>ENTIRE APARTMENT</h2>
            <div className='spot-show-title'>{spot.title}</div>
            <div className='icon-list-show-page'>
              <div className='icon-show-page'> <i className="fas fa-user-friends" /> {spot.guest} guest </div>
              <div className='icon-show-page'> <i className="fas fa-warehouse" />{spot.bedrooms} bedroom </div>
              <div className='icon-show-page'> <i className="fas fa-bed" />{spot.beds} bed </div>
              <div className='icon-show-page'> <i className="fas fa-bath" />{spot.bath} bath </div>
            </div>
            <div className='details-show-page'>{spot.details}</div>
            <ReviewFormContainer/>
            <div className='guest-review'>{reviews}</div>
          </div>
          <BookingFormContainer/>
        </div>



      </div>
    )
  }
}

export default SpotShow;
