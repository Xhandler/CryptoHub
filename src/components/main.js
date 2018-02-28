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
      activeLink: [],
      connected: false,
      open: false,
    };
  }
  handleClick = (e) => {
   console.log(e.currentTarget.dataset.id );
 }
  componentDidMount() {
    this.socket.onopen = () => {
      this.socket.send(JSON.stringify({
        event: 'scrape',
      }));
    };
    this.socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      switch(data.event) {
       case 'scrape':
         this.setState({
           linkTitle: data.linkTitle,
         });
       }
      }
    }
  render() {
    let feed = this.state.linkTitle;
    return (
          <Row className='news'>
            <Col xs={12} sm={12} md={6} lg={6}>
            {feed.map((linkPlusTitle, i) => <li data-id={i} onClick={this.handleClick}>{linkPlusTitle.title}<br/><a href={linkPlusTitle.link}>{linkPlusTitle.link}</a></li>)}
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <p>Area to display currently active links</p>
            </Col>
          </Row>
    );
  }
}

export default Main;
