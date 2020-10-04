import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Albums from './components/Albums';

function App() {
  return (
    <div className='container'>
      <Router>
        <Albums />
      </Router>
    </div>
  );
}

export default App;
