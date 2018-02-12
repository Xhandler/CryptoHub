import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Main extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:8001');
    this.state = {
      linkTitle: [],
      connected: false,
      open: false,
    };
  }
  componentDidMount() {
    this.socket.onopen = () => {
      this.socket.send(JSON.stringify({
        event: 'scrape',
      }));
    };
    this.socket.onmessage = (e) => {
      console.log('Message sent to main component');
      const data = JSON.parse(e.data);
      console.log(data.linkTitle);
      switch(data.event) {
       case 'scrape':
         this.setState({
           linkTitle: data.linkTitle,
         });
     }
    }
  }
  render() {
    let combo = this.state.linkTitle;
    return (
      <div>
        <Grid fluid={true}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
            <div>
            {combo.map((linkPlusTitle) => <li key={linkPlusTitle.id}>{linkPlusTitle.title} <br/> {linkPlusTitle.link}</li>)}
            </div>
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
