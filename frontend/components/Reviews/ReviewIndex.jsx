import React from 'react';
import { withRouter } from 'react-router'
import Rating from 'react-rating';
import ReviewItemIndex from 'ReviewItemIndex';

class ReviewForm extends React.Component {

  render () {
    const reviewItems = this.props.reviews.map((review) => (
      <ReviewIndexItem
        key={review.id}
        review={review}
        currentUser={this.props.currentUser}
        createReview={this.props.createReview}
        deleteReview={this.props.deleteReview}/>
    ))
    return (
      <div className='review-box'>
        <span id='reviews-title'>Reviews</span>
        <span>{reviewItems}</span>
        <span><ReviewFormContainer/></span>
      </div>
    );
  }
}

export default withRouter(ReviewIndex);
