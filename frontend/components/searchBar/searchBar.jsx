import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Link to={"/"}>Logo</Link>

        <h2>Search bar</h2>
        <Link to='/'>Become a host</Link><br />
        <Link to='/'>Earn credit</Link><br />
        <Link to={'/'}>Help</Link><br />
        <Link to={'/signup'}>Sign up</Link><br />
        <Link to='/login'>Log in</Link>
      </header>
    )
  }
}
