import React from 'react';
import Header from './components/Header';
import Dropdown from './components/Dropdown'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Dropdown />
    </div>
  );
}

export default App;
