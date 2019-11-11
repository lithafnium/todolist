import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Sidebar from './Sidebar'; 
import Tasks from './Tasks'; 
import Header from './Header'; 
function App() {
  return (
    <div>
      <Header/>
        <div class = "container">

        <Sidebar/>
        <Tasks/>
    
      </div>
    </div>
  );
}

export default App;
