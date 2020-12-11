import React from 'react';
import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Attribution from './components/Attribution';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Attribution />
    </div>
  );
}

export default App;
