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

  handleSubmit (e) {
    e.preventDefault()
    const spotId = parseInt(this.props.match.params.spotId)
    const review = Object.assign({}, this.state);
    this.props.createReview(review);
  }

  update (field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  render () {
    return (

      <div className='review-form'>
        <h1>Reviews</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Rating onChange={rating => this.state.rating}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
            />
          </div>

          <label>
            <br></br>
            <textarea
              className='revew-content'
              value={this.state.review}
              onChange={this.update('review')}
              placeholder='leave your review here'
            />
          </label>
          <button className='review-submit'>
            Create Review
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(ReviewForm);
