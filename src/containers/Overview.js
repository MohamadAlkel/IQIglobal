import React, { Component } from 'react';
import  SignUpForm  from '../components/SignUpForm';
import backgroundOverview from '../style/img/backgroundOverview.png'
import bed from '../style/img/bed.png'
import bath from '../style/img/bath.png'
import area from '../style/img/area.png'
import signup from '../style/img/signup.png'
import {  Row, Col } from 'reactstrap';



export default class Overview extends Component {

  render(){
    return (
      <div className="overview">
        <div className="row"> 
          <div className="col-md-8 leftSide">
            <img src={backgroundOverview} alt="img"/>
            <h1 ><span>C</span>ondominium & Linked Houses in Penang</h1>
            <h2 >Boutique Condominium | Linked House</h2>
            <h3 >
               This is a mixed residential development which includes a 14-storey, 128 units boutique condominium and 7 units linked houses.
            </h3>
            <h1><span>O</span>verview</h1>
            <h3>
              It is a gated & guarded residential property project comprising a 14-storey boutique condo with a total of 128 units together with 7 units of 2-1/2 storey linked houses. It is developed at the center of Bukit Mertajam town in Penang.
            </h3>
            <h4>Starting from: MYR 244,000</h4>
                
            <Row>
              <Col className="oneItem"  lg="3">
                <p>
                  <img className="icon" src={bed} alt="icon"/>
                  3 - 3
                </p>
              </Col>
              <Col className="oneItem"  lg="3">
                <p>
                  <img className="icon" src={bath} alt="icon"/>
                  2 - 2
                </p>
              </Col>
              <Col className="oneItem"  lg="5">
                <p>
                  <img className="icon" src={area} alt="icon"/>
                  850 - 900 sqft
                </p>
              </Col>
            </Row>
          </div>

          <div id="Sign" className="col-md-4  ">
            <div className="warpForm">
                <SignUpForm showForm={this.showForm}/> 
            </div>   
          </div>
        </div>
        <a href="#Sign">
            <div className="goSignUp">
              <img src={signup} alt="icon"/>
            </div>
        </a>
      </div>
    );
  }
}