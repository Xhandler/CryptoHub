import Jumbo from './jumbo';
import NavBar from './NavBar';
import Main from './main.js'
import React, { Component } from 'react';

class Mid extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Jumbo/>
        <Main/>
      </div>
    );
  }
}

export default Mid;
