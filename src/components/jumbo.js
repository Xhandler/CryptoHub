import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import React, { Component } from 'react';
import JumbotronForm from './jumbotronForm';
class Jumbo extends Component {

  render() {
    return (
      <Jumbotron>
        <JumbotronForm/>
      </Jumbotron>
    );
  }
}
export default Jumbo;
