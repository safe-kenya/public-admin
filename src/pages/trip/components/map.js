import React from "react";
// import { Map, Marker, GoogleMap } from "google-map-react";
import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';

// class MapContainer extends React.Component {
//   state = {
//     zoom: {},
//     center: {}
//   }
//   componentDidMount() {

//     // if (this.props.locations && this.props.locations[0]) {
//     //   const bounds = {
//     //     ne: {
//     //       lat: this.props.locations[0].lat,
//     //       lng: this.props.locations[0].lng
//     //     },
//     //     sw: {
//     //       lat: this.props.locations[this.props.locations.length].lat,
//     //       lng: this.props.locations[this.props.locations.length].lng
//     //     }
//     //   };

//     //   const size = {
//     //     width: 640, // Map width in pixels
//     //     height: 380, // Map height in pixels
//     //   };

//     //   const { center, zoom } = fitBounds(bounds, size);

//     //   this.setState({ center, zoom })
//     // }
//   }
//   render() {
//     var bounds = new this.props.google.maps.LatLngBounds();

//     if (this.props.locations) {
//       for (var i = 0; i < this.props.locations.length; i++) {
//         bounds.extend(this.props.locations[i].loc);
//       }

//       return (
//         <Map
//           google={this.props.google}
//           style={{
//             width: "640px",
//             height: "440px"
//           }}
//           zoom={this.state.zoom}
//           center={this.state.center}
//           position={this.props.locations[0].loc}
//           bounds={bounds}
//         >
//           {this.props.locations.map(location => <Marker name={location.time} title={location.time} position={location.loc} />)}
//         </Map>
//       );
//     } else {
//       return null
//     }
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAh3Dzo3-VFymDTgvQI28NVqfa0qOx05cc"
// })(MapContainer);


const getMapBounds = (map, maps, locations) => {
  const bounds = new maps.LatLngBounds();

  this.props.locations.forEach((location) => {
    bounds.extend(
      new maps.LatLng(location.lat, location.lng),
    );
  });
  return bounds;
};

const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds);
    });
  });
};

const apiIsLoaded = (map, maps, locations) => {
  if (map) {
    const bounds = getMapBounds(map, maps, locations);
    map.fitBounds(bounds);
    bindResizeListener(map, maps, bounds);
  }
};

const GoogleMap = props => (
  <GoogleMapReact
    // zoom={props.zoom}
    // center={props.center}
    bootstrapURLKeys={{
      key: "AIzaSyAh3Dzo3-VFymDTgvQI28NVqfa0qOx05cc",
      language: 'en',
    }}
    yesIWantToUseGoogleMapApiInternals
    onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, props.locations)}
  >
    {props.children}
  </GoogleMapReact>
);

export default GoogleMap