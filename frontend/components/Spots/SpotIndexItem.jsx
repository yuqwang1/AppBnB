import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const SpotIndexItem = props => {
  return (
    <div className='img-box'>
      <Link to={`/spots/${props.spot.id}`}>
        <img className='spot-img' src={props.spot.img_url}></img>
        <div className='spot-title'>{props.spot.title}</div>
        <div className='spot-guest'>{props.spot.guest} guests · </div>
        <div className='spot-cost'>${props.spot.cost} per night · Free cancellation </div>

      </Link>
    </div>
  )
}

export default withRouter(SpotIndexItem);
