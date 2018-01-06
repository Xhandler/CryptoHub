import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

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
          <input type="text" placeholder="Search a news source..." onSubmit={this.handleChange} />
         </Jumbotron>
       </div>
     );
   }
 }

export default Jumbo;
