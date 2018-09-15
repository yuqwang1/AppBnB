import React from 'react'
import { withRouter } from 'react-router'
// import { Link } from 'react-router-dom'
class SessionForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      error: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
    this.props.clearErrors()
  }

  handleSubmit (e) {
    e.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.processForm(user).then(this.props.closeModal)
  }

  renderErrors () {
    // debugger
    return (
      <ul >
        {this.props.errors.map((error, idx) => {
          return <li className='list-error' key={idx}>{error}</li>
        })}
      </ul>
    )
  }

  update (field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  render () {
    // debugger
    const email = () => {
      return (
        <div className='signup-area'>
          <input className='signup-input' type='text' placeholder='Email Address' value={this.state.email} onChange={this.update('email')}></input>
          <i className="far fa-envelope"></i>
        </div>
      )
    }

    return (
      <div className='signup-form'>
        <div className='signup-errror'>{this.renderErrors()}</div>
        <button type='button' className="close-x" onClick={this.props.closeModal}>&times;</button>
        <form onSubmit={this.handleSubmit}>
          <div className='signup-area'>
            <input className='signup-input' type='text' placeholder='Username' value={this.state.username} onChange={this.update('username')}/>
            <i className="far fa-user"></i>
          </div>

          {this.props.formType === 'Sign up' ? email() : null }

          <div className='signup-area'>
            <input className='signup-input' type='password' placeholder='Password' value={this.state.password} onChange={this.update('password')}/>
            <i className="fas fa-unlock"></i>
          </div>
          <button className='signup-button' type='submit'>{this.props.formType}</button>
          <div className='otherForm'>
            {this.props.status_text}
            {this.props.otherForm}
          </div>
        </form>
      </div>
    )
  }
}
export default withRouter(SessionForm)
