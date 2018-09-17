import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props
      .fetchSpots(this.state.search)
      .then(() =>
        this.props.history.push(`/spots/?search=${this.state.search}`)
      );
  }

  updateForm (field) {
    return e => {
      this.setState({ [field]: e.target.value });
      if (
        e.target.value.length > 1 &&
        (this.props.location.pathname === "/spots" ||
          this.props.location.search ||
          this.props.location.pathname === "/spots/")
      ) {
        this.props.fetchSpots(this.state.search);
      } else if (
        e.target.value.length === 0 &&
        this.props.location.pathname === "/spots"
      ) {
        this.props.fetchSpots();
      }
    };
  }

  render () {
    return (
      <div>
        <div className='title'>Book unique homes and experiences</div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <img className='search-icon' src="https://d30y9cdsu7xlg0.cloudfront.net/png/15028-200.png" />
          <input
            className="search-form-input"
            type="text"
            placeholder="Discover adventure..."
            value={this.state.search}
            onChange={this.updateForm('search')}
          />
          <input className="search-button" type='submit' value='Search'/>
        </form>

        <div className="explore-section">
          <p id="explore">Explore AppBnb</p>
          <ul className="manhattan">
            <Link to="/spots/?search=TribeCa">
              <li className="TriBeCa ">
                <img src="https://a0.muscache.com/im/pictures/15619021/d6cf8207_original.jpg?aki_policy=xx_large" />
                <p>TriBeCa</p>
              </li>
            </Link>

            <Link to="/spots/?search=MagicManhattan">
              <li className="MagicManhattan">
                <img src="https://a0.muscache.com/im/pictures/27720090/20bd06e4_original.jpg?aki_policy=xx_large" />
                <p>Magic Manhattan with Rooftop</p>
              </li>
            </Link>

            <Link to="/spots/?search=LoftLikeLove">
              <li className="ManhattanLux ">
                <img src="https://a0.muscache.com/im/pictures/12426057/2292b61c_original.jpg?aki_policy=xx_large" />
                <p>Loft.Like.Love.Lots.Look</p>
              </li>
            </Link>

            <Link to="/spots">
              <li className="explore-all">
                <img src="https://a0.muscache.com/im/pictures/540fa60c-c8a5-4a72-82e6-fcc5985b99f7.jpg?aki_policy=x_large" />
                <p>Explore All</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
