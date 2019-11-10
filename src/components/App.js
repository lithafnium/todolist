import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Sidebar from './Sidebar'; 
import Tasks from './Tasks'; 

function App() {
  return (
    <div class = "container">
        <Sidebar/>
        <Tasks/>
        <Sidebar/>
    
    </div>
  );
}

export default App;
