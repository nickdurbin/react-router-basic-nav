import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Home exact path="/" component={Home}/>
    <About path="/About" component={About}/>
    <Contact path="/Contact" component={Contact}/>
  </div>
);

export default App;
