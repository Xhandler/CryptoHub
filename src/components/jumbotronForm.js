import React, { Component } from 'react';
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap';
class JumbotronForm extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:8001');
    this.state = {
      connected: false,
      open: false,
      handleForm: (e) => {
        e.preventDefault();
        console.log('Button is clicked... sending data from frontend to backend.');
        const username = document.getElementById('username').value;
        const password = document.getElementById('passwprd').value
        this.socket.send(JSON.stringify({
          event: 'signUp',
          username: username,
          password: password
        }));
      }
    };
  }
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Search</Label>
          <Input type="text" id="username" refs="messageText" placeholder="Choose a username" />
          <Input type="text" id="password" refs="messageText" placeholder="Choose a password" />
          <Button className="btn-primary" type="button" onClick={this.state.handleForm}>
          </Button>
        </FormGroup>
      </Form>
    );
  }
}
export default JumbotronForm;
