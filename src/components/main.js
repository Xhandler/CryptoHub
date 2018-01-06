import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

 class Main extends Component {
   constructor(props) {
     super(props);
     this.state = {
       message:'',
     };
   }
   render() {
     return(
       <div>
        <Grid>
          <Row>
            <Col>

            </Col>
            <Col>

            </Col>
          </Row>
        </Grid
       </div>
     );
   }
 }

export default Main;
