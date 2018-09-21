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
import Modal from './modal/modal'
import SpotShowContainer from './SpotShowContainer'

const App = () => (
  <div>
    <Modal />
    <Route path='/' component={ GreetingContainer } />
    <Route exact path='/spots' component={ SpotSearchContainer } />
    <Route path='/spots/:spotId' component={ SpotShowContainer } />
  </div>
)

export default App
