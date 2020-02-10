import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Home from './components/Home'
import Writing from './components/Writing'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Photography from './components/Photography';
import WebDev from './components/WebDev'

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={Home} />
      <Route path='/writing' component={Writing} />
      <Route path='/contact' component={Contact} />
      <Route path='/webdev' component={WebDev} />
      <Route path='/photography' component={Photography} />
    </Router>
  );
}


export default App;
