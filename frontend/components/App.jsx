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
    <Route path='/' component={ GreetingContainer } />
    <Route path='/spots' component={ SpotSearchContainer } />
  </div>
)

export default App
