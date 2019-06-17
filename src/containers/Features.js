import React, { Component } from 'react';
import {  Row, Col } from 'reactstrap';
import swim from '../style/img/swim.png'
import cam from '../style/img/cam.png'
import gymnasium from '../style/img/gymnasium.png'
import security from '../style/img/security.png'



export default class Features extends Component {

  render(){
    return (
      <div className="features">
        <h1><span>P</span>roject Features</h1>
        <h3>
           Comes with full-fledged facilities which include a swimming pool, children wading pool, gymnasium, poolside BBQ area, clubhouse, sauna, children playground, nursery, lushed landscape, multi purpose hall, meeting room, 24-hours security and 24-hours surveillance system.
        </h3>

        <Row>
          <Col className="oneItem"  md="3">
            <img className="icon" src={swim} alt="icon"/>
            <p>Swimming Pool</p> 
          </Col>
          <Col className="oneItem"  md="3">
            <img className="icon" src={cam} alt="icon"/>
            <p>24-Hour Surveillance System</p> 
          </Col>
          <Col className="oneItem"  md="3">
            <img className="icon" src={gymnasium} alt="icon"/>
            <p> Gymnasium</p> 
          </Col>
          <Col className="oneItem"  md="3">
            <img className="icon" src={security} alt="icon"/>
            <p>24-Hour Security </p>
          </Col>
        </Row>
        
      </div>
    );
  }
}