import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <ul className='list-cards'>
        <Card theme="dark" displayBtn="block" />
        <Card theme="dark" displayBtn="none" />
        <Card theme="light" displayBtn="block" />
        <Card theme="light" displayBtn="none" />
      </ul>
    </div>
  );
}

export default App;
