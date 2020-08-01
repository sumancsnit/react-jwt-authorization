import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Navigation from './components/Navigation';
import { QuoteContext } from './contexts/QuoteContext';

import AuthForm from './components/AuthForm';

const App = () => {
  const [quotes, setQuotes] = useState([]);
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

          {/* <Route path='/quotes' component={QuoteList} /> */}
          <Route path='/login' render={(props) => <AuthForm role='login' />} />
          <Route
            path='/register'
            render={(props) => <AuthForm role='login' />}
          />
        </div>
      </QuoteContext.Provider>
    </Router>
  );
};

export default App;
