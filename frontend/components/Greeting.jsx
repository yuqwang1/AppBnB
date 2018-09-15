import React from 'react'
// import { Link } from 'react-router-dom'

class Greeting extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  actionLogout () {
    this.props.logout()
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <div className='top-right-navBar'>
            <button className='nav-bar-loggedin'>Become a host</button>
            <br></br>
            <button className='nav-bar-loggedin'>Messages</button>
            <br></br>
            <button className='nav-bar-loggedin'>Credit</button>
            <br></br>
            <button className='nav-bar-loggedin'>Help</button>
            <br></br>
            <button className='nav-bar-loggedin' onClick={this.props.logout}>Log out </button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className='top-right-navBar'>
            <button className='nav-sign-up'>Become a host</button>
            <br></br>
            <button className='nav-sign-up'>Earn credit</button>
            <br></br>
            <button className='nav-sign-up'>Help</button>
            <br></br>
            <button className='nav-sign-up' onClick={() => this.props.openModal('signup')}>Sign up</button>
            <br></br>
            <button className='nav-sign-up' onClick={() => this.props.openModal('login')}>Log in</button>
            <br></br>
          </div>
        </div>
      )
    }
  }
}

export default Greeting
