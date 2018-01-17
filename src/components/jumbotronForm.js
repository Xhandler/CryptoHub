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
        console.log('Button is clicked... sending data from from.');
        const text = document.getElementById('exampleEmail').value;
        this.socket.send(text);
      }
    };
  }
  componentDidMount() {
    this.socket.onopen = () => {
      this.socket.send('Socket message sent to back end from React jumbotronForm rendering');
      this.setState({
        connected: true
      });
    };
  }
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Search</Label>
          <Input type="text" id="exampleEmail" refs="messageText" placeholder="Choose news feed to add..." />
          <Button className="btn-primary" type="button" onClick={this.state.handleForm}>
          Submit!
          </Button>
        </FormGroup>
      </Form>
    );
  }
}
export default JumbotronForm;
