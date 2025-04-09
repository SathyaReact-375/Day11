import React from 'react'
import { useState,useEffect } from 'react';
function Miniproject4() {
    const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = () => {
    fetch('https://qapi.vercel.app/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        const randomQuote = data[Math.floor(Math.random() * data.length)]; 
        setQuote(randomQuote.quote); 
        setAuthor(randomQuote.author); 
      })
      .catch((error) => console.error('Error fetching quote:', error));
  };

  useEffect(() => {
    fetchQuote();
    const intervalId = setInterval(fetchQuote, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
        <h1>Miniproject4</h1>
        <div style={{ fontSize: '20px', fontStyle: 'italic', marginBottom: '20px' }}>
        "{quote}"
      </div>
      <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
        - {author}
      </div>

    </div>
  )
}

export default Miniproject4