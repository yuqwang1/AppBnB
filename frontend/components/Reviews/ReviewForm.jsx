import React from 'react';
import { withRouter } from 'react-router';
import ReactStars from 'react-stars';
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentWillUnmount () {
    this.props.clearErrors();
  }



  handleCreateSubmit (e) {
    e.preventDefault()
    const spotId = this.props.match.params.spotId
    const review = Object.assign({}, this.state);
    this.props.createReview(review)
      .then(() => { this.props.fetchSpot(spotId) })
      .then(() => { this.props.closeModal() })
      .then(() => { window.scrollBy(0, 400) })
      .then(() => { this.props.clearErrors() })
  }

  handleEditSubmit (e) {
    e.preventDefault()
    const spotId = this.props.match.params.spotId
    const review = Object.assign({}, this.state);
    this.props.updateReview(review)
      .then(() => { this.props.fetchSpot(spotId) })
      .then(() => { this.props.closeModal() })
      .then(() => { this.props.clearErrors() })
  }

  handleRating (e) {
    this.setState({
      rating: e
    })
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
    return (
      <ul >
        {this.props.errors.map((error, idx) => {
          return <li className='review-error' key={idx}>{error}</li>
        })}
      </ul>
    )
  }

  createReview () {
    const createFormType = this.props.formType
    return (
      <div className='review-form'>
        <button type='button' className="close-x" onClick={ this.props.closeModal }>&times;</button>
        <div className='review-errors'>
          { this.renderErrors() }
        </div>
        <div className='review-title'>Tell us about your trip</div>
        <div className='review-rating'>
          <ReactStars
            color2='#008489'
            value={ this.state.rating }
            onChange={ this.handleRating }
            half = { false }
            size={ 24 }
          />
        </div>
        <form className='review-container' onSubmit={createFormType === 'createReview' ? this.handleCreateSubmit : this.handleEditSubmit}>

          <textarea
            className='review-content'
            value={this.state.review}
            onChange={this.update('review')}
            placeholder='leave your review here'
          />

          <button className='review-submit'>
            {createFormType === 'createReview' ? 'Create your review' : 'Edit your review'}
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
