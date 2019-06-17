import React, { Component } from 'react';
import Slider from "react-slick";
import dataa from '../style/img/dataa.jpg'
import a from '../style/img/a.jpg'
import b from '../style/img/b.jpg'
import c from '../style/img/c.jpg'
import d from '../style/img/d.jpg'
import e from '../style/img/e.jpg'
import f from '../style/img/f.png'
import points from '../style/img/points.png'
import '../style/ProjectDetails.scss';


export default class GalleryImg extends Component {
  next=()=> {
    this.slider.slickNext();
  }
  previous=()=> {
    this.slider.slickPrev();
  }
 
    render(){

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      variableWidth: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            centerMode: false,
          }
        }
      ]
    }
 
    return (
      <div className="gallery">
        <h1><span>G</span>allery </h1>
        
        <button className="prev" onClick={this.previous}>«</button>
        <button className="next" onClick={this.next} >»</button>
      
        <Slider ref={c => (this.slider = c)} {...settings}>            
              <div className="warpImg">
                  <img src={dataa} alt="img"/>
                  <img className="points" src={points} alt="img"/>
                  <p>Architectural</p>
              </div>
              <div className="warpImg" >
                  <img src={a} alt="img"/>
                  <img className="points" src={points} alt="img"/>
                  <p>Architectural</p>
              </div>
              <div className="warpImg">
                  <img src={b} alt="img"/>
                  <img className="points" src={points} alt="img"/>
                  <p>Interior Design</p>
              </div>
              <div className="warpImg">
                  <img src={c} alt="img" />
                  <img className="points" src={points} alt="img"/>
                  <p>Interior Design</p>
              </div>
              <div className="warpImg">
                  <img src={d} alt="img"/>
                  <img className="points" src={points} alt="img"/>
                  <p>Interior Design</p>
              </div>
              <div className="warpImg">
                  <img src={e} alt="img"/>
                  <img className="points" src={points} alt="img"/>
                  <p>Interior Design</p>
              </div>
              <div className="warpImg">
                  <img src={f} alt="img"/>
                  <img className="points" src={points} alt="img"/>
                  <p>Information</p>
              </div>
        </Slider> 
      </div>
    );
  }
}