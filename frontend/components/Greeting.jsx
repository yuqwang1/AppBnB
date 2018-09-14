import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  actionLogout(){
    this.props.logout()
  }

  render(){
    if (this.props.currentUser) {
      return (
      <div>
        <div className='top-right-navBar'>
          <Link to='/' className='nav-bar-loggedin'>Become a host</Link>
          <br></br>
          <Link to='/' className='nav-bar-loggedin'>Messages</Link>
          <br></br>
          <Link to='/' className='nav-bar-loggedin'>Credit</Link>
          <br></br>
          <Link to='/' className='nav-bar-loggedin'>Help</Link>
          <br></br>
          <div className='nav-bar-loggedin' onClick={this.props.logout}>Log out </div>
        </div>
      </div>
    );
  } else {
    return(
      <div>
        <div className='top-right-navBar'>
          <Link to='/' className='nav-sign-up'>Become a host</Link>
          <br></br>
          <Link to='/' className='nav-sign-up'>Earn credit</Link>
          <br></br>
          <Link to='/' className='nav-sign-up'>Help</Link>
          <br></br>
          <div className='nav-sign-up' onClick={() => this.props.openModal('signup')}>Sign up</div>
          <br></br>
          <div className='nav-sign-up' onClick={() => this.props.openModal('login')}>Log in</div>
          <br></br>
        </div>
      </div>
    );
  }
}
}


export default Greeting;
