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
      // if log in is successful, then we need to rerender this page based on that user...
      // for user page <Route path="/" component={settingsPage}/>
      // <Route settings page path="/" component={userPage}/>
    </div>
  </Router>
)

export default App;
