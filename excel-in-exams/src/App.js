import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import Quotes from './Components/Quotes'
import Theme from './Components/Theme'
import Experience from './Components/Experience'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Theme/>
      <Quotes/>
      <Experience/>
    </div>
  );
}

export default App;
