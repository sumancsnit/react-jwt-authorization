import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { QuoteContext } from '../contexts/QuoteContext';

const QuotesList = () => {
  const { quotes, setQuotes } = useContext(QuoteContext);

  useEffect(() => {
    axiosWithAuth()
      .get('https://quotes-db-mike.herokuapp.com/quotes')
      .then((res) => setQuotes(res.data))
      .catch((err) => console.log(err));
  }, [setQuotes]);

  return (
    <div className='quotes-list'>
      {quotes.map((item) => (
        <div className='quote-card' key={item.id}>
          <h3>{item.speaker}</h3>
          <p>{item.quote}</p>
        </div>
      ))}
    </div>
  );
};

export default QuotesList;
