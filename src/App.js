import React from 'react';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Team from './components/Team';
import Index from './index.js';



import './App.css';

function App() {
  return (
    <div>
    <NavBar />
    <div className="container">
    <Team />
    </div>
    </div>
  );
}

export default App;
