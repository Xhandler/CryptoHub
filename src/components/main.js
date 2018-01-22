import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import axios from "axios";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }
  componentDidMount() {
   axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        console.log(posts);
      });
  }
  render() {
    return (
      <div>
        <Grid fluid={true}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} >
              <p>Area to place news sites</p>
              // componentDidMount axios request, set state, render return a map of state, assign id for each iteration and onClick function
              // which will grab id value and retrieve from data model, on click display on the right side of screen
              //
              //
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
