import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const { KEY: apiKey } = process.env

class MapContainer extends React.Component {
  render() {
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < this.props.locations.length; i++) {
      bounds.extend(this.props.locations[i]);
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
        {this.props.locations.map(loc => <Marker key={loc.id} name={loc.time} title={loc.time} position={loc.loc} />)}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey
})(MapContainer);

// export default props => (
//   <div>
//     <MapContainer/>
//   </div>
// );
