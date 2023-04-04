import React from 'react';
//import components
import Header from './components/Header';
import Help from './components/Help';
import WordReveal from './components/WordReveal';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Help />
      <div className='game-container'>
        <WordReveal />
      </div> 
    </div>
  );
}

export default App;
