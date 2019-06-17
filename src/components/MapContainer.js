import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

// styles for map
const ttt=[
  {
      "featureType": "all",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#ed9334",
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "gamma": 0.01
          },
          {
              "lightness": 20
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "saturation": -31
          },
          {
              "lightness": -33
          },
          {
              "weight": 2
          },
          {
              "gamma": 0.8
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": 30
          },
          {
              "saturation": 30
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
          {
              "saturation": 20
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": 20
          },
          {
              "saturation": -20
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": 10
          },
          {
              "saturation": -30
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "saturation": 25
          },
          {
              "lightness": 25
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "lightness": -20
          }
      ]
  }
]


export  class MapContainer  extends Component {
  
  render(){
    var bounds = new this.props.google.maps.LatLngBounds();
    return (
      <div className="warpMap">
        <Map google={this.props.google}
            initialCenter={{
            lat: 3.158843,
            lng: 101.710917
            }}
            style={{width: '100vw', height: '60vh', position: 'flex'}}
            styles={ttt}
            className={'map '}
            zoom={14}
        >
            <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'SOMA'}
                position={{lat: 3.158843, lng: 101.710917}}
                bounds={bounds}
            /> 
        </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyBrMs9nT6Nsze9D9mEzv_tl57lKzsz46dA")
})(MapContainer )