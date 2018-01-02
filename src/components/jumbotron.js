import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

 class Jumbo extends Component {
   render() {
     return(
       <div>
         <Jumbotron>
         <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
          <p className="lead">
          </p>
         </Jumbotron>
       </div>
     );
   }
 }

export default Jumbo;
