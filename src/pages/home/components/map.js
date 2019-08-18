import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends React.Component {
  render() {
    var points = [
      { lat: 42.02, lng: -77.01 },
      { lat: 42.03, lng: -77.02 },
      { lat: 41.03, lng: -77.04 },
      { lat: 42.05, lng: -77.02 }
    ];
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }
    return (
      <Map
        google={this.props.google}
        style={{
          width: "98%",
          height: "440px"
        }}
        initialCenter={{
          lat: 42.39,
          lng: -72.52
        }}
        bounds={bounds}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBVKogNXwpz4ELNu1JzvwYw6AlsNeyfZso"
})(MapContainer);

// export default props => (
//   <div>
//     <MapContainer/>
//   </div>
// );
