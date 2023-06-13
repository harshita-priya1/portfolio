import React from 'react';
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Projects from './components/Projects';
import Techs from './components/Techs';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Techs/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
