import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends React.Component {
  render() {
    var bounds = new this.props.google.maps.LatLngBounds();

    if (this.props.locations) {
      for (var i = 0; i < this.props.locations.length; i++) {
        bounds.extend(this.props.locations[i].loc);
      }

      return (
        <Map
          google={this.props.google}
          style={{
            width: "98%",
            height: "440px"
          }}
          bounds={bounds}
        >
          {this.props.locations.map(location => <Marker name={location.time} title={location.time} position={location.loc} />)}
        </Map>
      );
    } else {
      return null
    }
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAh3Dzo3-VFymDTgvQI28NVqfa0qOx05cc"
})(MapContainer);

