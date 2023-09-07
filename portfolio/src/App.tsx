import React from 'react';
import './App.css';
import Header from './components/Header';
import Top from './components/Top';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Top />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
