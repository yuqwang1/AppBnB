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
    <div>
      <header className='navBar'>
        <a href='/' className='top-left-navBar'>
          <img className='logo' src={window.logo}></img>
        </a>
        <GreetingContainer />
      </header>
      <Route exact path="/" component={ SpotSearchContainer } />
    </div>
  </div>
)

export default App
