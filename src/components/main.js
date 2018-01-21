import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }
  componentDidMount() {
//    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }
  render() {
    return (
      <div>
        <Grid fluid={true}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} >
              <p>Area to place news sites</p>
              // componentWillMount
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
