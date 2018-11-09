import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Select from 'react-select'

const options = [
  { value: 'Private Bedroom Manhattan', label: 'Private Bedroom Manhattan' },
  { value: 'TriBeCa 2500 Sq Ft w/ Priv Elevator', label: 'TriBeCa 2500 Sq Ft w/ Priv Elevator' },
  { value: 'Saloon room with dock access', label: 'Saloon room with dock access' },
  { value: 'Cozy 15 mins Manhattan& 10 Mins LGA', label: 'Cozy 15 mins Manhattan& 10 Mins LGA' },
  { value: 'Manhattan brownstone with renovation potential', label: 'Manhattan brownstone with renovation potential' },
  { value: 'Magic Manhattan with Rooftop', label: 'Magic Manhattan with Rooftop' },
  { value: 'Manhattan Lux Loft.Like.Love.Lots.Look', label: 'Manhattan Lux Loft.Like.Love.Lots.Look' },
  { value: 'AMAZINGLY LOCATED ONE BEDROOM, NEAR CENTRAL PARK', label: 'AMAZINGLY LOCATED ONE BEDROOM, NEAR CENTRAL PARK' },
  { value: 'LUXURY HUGE 2BR DUPLEX NEAR TRAIN w PATIO OASIS', label: 'LUXURY HUGE 2BR DUPLEX NEAR TRAIN w PATIO OASIS' },
  { value: 'Soho 2 Bedroom Private Terrace', label: 'Soho 2 Bedroom Private Terrace' },
  { value: 'Times Square Luxury Place', label: 'Times Square Luxury Place' },
  { value: 'Beautiful affordable 4 Bedrooms in Manhattan', label: 'Beautiful affordable 4 Bedrooms in Manhattan' },
  { value: 'Luxury Chelsea Loft 4Bedrooms/2Bath Sleep 10', label: 'Luxury Chelsea Loft 4Bedrooms/2Bath Sleep 10' },
  { value: 'Luxury midtown mini mansion! Sleeps 16!', label: 'Luxury midtown mini mansion! Sleeps 16!' },
  { value: 'Manhattan\'s Best Deal!', label: 'Manhattan\'s Best Deal!' },
  { value: 'Affordable, Private, Simple & Clean NYC Flat!', label: 'Affordable, Private, Simple & Clean NYC Flat!' },
]
class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props
      .fetchSpots({ title: this.state.search })
      .then(() =>
        this.props.history.push(`/spots/?search=${this.state.search}`)
      );
  }

  updateForm (field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }


  render () {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div className='search-icon-container'>
            <div className='search-icon'><i className="fas fa-search fa-lg"></i></div>
          </div>
          <input
            className="search-form-input"
            type="text"
            placeholder="Anywhere Manhattan"
            value={this.state.search}
            onChange={this.updateForm('search')}
          />
          <input className="search-button" type='submit' value='Search'/>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);


// <Select
//   className="search-form-input"
//   type="text"
//   options={options}
//   placeholder='Anywhere Manhattan'
//   />
