import React from 'react';
import GreetingContainer from './GreetingContainer';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import { Route,
  Redirect,
  Switch,
  Link,
  HashRouter } from 'react-router-dom';
import LoginFormContainer from './LoginFormContainer';
import SignupFormContainer from './SignupFormContainer';

const App = () => (
  <div>
    <header>
    <h1>App BnB</h1>
    <GreetingContainer />
    </header>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
