import React, { Component } from 'react';
import {Jumbotron, Form, FormGroup} from 'react-bootstrap/lib/Jumbotron';

 class Jumbo extends Component {
   constructor(props) {
     super(props);
     this.state = {
       message:'',
     };
   }
   handleChange(e) {
    console.log("Handle change function triggering.")
 }
   render() {
     return(
       <div>
         <Jumbotron>
            <Form>
              <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                <ControlLabel>Working example with validation</ControlLabel>
                <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange}/>
                <FormControl.Feedback />
              </FormGroup>
            </Form>
         </Jumbotron>
       </div>
     );
   }
 }

export default Jumbo;
