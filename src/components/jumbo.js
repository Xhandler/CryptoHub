import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import React, { Component } from 'react';
import JumbotronForm from './jumbotronForm';
import logIn from './logIn';

class Jumbo extends Component {
  render() {
    return (
      <Jumbotron>
        <JumbotronForm/>
        </logIn isLoggedIn={false}>
      </Jumbotron>
    );
  }
}

export default Jumbo;
