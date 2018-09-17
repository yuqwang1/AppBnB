import React from 'react'
import GreetingContainer from './GreetingContainer'
import SpotSearchContainer from './SpotSearchContainer'
import { Provider } from 'react-redux'
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx'
import { Route,
  Redirect,
  Switch,
  Link,
  HashRouter } from 'react-router-dom'
import LoginFormContainer from './LoginFormContainer'
import SignupFormContainer from './SignupFormContainer'
import Modal from './modal/modal'

const App = () => (
  <div>
    <Modal />
    <div className='homepage'>
      <header className='navBar'>
        <div className='top-left-navBar'>
          <a herf='/'>
            <img className='logo' src={window.logo}/>
          </a>
        </div>
      </header>
      <Route exact path='/' component={ GreetingContainer } />
    </div>
    <Route exact path='/spots' component={ SpotSearchContainer } />
  </div>
)

export default App
