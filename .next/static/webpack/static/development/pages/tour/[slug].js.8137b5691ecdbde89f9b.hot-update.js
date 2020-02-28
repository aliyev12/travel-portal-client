webpackHotUpdate("static/development/pages/tour/[slug].js",{

/***/ "./components/tour/Map.tsx":
/*!*********************************!*\
  !*** ./components/tour/Map.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");








var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/Map.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



var Map =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Map, _Component);

  function Map() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Map);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Map)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      viewport: {
        width: "100vw",
        height: "100vh",
        latitude: 41.5868,
        longitude: -93.625,
        zoom: 13
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Map, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        mapStyle: "mapbox://styles/mapbox/streets-v9",
        scrollZoom: false,
        mapboxApiAccessToken: "pk.eyJ1IjoiZGV2N2M0IiwiYSI6ImNrNnpxenl5eTB2bHczZW15MzBhM3dyODYifQ.Y7JGKPXPwGMFuSQSyQaZaw",
        onViewportChange: function onViewportChange(viewport) {
          return _this2.setState({
            viewport: viewport
          });
        }
      }, this.state.viewport, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Map); // import React, { Component } from "react";
// import mapboxgl from "mapbox-gl"; ReferenceError: self is not defined
// // pk.eyJ1IjoiZGV2N2M0IiwiYSI6ImNrNnpxenl5eTB2bHczZW15MzBhM3dyODYifQ.Y7JGKPXPwGMFuSQSyQaZaw
// mapboxgl.accessToken =
//   "pk.eyJ1IjoiZGV2N2M0IiwiYSI6ImNrNnpxenl5eTB2bHczZW15MzBhM3dyODYifQ.Y7JGKPXPwGMFuSQSyQaZaw";
// // const geojson = {
// //   type: "FeatureCollection",
// //   features: [
// //     {
// //       type: "Feature",
// //       geometry: {
// //         type: "Point",
// //         coordinates: [-112.987418, 37.198125]
// //       },
// //       properties: {
// //         description: "Zion Canyon National Park"
// //       }
// //     },
// //     {
// //       type: "Feature",
// //       geometry: {
// //         type: "Point",
// //         coordinates: [-111.376161, 36.86438]
// //       },
// //       properties: {
// //         description: "Antelope Canyon"
// //       }
// //     },
// //     {
// //       type: "Feature",
// //       geometry: {
// //         type: "Point",
// //         coordinates: [-112.115763, 36.058973]
// //       },
// //       properties: {
// //         description: "Grand Canyon National Park"
// //       }
// //     },
// //     {
// //       type: "Feature",
// //       geometry: {
// //         type: "Point",
// //         coordinates: [-116.107963, 34.011646]
// //       },
// //       properties: {
// //         description: "Joshua Tree National Park"
// //       }
// //     }
// //   ]
// // };
// class Map extends Component {
//   mapRef = React.createRef();
//   constructor(props) {
//     super(props);
//     this.state = {
//       lng: 5,
//       lat: 34,
//       zoom: 1.5
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
//       const { lng, lat } = map.getCenter();
//       this.setState({
//         lng: lng.toFixed(4),
//         lat: lat.toFixed(4),
//         zoom: map.getZoom().toFixed(2)
//       });
//     });
//     // const bounds = new mapboxgl.LngLatBounds();
//     // geojson.features.forEach(function(marker) {
//     //   var el = document.createElement("div");
//     //   el.className = "marker";
//     //   new mapboxgl.Marker({
//     //     element: el,
//     //     anchor: "bottom"
//     //   })
//     //     .setLngLat(marker.geometry.coordinates)
//     //     .addTo(map);
//     //   new mapboxgl.Popup({
//     //     offset: 30,
//     //     closeOnClick: false
//     //   })
//     //     .setLngLat(marker.geometry.coordinates)
//     //     .setHTML("<p>" + marker.properties.description + "</p>")
//     //     .addTo(map);
//     //   bounds.extend(marker.geometry.coordinates);
//     // });
//     // map.fitBounds(bounds, {
//     //   padding: {
//     //     top: 200,
//     //     bottom: 150,
//     //     left: 50,
//     //     right: 50
//     //   }
//     // });
//     // map.on("load", function() {
//     //   map.addLayer({
//     //     id: "route",
//     //     type: "line",
//     //     source: {
//     //       type: "geojson",
//     //       data: {
//     //         type: "Feature",
//     //         properties: {},
//     //         geometry: {
//     //           type: "LineString",
//     //           coordinates: [
//     //             [-112.987418, 37.198125],
//     //             [-111.376161, 36.86438],
//     //             [-112.115763, 36.058973],
//     //             [-116.107963, 34.011646]
//     //           ]
//     //         }
//     //       }
//     //     },
//     //     layout: {
//     //       "line-join": "round",
//     //       "line-cap": "round"
//     //     },
//     //     paint: {
//     //       "line-color": "#55c57a",
//     //       "line-opacity": 0.6,
//     //       "line-width": 3
//     //     }
//     //   });
//     // });
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
//     const { lng, lat, zoom } = this.state;
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
//           <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
//         </div>
//         <div
//           // ref={el => (this.mapContainer = el)}
//           ref={this.mapRef}
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
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// import React, { Component } from "react";
// import mapboxgl from "mapbox-gl";
// import { makeStyles } from "@material-ui/core/styles";
// import "mapbox-gl/dist/mapbox-gl.css";
// import ReactMapGL from 'react-map-gl';
// /*
// .marker {
//   background-image: url('../img/pin.png');
//   background-size: cover;
//   width: 32px;
//   height: 40px;
//   cursor: pointer;
// }
// .mapboxgl-popup {
//   max-width: 25rem;
// }
// .mapboxgl-popup-content {
//   text-align: center;
//   font-family: 'Lato', sans-serif;
//   padding: 1.5rem !important;
//   font-size: 1.4rem;
//   -webkit-box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15) !important;
//   box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15) !important;
// }
// */
// const useStyles = makeStyles(theme => ({
//   Map: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     margin: "5rem 0",
//     width: "100%",
//     position: "relative",
//     height: "65rem"
//   },
//   map: {
//     position: "absolute",
//     top: "0",
//     right: "0",
//     left: "0",
//     bottom: "0",
//     width: "100%"
//   }
// }));
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
// const Map = () => {
//   const classes = useStyles();
//   // const [lng, seLng] = React.useState(5);
//   // const [lat, setLat] = React.useState(34);
//   // const [zoom, setZoom] = React.useState(2);
//   const [map, setMap] = React.useState(null);
//   const mapContainer = React.useRef(null);
//   React.useEffect(() => {
//     mapboxgl.accessToken =
//       "pk.eyJ1IjoiZGV2N2M0IiwiYSI6ImNrNnpxenl5eTB2bHczZW15MzBhM3dyODYifQ.Y7JGKPXPwGMFuSQSyQaZaw";
//     const initializeMap = ({ setMap, mapContainer }) => {
//       const map = new mapboxgl.Map({
//         container: mapContainer.current,
//         style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
//         center: [0, 0],
//         zoom: 5
//       });
//       map.on("load", () => {
//         setMap(map);
//         map.resize();
//       });
//     };
//     if (!map) initializeMap({ setMap, mapContainer });
//   }, [map]);
//   // const map = new mapboxgl.Map({
//   //   container: mapContainer,
//   //   scrollZoom: false,
//   //   style: "mapbox://styles/mapbox/streets-v11",
//   //   center: [state.lng, state.lat],
//   //   zoom: state.zoom
//   // });
//   // map.on("move", () => {
//   //   seLng(map.getCenter().lng.toFixed(4));
//   //   setLat(map.getCenter().lat.toFixed(4));
//   //   setZoom(map.getZoom().toFixed(2));
//   // });
//   // const bounds = new mapboxgl.LngLatBounds();
//   // geojson.features.forEach(function(marker) {
//   //   var el = document.createElement("div");
//   //   el.className = "marker";
//   //   new mapboxgl.Marker({
//   //     element: el,
//   //     anchor: "bottom"
//   //   })
//   //     .setLngLat(marker.geometry.coordinates)
//   //     .addTo(map);
//   //   new mapboxgl.Popup({
//   //     offset: 30,
//   //     closeOnClick: false
//   //   })
//   //     .setLngLat(marker.geometry.coordinates)
//   //     .setHTML("<p>" + marker.properties.description + "</p>")
//   //     .addTo(map);
//   //   bounds.extend(marker.geometry.coordinates);
//   // });
//   // map.fitBounds(bounds, {
//   //   padding: {
//   //     top: 200,
//   //     bottom: 150,
//   //     left: 50,
//   //     right: 50
//   //   }
//   // });
//   // map.on("load", function() {
//   //   map.addLayer({
//   //     id: "route",
//   //     type: "line",
//   //     source: {
//   //       type: "geojson",
//   //       data: {
//   //         type: "Feature",
//   //         properties: {},
//   //         geometry: {
//   //           type: "LineString",
//   //           coordinates: [
//   //             [-112.987418, 37.198125],
//   //             [-111.376161, 36.86438],
//   //             [-112.115763, 36.058973],
//   //             [-116.107963, 34.011646]
//   //           ]
//   //         }
//   //       }
//   //     },
//   //     layout: {
//   //       "line-join": "round",
//   //       "line-cap": "round"
//   //     },
//   //     paint: {
//   //       "line-color": "#55c57a",
//   //       "line-opacity": 0.6,
//   //       "line-width": 3
//   //     }
//   //   });
//   // });
//   return (
//     <div className={classes.Map}>
//       {/* <div
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
//         </div> */}
//       <div ref={el => (mapContainer.current = el)} className={classes.map} />
//     </div>
//   );
// };
// export default Map;

/***/ })

})
//# sourceMappingURL=[slug].js.8137b5691ecdbde89f9b.hot-update.js.map