import React, { Component } from 'react';
import MapContainer  from "../components/MapContainer"


export default class Location extends Component {
  
  render(){
    return (
      <>
        <div  className="features pb-0">
          <h1><span>L</span>ocation</h1>
          <h3>
            Comes with full-fledged facilities which include a swimming pool, children wading pool, gymnasium, poolside BBQ area, clubhouse, sauna, children playground, nursery, lushed landscape, multi purpose hall, meeting room, 24-hours security and 24-hours surveillance system.
          </h3>  
        </div>
        <div className="p-0" >
          <MapContainer />
        </div>
      </>
    );
  }
}
