import React from 'react';
import './App.css';
import Navbar from './Navbar';
import data from './data';
import Cards from './Cards';

function App() {
  const cards = data.map(item => {
    return(
      <Cards 
      key = {item.id}
      loc = {item.location.toUpperCase()}
      {...item}

      />
    )
  })
  return (
    <div>
      <Navbar />
      <div className='card'>
        {cards}
      </div>
    </div>
  );
}

export default App;
