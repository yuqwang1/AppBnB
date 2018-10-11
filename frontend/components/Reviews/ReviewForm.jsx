import React from 'react';
import { withRouter } from 'react-router'
import Rating from 'react-rating';
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);

  }

  componentWillReceiveProps (prop) {
    if (prop.currentUser === null) {
      this.setState({
        review: '',
        rating: '',
        spot_id: this.props.match.params.spotId
      })
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    const spotId = this.props.match.params.spotId
    const review = Object.assign({}, this.state);
    this.props.createReview(review).then(() => {
      this.props.fetchSpot(spotId);
    });
    this.setState(
      {
        review: '',
        rating: 3,
        spot_id: spotId
      }
    )
  }

  updateErrors(e) {
    this.props.clearErrors();
  }

  update (field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  renderErrors () {
    // debugger
    return (
      <ul >
        {this.props.errors.map((error, idx) => {
          return <li className='review-error' key={idx}>{error}</li>
        })}
      </ul>
    )
  }

  createReview () {
    return (
      <div className='review-form'>
        <h1 className='review-title'>Review</h1>
        <form className='review-container' onSubmit={this.handleSubmit}>
          <div className='review-error'>
            { this.renderErrors() }
          </div>
          <div className='review-rating'>
            <Rating onChange={rating => this.state.rating}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
            />
          </div>

          <textarea
            className='review-content'
            value={this.state.review}
            onChange={this.update('review')}
            placeholder='leave your review here'
          />

          <button className='review-submit'>
            Create Review
          </button>
        </form>
      </div>
    )
}
  render () {
    const loggedin = this.props.currentUser;
    return (
       loggedin ? this.createReview.bind(this)() : null
    )
  }
}


export default withRouter(ReviewForm);
