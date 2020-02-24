webpackHotUpdate("static/development/pages/tour/[slug].js",{

/***/ "./components/home/TourCards.tsx":
/*!***************************************!*\
  !*** ./components/home/TourCards.tsx ***!
  \***************************************/
/*! exports provided: TourFragment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourFragment", function() { return TourFragment; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _TourCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TourCard */ "./components/home/TourCard.tsx");
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Loader */ "./components/common/Loader.tsx");


var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/TourCards.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query ALL_TOURS {\n    getAllTours {\n      ...TourFragment\n    }\n  }\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  fragment TourFragment on Tour {\n    id\n    slug\n    name\n    price\n    rating\n    description\n    ratingsAverage\n    ratingsQuantity\n    duration\n    createdAt\n    images\n    maxGroupSize\n    summary\n    imageCover\n    difficulty\n    startDates\n    guides {\n      id\n      role\n      name\n      email\n      photo\n      createdAt\n      updatedAt\n    }\n    startLocation {\n      description\n      address\n      coordinates\n      type\n    }\n    locations {\n      _id\n      description\n      day\n      coordinates\n      type\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var TourFragment = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject());
var ALL_TOURS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject2(), TourFragment);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    }
  };
});

var TourCards = function TourCards() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(ALL_TOURS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var classes = useStyles();
  if (loading) return __jsx(_common_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  });
  var getAllTours = data.getAllTours;
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, getAllTours && getAllTours.length && getAllTours.map(function (tour) {
    return __jsx(_TourCard__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: tour.id
    }, tour, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TourCards);

/***/ })

})
//# sourceMappingURL=[slug].js.76b09afee663802ec6a9.hot-update.js.map