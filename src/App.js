import React, { Component } from 'react';
import landingPage from './pages/landingPage.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const App = () => (
  <Router>
    <div>
      <Route path="/" component={landingPage}/>
    </div>
  </Router>
)

export default App;
