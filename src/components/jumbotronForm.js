import React, { Component } from 'react';
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap';
class JumbotronForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Search</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Choose news feed to add..." />
        </FormGroup>
      </Form>
    );
  }
}
export default JumbotronForm;
