import React from 'react'
import SearchBarContainer from './searchBar/SearchBarContainer';
import { Link, withRouter } from 'react-router-dom';


class Greeting extends React.Component {
  actionLogout () {
    this.props.logout()
  }

  sessionButton () {
    if (this.props.currentUser) {
      if (this.props.location.pathname === '/') {
        return <button className='nav-bar-loggedin' onClick={this.props.logout}>Log out </button>;
      } else {
        return (
          <button className='nav-bar-loggedin-black' onClick={this.props.logout}>Log out </button>

        )
      }
    } else {
      if (this.props.location.pathname === '/') {
        return (
          <div className='session-form'>
            <button className='nav-bar-loggedin' onClick={() => this.props.openModal('signup')}>Sign up</button>
            <button className='nav-bar-loggedin' onClick={() => this.props.openModal('login')}>Log in</button>
          </div>
        )
      } else {
        return (
          <div className='session-form'>
            <button className='nav-bar-loggedin-black' onClick={() => this.props.openModal('signup')}>Sign up</button>
            <button className='nav-bar-loggedin-black' onClick={() => this.props.openModal('login')}>Log in</button>
          </div>
        )
      }
    }
  }

  homepageView () {

    const loggedin = this.props.currentUser;
    return (
      <div className='homepage-container'>
        <div className='homepage'>
          <header className='navBar-homepage'>
            <a href='/'>
              <img className='logo' src={window.logo}/>
            </a>
            <div className='right-navBar-homepage'>
              { this.sessionButton.bind(this)() }
            </div>
          </header>
          <div className='title'>Book unique homes and experiences</div>
          <div className='searchBar-homepage'>
            <SearchBarContainer/>
          </div>
        </div>
        <div className="explore-section">
          <p id="explore">Explore AppBnb</p>
          <ul className="manhattan">
            <Link to="/spots">
              <li className="explor-manhattan">
                <img src="https://a0.muscache.com/im/pictures/15619021/d6cf8207_original.jpg?aki_policy=xx_large" />
                <p>TriBeCa</p>
              </li>
            </Link>

            <Link to="/spots">
              <li className="explor-manhattan">
                <img src="https://a0.muscache.com/im/pictures/27720090/20bd06e4_original.jpg?aki_policy=xx_large" />
                <p>Magic Manhattan with Rooftop</p>
              </li>
            </Link>

            <Link to="/spots">
              <li className="explor-manhattan">
                <img src="https://a0.muscache.com/im/pictures/12426057/2292b61c_original.jpg?aki_policy=xx_large" />
                <p>Loft Like Love Lots Look</p>
              </li>
            </Link>

            <Link to="/spots">
              <li className="explor-manhattan">
                <img src="https://a0.muscache.com/im/pictures/540fa60c-c8a5-4a72-82e6-fcc5985b99f7.jpg?aki_policy=x_large" />
                <p>Explore All</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    )
  }

  filterBar () {
    return (
      <div className='filterBar'>
        <button className='filterButton'>Dates</button>
        <button className='filterButton'>Guests</button>
        <button className='filterButton'>Home Types</button>
        <button className='filterButton'>Price</button>
        <button className='filterButton'>More filters</button>
      </div>
    )
  }

  viewPage () {
    const loggedin = this.props.currentUser;
    return (
      <div>
        <header className='navBar'>
          <div className='left-navBar-otherView'>
            <a href='/'>
              <img className='logo' src={window.logo}/>
            </a>
            <div className= 'searchBar'>
              <SearchBarContainer/>

            </div>
          </div>
          <div className='right-navBar-otherView'>
            { this.sessionButton.bind(this)() }
          </div>
        </header>
        { this.props.location.pathname === '/spots/' || this.props.location.pathname === '/spots' ? this.filterBar.bind(this)() : null }
      </div>
    )
  }

  render () {
    const homepage = this.props.location.pathname === '/';
    return (
      homepage ? this.homepageView.bind(this)() : this.viewPage.bind(this)()
    )
  }
}


export default withRouter(Greeting)
//line 50 - 51
// <button className='nav-bar-loggedin' onClick={() => this.props.history.push('/spots')}>Become a host</button>
// {
//   loggedin ? <button className='nav-bar-loggedin'>Messages</button> : null
// }
// <button className='nav-bar-loggedin'>Credit</button>
// <button className='nav-bar-loggedin'>Help</button>

//line 121-122
// <button className='nav-sign-up'>Become a host</button>
// {
//   loggedin ? <button className='nav-sign-up'>Messages</button> : null
// }
// <button className='nav-sign-up'>Credit</button>
// <button className='nav-sign-up'>Help</button>
