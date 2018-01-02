import React, { Component } from 'react';
import Jumbo from './jumbotron';
import NavBar from './NavBar';

class Body extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Jumbo/>
      </div>
    )
  }
}

export default Body
