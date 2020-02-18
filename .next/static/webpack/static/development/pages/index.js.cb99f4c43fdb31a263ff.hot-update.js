webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/Header.tsx":
/*!************************************!*\
  !*** ./components/home/Header.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_colorPerLetter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/colorPerLetter */ "./components/utils/colorPerLetter.ts");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");

var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9

    },
    avatar: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__["red"][500]
    },
    summary: {
      fontSize: "1rem",
      color: _utils_styles__WEBPACK_IMPORTED_MODULE_10__["colors"].mainBlack
    }
  };
});

var Header = function Header(_ref) {
  var name = _ref.name,
      createdAt = _ref.createdAt;
  var classes = useStyles();
  var firstLetter = name.toLowerCase().split("the ")[1][0].toUpperCase();
  return __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    avatar: __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "aria-label": "recipe",
      className: classes.avatar,
      style: {
        backgroundColor: Object(_utils_colorPerLetter__WEBPACK_IMPORTED_MODULE_9__["default"])(firstLetter)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, firstLetter),
    action: __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      "aria-label": "settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })),
    title: name,
    subheader: moment__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(createdAt)).format("MMMM Do YYYY"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/home/TourCard.tsx":
/*!**************************************!*\
  !*** ./components/home/TourCard.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_getHost__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/getHost */ "./components/utils/getHost.ts");
/* harmony import */ var _Spotlights__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Spotlights */ "./components/home/Spotlights.tsx");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");
/* harmony import */ var _CardCollapsible__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CardCollapsible */ "./components/home/CardCollapsible.tsx");
/* harmony import */ var _Difficulty__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Difficulty */ "./components/home/Difficulty.tsx");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Actions */ "./components/home/Actions.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Header */ "./components/home/Header.tsx");
/* harmony import */ var _closestDate__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./closestDate */ "./components/home/closestDate.ts");

var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/TourCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9

    },
    avatar: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["red"][500]
    },
    summary: {
      fontSize: "1rem",
      color: _utils_styles__WEBPACK_IMPORTED_MODULE_13__["colors"].mainBlack
    }
  };
});

var TourCard = function TourCard(_ref) {
  var name = _ref.name,
      createdAt = _ref.createdAt,
      summary = _ref.summary,
      imageCover = _ref.imageCover,
      difficulty = _ref.difficulty,
      duration = _ref.duration,
      startDates = _ref.startDates,
      startLocation = _ref.startLocation,
      locations = _ref.locations,
      maxGroupSize = _ref.maxGroupSize;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var firstLetter = name.toLowerCase().split("the ")[1][0].toUpperCase();

  var handleExpandClick = function handleExpandClick() {
    setExpanded(!expanded);
  };

  var closestTourDate = moment__WEBPACK_IMPORTED_MODULE_10___default()(Object(_closestDate__WEBPACK_IMPORTED_MODULE_18__["default"])(startDates)).format("MMMM YYYY");
  var place = startLocation && startLocation.description ? startLocation.description : "";
  var stops = locations ? locations.length : 0;
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    md: 6,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_17__["default"], {
    name: name,
    createdAt: createdAt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.media,
    image: "".concat(Object(_utils_getHost__WEBPACK_IMPORTED_MODULE_11__["default"])(), "/img/tours/").concat(imageCover),
    title: "Paella dish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(_Difficulty__WEBPACK_IMPORTED_MODULE_15__["default"], {
    difficulty: difficulty,
    duration: duration,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    className: classes.summary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, summary))), __jsx(_Spotlights__WEBPACK_IMPORTED_MODULE_12__["default"], {
    date: closestTourDate,
    place: place,
    stops: stops,
    people: maxGroupSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), __jsx(_Actions__WEBPACK_IMPORTED_MODULE_16__["default"], {
    handleExpandClick: handleExpandClick,
    expanded: expanded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx(_CardCollapsible__WEBPACK_IMPORTED_MODULE_14__["default"], {
    expanded: expanded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TourCard);

/***/ })

})
//# sourceMappingURL=index.js.cb99f4c43fdb31a263ff.hot-update.js.map