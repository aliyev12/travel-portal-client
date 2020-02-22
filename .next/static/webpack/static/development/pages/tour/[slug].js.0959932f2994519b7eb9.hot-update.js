webpackHotUpdate("static/development/pages/tour/[slug].js",{

/***/ "./components/tour/About.tsx":
/*!***********************************!*\
  !*** ./components/tour/About.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionTitle */ "./components/tour/SectionTitle.tsx");
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/About.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    About: {
      width: "50%",
      margin: "5rem 0",
      display: "flex",
      alignItems: "center"
    },
    factsContainer: {
      padding: "5rem 10rem"
    },
    desc: {
      lineHeight: "2",
      fontSize: "1.6rem"
    }
  };
});

var About = function About(_ref) {
  var name = _ref.name,
      description = _ref.description;
  var classes = useStyles();
  return __jsx("div", {
    className: classes.About,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: classes.factsContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "ABOUT ".concat(name.toUpperCase()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "body1",
    gutterBottom: true,
    className: classes.desc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, description)));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=[slug].js.0959932f2994519b7eb9.hot-update.js.map