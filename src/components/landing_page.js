import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron className="jumbotron">
          <h2>Welcome To Free-Voting-App</h2>
          <p>Create custom polls with live results</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
        <Row className="show-grid">
          <Col xs={6} md={4} className="landing-content"><span><h3>Live Vote Tracking</h3></span><p>content</p></Col>
          <Col xs={6} md={4} className="landing-content"><span><h3>Works Anywhere</h3></span><p>content</p></Col>
          <Col xsHidden md={4} className="landing-content"><span><h3>Integrate Social</h3></span><p>content</p></Col>
        </Row>
      </div>
    );
  }
}
