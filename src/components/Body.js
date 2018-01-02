import React, { Component } from 'react';
import jumbo from './jumbotron';
import NavBar from './NavBar';

class Body extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <jumbo/>
      </div>
    )
  }
}

export default Body
