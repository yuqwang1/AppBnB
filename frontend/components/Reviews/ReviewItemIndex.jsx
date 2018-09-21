import React from 'react';
import { connect } from 'react-router-dom';

const Review = (review) => {
  // const guests = props.spot.guest
    render() {
   return (
     <div className='review-index'>
       <ul>
         <li id='review-username'>{this.props.review.reviewer_username}</li>
         <li id='review-body'>{this.props.review.review}</li>
       </ul>
     </div>
   );
  }
}


export default withRouter(ReviewIndexItem);
