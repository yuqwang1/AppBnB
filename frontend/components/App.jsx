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
    <div className='homepage'>
      <header className='navBar'>
        <h1 className='top-left-navBar'>
        <img className='logo' src='/Users/zhaoxinrui/Desktop/logo.png'>
        </img>
        </h1>
        <GreetingContainer />
      </header>
    </div>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;