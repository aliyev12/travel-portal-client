webpackHotUpdate("static/development/pages/tour/[slug].js",{

/***/ "./components/tour/Tour.tsx":
/*!**********************************!*\
  !*** ./components/tour/Tour.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");

var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/Tour.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query TOUR($slug: String!) {\n    getTour(id: $slug) {\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



// "5c88fa8cf4afda39709c2955"
var TOUR = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

var Tour = function Tour() {
  //   const { loading, error, data } = useQuery(TOUR, {
  //     variables: { language: "english" }
  //   });
  //   if (loading) return <p>Loading ...</p>;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "hi there, this is a tour page");
};

/* harmony default export */ __webpack_exports__["default"] = (Tour);

/***/ })

})
//# sourceMappingURL=[slug].js.de680b0f7cda18d315ba.hot-update.js.map