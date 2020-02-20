webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/TourCard.tsx":
/*!**************************************!*\
  !*** ./components/home/TourCard.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_getHost__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/getHost */ "./components/utils/getHost.ts");
/* harmony import */ var _Spotlights__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Spotlights */ "./components/home/Spotlights.tsx");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");
/* harmony import */ var _CardCollapsible__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CardCollapsible */ "./components/home/CardCollapsible.tsx");
/* harmony import */ var _Difficulty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Difficulty */ "./components/home/Difficulty.tsx");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Actions */ "./components/home/Actions.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Header */ "./components/home/Header.tsx");
/* harmony import */ var _closestDate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./closestDate */ "./components/home/closestDate.ts");


var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/TourCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      maxWidth: "100%",
      margin: "auto"
    }, theme.breakpoints.up("md"), {
      maxWidth: 345
    }),
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9

    },
    summary: {
      fontSize: "1rem",
      color: _utils_styles__WEBPACK_IMPORTED_MODULE_14__["colors"].mainBlack
    }
  };
});

var TourCard = function TourCard(_ref) {
  var name = _ref.name,
      slug = _ref.slug,
      price = _ref.price,
      createdAt = _ref.createdAt,
      summary = _ref.summary,
      imageCover = _ref.imageCover,
      difficulty = _ref.difficulty,
      duration = _ref.duration,
      startDates = _ref.startDates,
      startLocation = _ref.startLocation,
      locations = _ref.locations,
      maxGroupSize = _ref.maxGroupSize,
      rating = _ref.rating,
      ratingsQuantity = _ref.ratingsQuantity,
      ratingsAverage = _ref.ratingsAverage;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var handleExpandClick = function handleExpandClick() {
    setExpanded(!expanded);
  };

  var closestTourDate = moment__WEBPACK_IMPORTED_MODULE_11___default()(Object(_closestDate__WEBPACK_IMPORTED_MODULE_19__["default"])(startDates)).format("MMMM YYYY");
  var place = startLocation && startLocation.description ? startLocation.description : "";
  var stops = locations ? locations.length : 0;
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    md: 6,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_18__["default"], {
    name: name,
    createdAt: createdAt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: function onClick() {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/tour/[slug]", "/tour/".concat(slug));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.media,
    image: "".concat(Object(_utils_getHost__WEBPACK_IMPORTED_MODULE_12__["default"])(), "/img/tours/").concat(imageCover),
    title: "Paella dish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_Difficulty__WEBPACK_IMPORTED_MODULE_16__["default"], {
    difficulty: difficulty,
    duration: duration,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    className: classes.summary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, summary))), __jsx(_Spotlights__WEBPACK_IMPORTED_MODULE_13__["default"], {
    date: closestTourDate,
    place: place,
    stops: stops,
    people: maxGroupSize,
    price: "".concat(price).length < 5 ? price * 100 : price,
    ratingsAverage: ratingsAverage,
    ratingsQuantity: ratingsQuantity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx(_Actions__WEBPACK_IMPORTED_MODULE_17__["default"], {
    handleExpandClick: handleExpandClick,
    expanded: expanded,
    slug: "the-sea-explorer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), __jsx(_CardCollapsible__WEBPACK_IMPORTED_MODULE_15__["default"], {
    expanded: expanded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TourCard);

/***/ })

})
//# sourceMappingURL=index.js.e0ffee382665cc0da1c8.hot-update.js.map