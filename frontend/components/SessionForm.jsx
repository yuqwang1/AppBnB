import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error) => {
          return {error};
        })}
      </ul>
    );
  }

  update(field){
    return (e) => {
    this.setState({[field]: e.currentTarget.value});
    };
  }

  render(){
    const email = () => {
      return (
      <div>
        <label>Email Address</label>
        <input type='text' placeholder='fill in your email address' value={this.state.email} onChange={this.update('email')}></input>
      </div>
      );
    }
    if (!this.props.currentUser) {
      return (
      <div className='signup-form-container'>
        <div className='signup-form'>
        <h4 >{this.props.status_text} {this.props.navLink}</h4>
        <form onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input type='text' placeholder='fill in your username' value={this.state.username} onChange={this.update('username')}></input>
        {this.props.formType === 'SIGN UP' ? email() : null }
        <label>Password</label>
        <input type='text' placeholder='fill in your password' value={this.state.password} onChange={this.update('password')}></input>
        <button>{this.props.formType}</button>
        <Link to="/">Exit</Link>
      </form>
      </div>
    </div>
  );
} else{
  return(
    <div></div>
  )
}
}

}

export default withRouter(SessionForm);
