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
