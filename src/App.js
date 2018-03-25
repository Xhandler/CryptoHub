import React, { Component } from 'react';
import Mid from './components/Mid.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const App = () => (
  <Router>
  <div>
    <Route path="/" component={Mid}/>
  </div>
  </Router>
)

export default App;
