import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';



export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    mapCenter: {
      lat: 33.5903,
      lng: -7.6188
    }
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    // const containerStyle = {
    //   width: '100%',
    //   height: '50vh'

    // }
    return (


      <Map
        google={this.props.google}
        containerStyle={{ height: '55vh', flex: '1' }}
        initialCenter={{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lng
        }}
        center={{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lng
        }}
      >
        <Marker
          position={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
        />


      </Map>










    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDY13PwVNBZvcR7FLpdjlgKTPwgzg5Tm4E')
})(MapContainer)

