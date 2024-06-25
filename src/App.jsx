import React from 'react';
import Nab from './components/navbar/Navbar';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Skill from './components/Skill/Skill';

const App = () => {
  return (
    <div>
      <Nab/>
      <Skill/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
