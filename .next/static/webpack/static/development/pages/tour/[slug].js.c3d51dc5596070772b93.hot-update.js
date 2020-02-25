webpackHotUpdate("static/development/pages/tour/[slug].js",{

/***/ "./components/tour/Map.js":
/*!********************************!*\
  !*** ./components/tour/Map.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



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

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
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
  };
});
mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.accessToken = "pk.eyJ1IjoiZGV2N2M0IiwiYSI6ImNrNnpxenl5eTB2bHczZW15MzBhM3dyODYifQ.Y7JGKPXPwGMFuSQSyQaZaw";
var geojson = {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-112.987418, 37.198125]
    },
    properties: {
      description: "Zion Canyon National Park"
    }
  }, {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-111.376161, 36.86438]
    },
    properties: {
      description: "Antelope Canyon"
    }
  }, {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-112.115763, 36.058973]
    },
    properties: {
      description: "Grand Canyon National Park"
    }
  }, {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-116.107963, 34.011646]
    },
    properties: {
      description: "Joshua Tree National Park"
    }
  }]
};

var Map = function Map() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(5),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      lng = _React$useState2[0],
      seLng = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(34),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      lat = _React$useState4[0],
      setLat = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(2),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      zoom = _React$useState6[0],
      setZoom = _React$useState6[1];

  var mapContainer;
  var map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.Map({
    container: mapContainer,
    scrollZoom: false,
    style: "mapbox://styles/mapbox/streets-v11",
    center: [state.lng, state.lat],
    zoom: state.zoom
  });
  map.on("move", function () {
    seLng(map.getCenter().lng.toFixed(4));
    setLat(map.getCenter().lat.toFixed(4));
    setZoom(map.getZoom().toFixed(2));
  });
  var bounds = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.LngLatBounds();
  geojson.features.forEach(function (marker) {
    var el = document.createElement("div");
    el.className = "marker";
    new mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.Marker({
      element: el,
      anchor: "bottom"
    }).setLngLat(marker.geometry.coordinates).addTo(map);
    new mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.Popup({
      offset: 30,
      closeOnClick: false
    }).setLngLat(marker.geometry.coordinates).setHTML("<p>" + marker.properties.description + "</p>").addTo(map);
    bounds.extend(marker.geometry.coordinates);
  });
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 50,
      right: 50
    }
  });
  map.on("load", function () {
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [[-112.987418, 37.198125], [-111.376161, 36.86438], [-112.115763, 36.058973], [-116.107963, 34.011646]]
          }
        }
      },
      layout: {
        "line-join": "round",
        "line-cap": "round"
      },
      paint: {
        "line-color": "#55c57a",
        "line-opacity": 0.6,
        "line-width": 3
      }
    });
  });
  return __jsx("div", {
    className: classes.Map,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("div", {
    ref: function ref(el) {
      return mapContainer = el;
    },
    className: classes.map,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Map); // import React, { Component } from "react";
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

/***/ })

})
//# sourceMappingURL=[slug].js.c3d51dc5596070772b93.hot-update.js.map