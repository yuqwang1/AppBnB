import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  actionLogout(){
    this.props.logout().then(this.props.history.push('/'))
  }

  render(){
    if (this.props.currentUser) {
      return (
        <div className='.top-right-navBar'>

          <Link to='/' className='nav-host-loggedin'>Become a host</Link>
          <br></br>
          <Link to='/' className='nav-messages-loggedin'>Messages</Link>
          <br></br>
          <Link to='/' className='nav-earn-credit-loggedin'>Credit</Link>
          <br></br>
          <Link to='/' className='nav-help-loggedin'>Help</Link>
          <br></br>
          <Link to='/' className='logout' onClick={this.actionLogout.bind(this)}>Log out </Link>
      </div>
      );
    } else {
      return(
        <div >
          <div className='top-right-navBar'>
            <Link to='/' className='nav-host'>Become a host</Link>
            <br></br>
            <Link to='/' className='nav-earn-credit'>Earn credit</Link>
            <br></br>
            <Link to='/' className='nav-help'>Help</Link>
            <br></br>
            <Link to='/signup' className='nav-sign-up'>Sign Up</Link>
            <br></br>
            <Link to='/login' className='nav-log-in'>Log In</Link>
          <br></br>
          </div>
        </div>
      );
    }
  }
}
export default Greeting;
