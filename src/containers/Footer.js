import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col sm="3">
              <h4>Company</h4>
              <p>About</p>
              <p>Buy a home</p>
              <p>Sell a home</p>
              <p>Join IQI</p>
              <p>Contact</p>
              <p>Feedback</p>
            </Col>

            <Col  sm="3">
              <h4>Group</h4>
              <p>IQI Concept</p>
              <p>BIQI Store</p>
              <p>MyKey</p>
              <p>Adapt</p>
              <p>Global Entrepreneurs <br/>Summit</p>
            </Col>

            <Col  sm="6">
              <h4>Contacts</h4>
              <Row>
                  <Col sm="6">
                    <p>+(60)3 7453 5155</p>
                    <p>info@iqiglobal.com</p>
                    <p>Block 6, Level 10, VSQ at PJ City Center, Petaling Jaya, 46200</p>
                  </Col>
                  <Col sm="6">
                    <p>+(971) 4 352 474 8</p>
                    <p>ahlan@iqiproperties.com</p>
                    <p>Al Mossa Tower 1, Level 3, 305 Sheikh Zayed Road, Dubai, UAE</p>
                  </Col>
              </Row>
            </Col>

          </Row>
        </Container>
      </div>
    );
  }
}

 












  
  

