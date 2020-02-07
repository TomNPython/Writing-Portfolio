import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Home from './components/Home'
import Writing from './components/Writing'
import Navbar from './components/Navbar'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={Home} />
      <Route path='/writing' component={Writing} />
      <Route path='/contact' component={Contact} />
    </Router>
  );
}


export default App;
