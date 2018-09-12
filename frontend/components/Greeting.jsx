import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Welcome {this.props.currentUser.username}</h1>
          <button onClick={this.props.logout}>log out </button>
      </div>
      );
    } else {
      return(
        <div className='homepage'>
          <Link to='/signup'>Sign Up</Link>
          <br></br>
          <Link to='/login'>Log In</Link>
          <br></br>
        </div>
      );
    }
  }
}
export default Greeting;
