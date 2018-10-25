import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash/omit';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import Star from '../star';



class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { check_in: '', check_out: '', guest: 1, focusedInput: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
      this.props.clearBooking();
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
        this.setState({ check_in: '', check_out: '', guests: 1, focusedInput: '' })
        this.props.clearBookingErrors();
      });
}

renderBooking () {
    const bookings = this.props.bookings;
    if (!bookings.length) {
      return;
    } else if(bookings.length !== 0) {
      return (
        <ul>
          <li>Congratulations, You successfully </li>
          <li>  booked {this.props.spot.title} </li>
        </ul>
      )
    }
}

render () {

    let score = 0;
    this.props.reviews.forEach(review => score += review.rating);
    score = score / this.props.reviews.length || 0;

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
      // debugger
      <div className='booking-form'>
        <div className='booking-form-container'>
          <div className='booking-errors'>{this.renderErrors()}</div>
          <div className='booking-success'>{this.renderBooking()}</div>
          <div className='price-tag'>
            <strong className='booking-price'> ${this.props.spot.cost}</strong>
            per night
          </div>
          <div className='booking-form-review'>
            <Star rating = {score} />
            {this.props.reviews.length}
          </div>
          <label className='label-date'>Dates</label>
          <div className='booking-date-calendar'>
            <br></br>

            <input className='dateclassone placeholderclass' type='date' value={this.state.check_in}
              min={todayDate} onChange={this.update('check_in')} placeholder='Check in'/>
            <input className='dateclasstwo placeholderclass' type='date' value={this.state.check_out}
              min={todayDate} onChange={this.update('check_out')} placeholder='Check out' />
          </div>
          <div className='booking-guests'>
            <label className='label-date'>Guests</label>
            <br></br>
            <select className='booking-guests-selector' onChange={this.update('guests')}>{ dropdown }</select>
          </div>
          <button className='booking-button-box' onClick={this.handleSubmit} type='submit'>Book</button>
          <div className='booking-text'>You won’t be charged yet</div>
          <div className='booking-footer'>
            <div className='booking-footer-text'>
              <span className='booking-footer-text-header'> This home is on people’s minds.</span>
              <br></br>
              <span className='booking-footer-text-content'>It’s been viewed 500+ times in the past week</span>
            </div>
            <div className='bulb-img'></div>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(BookingForm);

// <DateRangePicker
//   startDateId='startDate'
//   endDateId='endDate'
//   startDate={this.state.check_in}
//   endDate={this.state.check_out}
//   onDatesChange={({ startDate, endDate }) => {
//     this.setState({ startDate, endDate });
//   }}
//   focusedInput={this.state.focusedInput}
//   onFocusChange={focusedInput => this.setState({ focusedInput })}
//   startDatePlaceholderText="Check In"
//   endDatePlaceholderText="Check Out"
//   />
// <DateRangePicker
//   startDate={this.state.check_in}
//   startDateId="booking-form-checkin"
//   endDate={this.state.check_out}
//   endDateId="booking-from-checkout"
//   onDatesChange={({ startDate, endDate }) => this.setState({ check_in: startDate, check_out: endDate })}
//   focusedInput={this.state.focusedInput}
//   onFocusChange={focusedInput => this.setState({ focusedInput })}
//   startDatePlaceholderText="Check in"
//   endDatePlaceholderText="Check out"
//   showClearDates={true}
//   hideKeyboardShortcutsPanel={true}
//   />
