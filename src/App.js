import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';

import './App.css';

import Navigation from './components/Navigation';
import { QuoteContext } from './contexts/QuoteContext';

import AuthForm from './components/AuthForm';
import QuotesList from './components/QuotesList';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  // const [loggedIn, setLoggedIn] = useState(
  //   localStorage.getItem('token') ? true : false
  // );
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('token') ? true : false
  );

  return (
    <Router>
      <QuoteContext.Provider
        value={{ quotes, setQuotes, loggedIn, setLoggedIn }}
      >
        <div className='App'>
          <Navigation />

          <PrivateRoute path='/quotes' component={QuotesList} />
          <Route
            path='/login'
            render={(props) => <AuthForm role='login' {...props} />}
          />
          <Route
            path='/register'
            render={(props) => <AuthForm role='login' {...props} />}
          />
        </div>
      </QuoteContext.Provider>
    </Router>
  );
};

export default App;
