import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import Errors from '../shared/errors';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.booking;
    this.handleSubmit = this.handleSubmit.bind(this);

  }

componentWillUnmount () {
  this.props.clearBookingErrors();
}


renderErrors () {
  // debugger

    return (
      <ul >
        {this.props.errors.map((error, idx) => {
          return <li className='booking-error' key={idx}>{error}</li>
        })}
      </ul>
    )
}

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = Object.assign({}, this.state, {
      spot_id: parseInt(this.props.match.params.spotId),
    });
    this.props.createBooking(booking)
      .then(() => {
        this.setState({ check_in: '', check_out: '', guests: 1 })
        this.props.clearBookingErrors();
      });
}





  render () {
    let dropdown = [];
    for (let i = 0; i < 16; i++) {
      dropdown.push(
        <option key={i} value={i + 1}> {i + 1} guests</option>
      )
    }

    let today = new Date();
    let todayDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000);
    todayDate = todayDate.toJSON().split('T')[0];

    return (
      <div className='booking-form-container'>
        <div className='booking-errors'>{this.renderErrors()}</div>
        <div className='booking-price'> $ {this.props.spot.cost} per night</div>
        <div className='booking-date-calendar'>
          <label>Dates</label>
          <br></br>
          <input className='booking-date' type='date' value={this.state.check_in}
            min={todayDate} onChange={this.update('check_in')} />
          <input className='booking-date' type='date' value={this.state.check_out}
            min={todayDate} onChange={this.update('check_out')} />
        </div>
        <div className='booking-guests'>
          <label>Guests</label>
          <br></br>
          <select className='booking-guests-selector' onChange={this.update('guests')}>{ dropdown }</select>
        </div>
        <button className='booking-button-box' onClick={this.handleSubmit} type='submit'>Book</button>
        <div className='booking-text'>You won’t be charged yet</div>
      </div>
    );
  }
}


export default withRouter(BookingForm);
