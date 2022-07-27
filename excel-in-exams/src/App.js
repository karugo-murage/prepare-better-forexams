import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import Quotes from './Components/Quotes'
import Theme from './Components/Theme'
import Experience from './Components/Experience'
import Comment from './Components/Comment'
import Footer from './Components/Footer'
import Exam from './Components/Exam'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Theme/>
      <Quotes/>
      <Experience/>
      <Comment/>
      <Footer/>
      <Exam/>
    </div>
  );
}

export default App;
