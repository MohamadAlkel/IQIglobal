import React, { Component } from 'react';
import GalleryImg from '../containers/GalleryImg'
import Location from '../containers/Location'
import Features from '../containers/Features'
import Overview from '../containers/Overview'
import Footer from '../containers/Footer'
import '../style/ProjectDetails.scss';


export default class ProjectDetails extends Component {

  render(){
    return (
      <>
        <Overview/>
        <Features/>
        <GalleryImg />
        <Location/>
        <Footer/>
      </>
    );
  }
}