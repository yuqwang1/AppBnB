import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
      if (e.target.value.length > 1) {
        this.props.fetchSpots({ title: this.state.search });
      } else if (e.target.value.length === 0) {
        this.props.fetchSpots();
      }
    };
  }

  filterBar () {
    return (
      <div className='filterBar'>
        <button className='filterButton'>Dates</button>
        <button className='filterButton'>Guests</button>
        <button className='filterButton'>Home Types</button>
        <button className='filterButton'>Price</button>
        <button className='filterButton'>More filters</button>
      </div>
    )
  }

  render () {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <img className='search-icon' src="https://d30y9cdsu7xlg0.cloudfront.net/png/15028-200.png" />
          <input
            className="search-form-input"
            type="text"
            placeholder="Anywhere Manhattan"
            value={this.state.search}
            onChange={this.updateForm('search')}
          />
          <input className="search-button" type='submit' value='Search'/>
        </form>
        { this.props.location.pathname === '/spots/' || this.props.location.pathname === '/spots' ? this.filterBar.bind(this)() : null }
      </div>
    );
  }
}

export default withRouter(SearchBar);
