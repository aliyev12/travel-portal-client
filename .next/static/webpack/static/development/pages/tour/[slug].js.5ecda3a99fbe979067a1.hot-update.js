webpackHotUpdate("static/development/pages/tour/[slug].js",{

/***/ "./components/tour/Map.js":
/*!********************************!*\
  !*** ./components/tour/Map.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

 // pk.eyJ1IjoiZGV2N2M0IiwiYSI6ImNrNnpxenl5eTB2bHczZW15MzBhM3dyODYifQ.Y7JGKPXPwGMFuSQSyQaZaw

mapbox_gl__WEBPACK_IMPORTED_MODULE_6___default.a.accessToken = "pk.eyJ1IjoiZGV2N2M0IiwiYSI6ImNrNnpxenl5eTB2bHczZW15MzBhM3dyODYifQ.Y7JGKPXPwGMFuSQSyQaZaw";
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

var Map =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Map, _Component);

  function Map(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Map);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Map).call(this, props));
    _this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_6___default.a.Map({
        container: this.mapContainer,
        scrollZoom: false,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
      });
      map.on("move", function () {
        _this2.setState({
          lng: map.getCenter().lng.toFixed(4),
          lat: map.getCenter().lat.toFixed(4),
          zoom: map.getZoom().toFixed(2)
        });
      });
      var bounds = new mapbox_gl__WEBPACK_IMPORTED_MODULE_6___default.a.LngLatBounds();
      geojson.features.forEach(function (marker) {
        var el = document.createElement("div");
        el.className = "marker";
        new mapbox_gl__WEBPACK_IMPORTED_MODULE_6___default.a.Marker({
          element: el,
          anchor: "bottom"
        }).setLngLat(marker.geometry.coordinates).addTo(map);
        new mapbox_gl__WEBPACK_IMPORTED_MODULE_6___default.a.Popup({
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
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        style: {
          position: "relative",
          height: "65rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx("div", {
        className: "sidebarStyle",
        style: {
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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Longitude: ", this.state.lng, " | Latitude: ", this.state.lat, " | Zoom:", " ", this.state.zoom)), __jsx("div", {
        ref: function ref(el) {
          return _this3.mapContainer = el;
        },
        className: "mapContainer",
        style: {
          position: "absolute",
          top: "0",
          right: "0",
          left: "0",
          bottom: "0",
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }));
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=[slug].js.5ecda3a99fbe979067a1.hot-update.js.map