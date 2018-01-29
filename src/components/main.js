import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import cheerio from 'cheerio';

class Main extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:8001');
    this.state = {
      message: '',
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
      this.socket.onmessage = (e) => {
        console.log(e.data);
        this.setState({
          connected: true,
          data: 'hello'
        });
      }
    };
  }
  render() {
    return (
      <div>
        <Grid fluid={true}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <p>Area to place news sites</p>

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
