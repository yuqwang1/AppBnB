import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { DateRangePicker } from 'react-dates';
import Star from '../star';



class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { check_in: null, check_out: null, guest: 1, focusedInput: null };
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


    const booking = {
      check_in: this.state.check_in._d,
      check_out: this.state.check_out._d,
      guest: this.state.guest,
      spot_id: parseInt(this.props.match.params.spotId),
    }
    this.props.createBooking(booking)
      .then(() => {
        this.setState({ check_in: null, check_out: null, guests: 1, focusedInput: null })
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
          <div className='booking-date'>
            <label className='label-date'>Dates</label>
            <div className='booking-date-calendar'>
              <DateRangePicker
                startDate={this.state.check_in}
                startDateId="chick_in"
                endDate={this.state.check_out}
                endDateId="check_out"
                onDatesChange={({ startDate, endDate }) => this.setState({ check_in: startDate, check_out: endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
                startDatePlaceholderText="Check In"
                endDatePlaceholderText="Check Out"
                showClearDates={true}
                hideKeyboardShortcutsPanel={true}
                />
              <br></br>
            </div>
          </div>
          <div className='booking-guests'>
            <label className='label-guest'>Guests</label>
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

// const booking = Object.assign({}, this.state, {
//   spot_id: parseInt(this.props.match.params.spotId),
// });
// <input className='dateclassone placeholderclass' type='date' value={this.state.check_in}
//   min={todayDate} onChange={this.update('check_in')} placeholder='Check in'/>
// <input className='dateclasstwo placeholderclass' type='date' value={this.state.check_out}
//   min={todayDate} onChange={this.update('check_out')} placeholder='Check out' />
