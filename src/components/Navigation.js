import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuoteContext } from '../contexts/QuoteContext';

const Navigation = () => {
  const { loggedIn, setLoggedIn } = useContext(QuoteContext);

  const logout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <div className='main-nav'>
      {loggedIn ? (
        <Link onClick={logout}>Log Out</Link>
      ) : (
        <>
          <Link to='/login'> Log in </Link>
          <Link to='/register'> Sign Up </Link>
        </>
      )}
      <Link to='/quotes'> Quotes List </Link>
    </div>
  );
};

export default Navigation;
