import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import { makeStyles } from "@material-ui/core/styles";
import "mapbox-gl/dist/mapbox-gl.css";

/*
.marker {
  background-image: url('../img/pin.png');
  background-size: cover;
  width: 32px;
  height: 40px;
  cursor: pointer;
}

.mapboxgl-popup {
  max-width: 25rem;
}

.mapboxgl-popup-content {
  text-align: center;
  font-family: 'Lato', sans-serif;
  padding: 1.5rem !important;
  font-size: 1.4rem;
  -webkit-box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15) !important;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15) !important;
}
*/

const useStyles = makeStyles(theme => ({
  Map: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5rem 0",
    width: "100%",
    position: "relative",
    height: "65rem"
  },
  map: {
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    bottom: "0",
    width: "100%"
  }
}));

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-112.987418, 37.198125]
      },
      properties: {
        description: "Zion Canyon National Park"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-111.376161, 36.86438]
      },
      properties: {
        description: "Antelope Canyon"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-112.115763, 36.058973]
      },
      properties: {
        description: "Grand Canyon National Park"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-116.107963, 34.011646]
      },
      properties: {
        description: "Joshua Tree National Park"
      }
    }
  ]
};

const Map = () => {
  const classes = useStyles();
  const [lng, seLng] = React.useState(5);
  const [lat, setLat] = React.useState(34);
  const [zoom, setZoom] = React.useState(2);
  const [map, setMap] = React.useState(null);
  const mapContainer = React.useRef(null);

  React.useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGV2N2M0IiwiYSI6ImNrNnpxenl5eTB2bHczZW15MzBhM3dyODYifQ.Y7JGKPXPwGMFuSQSyQaZaw";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [0, 0],
        zoom: 5
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  // const map = new mapboxgl.Map({
  //   container: mapContainer,
  //   scrollZoom: false,
  //   style: "mapbox://styles/mapbox/streets-v11",
  //   center: [state.lng, state.lat],
  //   zoom: state.zoom
  // });

  // map.on("move", () => {
  //   seLng(map.getCenter().lng.toFixed(4));
  //   setLat(map.getCenter().lat.toFixed(4));
  //   setZoom(map.getZoom().toFixed(2));
  // });

  // const bounds = new mapboxgl.LngLatBounds();

  // geojson.features.forEach(function(marker) {
  //   var el = document.createElement("div");
  //   el.className = "marker";

  //   new mapboxgl.Marker({
  //     element: el,
  //     anchor: "bottom"
  //   })
  //     .setLngLat(marker.geometry.coordinates)
  //     .addTo(map);

  //   new mapboxgl.Popup({
  //     offset: 30,
  //     closeOnClick: false
  //   })
  //     .setLngLat(marker.geometry.coordinates)
  //     .setHTML("<p>" + marker.properties.description + "</p>")
  //     .addTo(map);

  //   bounds.extend(marker.geometry.coordinates);
  // });

  // map.fitBounds(bounds, {
  //   padding: {
  //     top: 200,
  //     bottom: 150,
  //     left: 50,
  //     right: 50
  //   }
  // });

  // map.on("load", function() {
  //   map.addLayer({
  //     id: "route",
  //     type: "line",
  //     source: {
  //       type: "geojson",
  //       data: {
  //         type: "Feature",
  //         properties: {},
  //         geometry: {
  //           type: "LineString",
  //           coordinates: [
  //             [-112.987418, 37.198125],
  //             [-111.376161, 36.86438],
  //             [-112.115763, 36.058973],
  //             [-116.107963, 34.011646]
  //           ]
  //         }
  //       }
  //     },
  //     layout: {
  //       "line-join": "round",
  //       "line-cap": "round"
  //     },
  //     paint: {
  //       "line-color": "#55c57a",
  //       "line-opacity": 0.6,
  //       "line-width": 3
  //     }
  //   });
  // });

  return (
    <div className={classes.Map}>
      {/* <div
          className="sidebarStyle"
          style={{
            display: "inline-block",
            position: "absolute",
            top: 0,
            left: 0,
            margin: "12px",
            backgroundColor: "#404040",
            color: "#ffffff",
            zIndex: "1 !important",
            padding: "6px",
            fontWeight: "bold"
          }}
        >
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div> */}
      <div ref={el => (mapContainer.current = el)} className={classes.map} />
    </div>
  );
};

export default Map;

// import React, { Component } from "react";
// import mapboxgl from "mapbox-gl";
// // pk.eyJ1IjoiZGV2N2M0IiwiYSI6ImNrNnpxenl5eTB2bHczZW15MzBhM3dyODYifQ.Y7JGKPXPwGMFuSQSyQaZaw

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiZGV2N2M0IiwiYSI6ImNrNnpxenl5eTB2bHczZW15MzBhM3dyODYifQ.Y7JGKPXPwGMFuSQSyQaZaw";

// const geojson = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-112.987418, 37.198125]
//       },
//       properties: {
//         description: "Zion Canyon National Park"
//       }
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-111.376161, 36.86438]
//       },
//       properties: {
//         description: "Antelope Canyon"
//       }
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-112.115763, 36.058973]
//       },
//       properties: {
//         description: "Grand Canyon National Park"
//       }
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-116.107963, 34.011646]
//       },
//       properties: {
//         description: "Joshua Tree National Park"
//       }
//     }
//   ]
// };

// class Map extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lng: 5,
//       lat: 34,
//       zoom: 2
//     };
//   }

//   componentDidMount() {
//     const map = new mapboxgl.Map({
//       container: this.mapContainer,
//       scrollZoom: false,
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [this.state.lng, this.state.lat],
//       zoom: this.state.zoom
//     });

//     map.on("move", () => {
//       this.setState({
//         lng: map.getCenter().lng.toFixed(4),
//         lat: map.getCenter().lat.toFixed(4),
//         zoom: map.getZoom().toFixed(2)
//       });
//     });

//     const bounds = new mapboxgl.LngLatBounds();

//     geojson.features.forEach(function(marker) {
//       var el = document.createElement("div");
//       el.className = "marker";

//       new mapboxgl.Marker({
//         element: el,
//         anchor: "bottom"
//       })
//         .setLngLat(marker.geometry.coordinates)
//         .addTo(map);

//       new mapboxgl.Popup({
//         offset: 30,
//         closeOnClick: false
//       })
//         .setLngLat(marker.geometry.coordinates)
//         .setHTML("<p>" + marker.properties.description + "</p>")
//         .addTo(map);

//       bounds.extend(marker.geometry.coordinates);
//     });

//     map.fitBounds(bounds, {
//       padding: {
//         top: 200,
//         bottom: 150,
//         left: 50,
//         right: 50
//       }
//     });

//     map.on("load", function() {
//       map.addLayer({
//         id: "route",
//         type: "line",
//         source: {
//           type: "geojson",
//           data: {
//             type: "Feature",
//             properties: {},
//             geometry: {
//               type: "LineString",
//               coordinates: [
//                 [-112.987418, 37.198125],
//                 [-111.376161, 36.86438],
//                 [-112.115763, 36.058973],
//                 [-116.107963, 34.011646]
//               ]
//             }
//           }
//         },
//         layout: {
//           "line-join": "round",
//           "line-cap": "round"
//         },
//         paint: {
//           "line-color": "#55c57a",
//           "line-opacity": 0.6,
//           "line-width": 3
//         }
//       });
//     });
//   }

//   // render() {
//   //   return (
//   //     <div>
//   //       <div
//   //         ref={el => (this.mapContainer = el)}
//   //         className="mapContainer"
//   //         style={{
//   //           position: "absolute",
//   //           top: "0",
//   //           right: "0",
//   //           left: "0",
//   //           bottom: "0"
//   //         }}
//   //       />
//   //     </div>
//   //   );
//   // }

//   render() {
//     return (
//       <div
//         style={{
//           position: "relative",
//           height: "65rem"
//         }}
//       >
//         <div
//           className="sidebarStyle"
//           style={{
//             display: "inline-block",
//             position: "absolute",
//             top: 0,
//             left: 0,
//             margin: "12px",
//             backgroundColor: "#404040",
//             color: "#ffffff",
//             zIndex: "1 !important",
//             padding: "6px",
//             fontWeight: "bold"
//           }}
//         >
//           <div>
//             Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
//             {this.state.zoom}
//           </div>
//         </div>
//         <div
//           ref={el => (this.mapContainer = el)}
//           className="mapContainer"
//           style={{
//             position: "absolute",
//             top: "0",
//             right: "0",
//             left: "0",
//             bottom: "0",
//             width: "100%"
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default Map;
