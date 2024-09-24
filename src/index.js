import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState, useEffect} from "react";
import './index.css';

const quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" }

];

const App = () =>{

  const [quote, setQuote] = useState({text:"", author: ""});

  const getRandomQuote = () => {
      const randomIndx = Math.floor(Math.random()*quotes.length);
      return quotes[randomIndx];
  }

  const loadQuotes = () => {
    const newQuote = getRandomQuote();
    setQuote(newQuote);
  }

  useEffect(() => {
    loadQuotes();
  }, []);

  return(
    <div className='App'>
      <div id='quote-box'>
        <div id='text'>{quote.text}</div>
        <div id='author'>{quote.author}</div>
        <button id="new-quote" className='btn btn-primary' onClick={loadQuotes}>New Quote</button>
      </div>

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
