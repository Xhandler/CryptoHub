import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import NewsTable from './components/NewsTable';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <NewsTable/>
      </div>
    );
  }
}

export default App;
