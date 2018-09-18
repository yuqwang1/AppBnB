import React from 'react'
import SearchBarContainer from './searchBar/SearchBarContainer';
import { Link, withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom'

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
      <div className='homepage'>
        <header className='navBar'>
          <a href='/'>
            <img className='logo' src={window.logo}/>
          </a>
          <button className='nav-bar-loggedin'>Become a host</button>
          {
            loggedin ? <button className='nav-bar-loggedin'>Messages</button> : null
          }
          <button className='nav-bar-loggedin'>Credit</button>
          <button className='nav-bar-loggedin'>Help</button>
          { this.sessionButton.bind(this)() }
        </header>
        <SearchBarContainer/>

        <div className="explore-section">
          <p id="explore">Explore AppBnb</p>
          <ul className="manhattan">
            <Link to="/spots/?search=TribeCa">
              <li className="TriBeCa ">
                <img src="https://a0.muscache.com/im/pictures/15619021/d6cf8207_original.jpg?aki_policy=xx_large" />
                <p>TriBeCa</p>
              </li>
            </Link>

            <Link to="/spots/?search=MagicManhattan">
              <li className="MagicManhattan">
                <img src="https://a0.muscache.com/im/pictures/27720090/20bd06e4_original.jpg?aki_policy=xx_large" />
                <p>Magic Manhattan with Rooftop</p>
              </li>
            </Link>

            <Link to="/spots/?search=LoftLikeLove">
              <li className="ManhattanLux ">
                <img src="https://a0.muscache.com/im/pictures/12426057/2292b61c_original.jpg?aki_policy=xx_large" />
                <p>Loft Like Love Lots Look</p>
              </li>
            </Link>

            <Link to="/spots">
              <li className="explore-all">
                <img src="https://a0.muscache.com/im/pictures/540fa60c-c8a5-4a72-82e6-fcc5985b99f7.jpg?aki_policy=x_large" />
                <p>Explore All</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    )
  }

  viewPage () {
    const loggedin = this.props.currentUser;
    return (
      <div>
        <header className='navBar'>
          <a href='/'>
            <img className='logo' src={window.logo}/>
          </a>
          <div className= 'searchBar'>
            <SearchBarContainer/>
          </div>

          <button className='nav-sign-up'>Become a host</button>
          {
            loggedin ? <button className='nav-sign-up'>Messages</button> : null
          }
          <button className='nav-sign-up'>Credit</button>
          <button className='nav-sign-up'>Help</button>
          { this.sessionButton.bind(this)() }
        </header>
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


// <div className='homepage'>
//   <header className='navBar'>
//     <a href='/'>
//       <img className='logo' src={window.logo}/>
//     </a>
//     <div className= 'searchBar'>
//       { homepage ? null : <SearchBarContainer/> }
//     </div>
//     <button className='nav-bar-loggedin'>Become a host</button>
//     {
//       loggedin ? <button className='nav-bar-loggedin'>Messages</button> : null
//     }
//     <button className='nav-bar-loggedin'>Credit</button>
//     <button className='nav-bar-loggedin'>Help</button>
//     { this.sessionButton.bind(this)() }
//   </header>
//   { this.bottomView.bind(this)() }
//   { homepage ? <SearchBarContainer/> : null }
// </div>
//
// render () {
//   if (this.props.currentUser) {
//     return (
//       <div>
//         <div className='top-right-navBar'>
//           <button className='nav-bar-loggedin'>Become a host</button>
//           <br></br>
//           <button className='nav-bar-loggedin'>Messages</button>
//           <br></br>
//           <button className='nav-bar-loggedin'>Credit</button>
//           <br></br>
//           <button className='nav-bar-loggedin'>Help</button>
//           <br></br>
//           <button className='nav-bar-loggedin' onClick={this.props.logout}>Log out </button>
//         </div>
//         <SearchBarContainer/>
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         <div className='top-right-navBar'>
//           <button className='nav-sign-up'>Become a host</button>
//           <br></br>
//           <button className='nav-sign-up'>Earn credit</button>
//           <br></br>
//           <button className='nav-sign-up'>Help</button>
//           <br></br>
//           <button className='nav-sign-up' onClick={() => this.props.openModal('signup')}>Sign up</button>
//           <br></br>
//           <button className='nav-sign-up' onClick={() => this.props.openModal('login')}>Log in</button>
//           <br></br>
//         </div>
//         <SearchBarContainer/>
//       </div>
//     )
//   }
// }
