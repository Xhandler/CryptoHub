import React, { Component } from 'react';
import Websocket from 'react-websocket';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

class Jumbo extends Component {
 constructor(props) {
     // makes this refer to this component
     super(props);
     // set local state
     this.state = {
         date: new Date()
     };
 }
 render() {
   return(
     <div>
       <Jumbotron>
        <p>{this.state.date}</p>
       </Jumbotron>
     </div>
   );
 }
}

export default Jumbo;
