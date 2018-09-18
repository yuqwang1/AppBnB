import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const SpotIndexItem = props => {
  const guests = props.spot.guest
  return (
    <Link to={`spots/${props.spot.id}`}>
      <img className='spot-img' src={props.spot.img_url}></img>
      <div className='spot-title'>{props.spot.title}</div>

        {guests ? <div className='spot-details'>{props.spot.guest} guests</div> :
        <div className='spot-details'>{props.spot.guest} guest</div>  }

      <div className='spot-cost'>${props.spot.cost} per night Free cancellation </div>
    </Link>
  )
}

export default withRouter(SpotIndexItem);
