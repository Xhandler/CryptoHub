import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Main extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:8001');
    this.state = {
      title: false,
      link: false,
      connected: false,
      open: false,
      data: {}
    };
  }
  componentDidMount() {
    this.socket.onopen = () => {
      this.socket.send(JSON.stringify({
        event: 'scrape',
      }));
    };
    this.socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      console.log(data);
      switch(data.event) {
       case 'scrape':
         this.setState({
           link: data.link,
           title: data.title,
         });
     }
    }
  }
  render() {
    return (
      <div>
        <Grid fluid={true}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <p>Filler to place news sites</p>

            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <p>Area to display currently active links</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Main;
