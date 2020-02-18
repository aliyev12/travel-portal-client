webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/Spotlights.tsx":
/*!****************************************!*\
  !*** ./components/home/Spotlights.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Place__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Place */ "./node_modules/@material-ui/icons/Place.js");
/* harmony import */ var _material_ui_icons_Place__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Place__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/CalendarToday */ "./node_modules/@material-ui/icons/CalendarToday.js");
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_EmojiFlagsRounded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/EmojiFlagsRounded */ "./node_modules/@material-ui/icons/EmojiFlagsRounded.js");
/* harmony import */ var _material_ui_icons_EmojiFlagsRounded__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EmojiFlagsRounded__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_PeopleOutlineRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/PeopleOutlineRounded */ "./node_modules/@material-ui/icons/PeopleOutlineRounded.js");
/* harmony import */ var _material_ui_icons_PeopleOutlineRounded__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PeopleOutlineRounded__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");

var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/Spotlights.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      margin: "1rem 2rem"
    },
    spotlightItem: {
      display: "flex"
    },
    icon: {
      marginRight: "1rem",
      "& svg": {
        width: "2rem",
        height: "2rem",
        color: _utils_styles__WEBPACK_IMPORTED_MODULE_8__["colors"].mainBlue
      }
    },
    text: {
      display: "flex",
      alignItems: "center",
      height: "2rem",
      fontSize: "1rem"
    }
  };
});
var icons = {
  place: __jsx(_material_ui_icons_Place__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }),
  date: __jsx(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }),
  stops: __jsx(_material_ui_icons_EmojiFlagsRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }),
  people: __jsx(_material_ui_icons_PeopleOutlineRounded__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  })
};

var SpotlightItem = function SpotlightItem(_ref) {
  var icon = _ref.icon,
      text = _ref.text;
  var classes = useStyles();
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: 1,
    item: true,
    xs: 6
    /*md={6} lg={4}*/
    ,
    className: classes.spotlightItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, icon), __jsx("div", {
    className: classes.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, text));
};

var Spotlights = function Spotlights(_ref2) {
  var date = _ref2.date,
      place = _ref2.place;
  var classes = useStyles();
  var infoContent = {
    place: {
      icon: __jsx(_material_ui_icons_Place__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }),
      text: place
    },
    date: {
      icon: __jsx(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }),
      text: date
    },
    stops: {
      icon: __jsx(_material_ui_icons_EmojiFlagsRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }),
      text: "stops"
    },
    people: {
      icon: __jsx(_material_ui_icons_PeopleOutlineRounded__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }),
      text: "people"
    }
  };
  var spotLights = [__jsx(SpotlightItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, infoContent.place, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx(SpotlightItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, infoContent.date, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), __jsx(SpotlightItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, infoContent.stops, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), __jsx(SpotlightItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, infoContent.people, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))];
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, spotLights));
};

/* harmony default export */ __webpack_exports__["default"] = (Spotlights);

/***/ })

})
//# sourceMappingURL=index.js.372b1458b2197c0add5b.hot-update.js.map