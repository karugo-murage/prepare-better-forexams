import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import Quotes from './Components/Quotes'
import Theme from './Components/Theme'
import Experience from './Components/Experience'
import Comment from './Components/Comment'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Theme/>
      <Quotes/>
      <Experience/>
      <Comment/>
    </div>
  );
}

export default App;
