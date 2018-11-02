import React from 'react'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../../app/assets/stylesheets/api/react_dates_overrides.css'
import GreetingContainer from './Greeting/GreetingContainer'
import SpotSearchContainer from './Spots/SpotSearchContainer'
import { Provider } from 'react-redux'
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx'
import { Route,
  Redirect,
  Switch,
  Link,
  HashRouter } from 'react-router-dom'
import Modal from './modal/modal'
import SpotShowContainer from './Spots/SpotShowContainer'

const App = () => (
  <div>
    <Modal/>
    <Route path='/' component={ GreetingContainer } />
    <Route exact path='/spots' component={ SpotSearchContainer } />
    <Route path='/spots/:spotId' component={ SpotShowContainer } />
    <Route path='/spots/:spotId' component={ Modal }/>
  </div>
)

export default App
