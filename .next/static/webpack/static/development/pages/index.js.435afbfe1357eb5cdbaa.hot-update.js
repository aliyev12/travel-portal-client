webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/Difficulty.tsx":
/*!****************************************!*\
  !*** ./components/home/Difficulty.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/FitnessCenterRounded */ "./node_modules/@material-ui/icons/FitnessCenterRounded.js");
/* harmony import */ var _material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");

var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/Difficulty.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex"
    },
    bells: {
      "& svg": {
        color: _utils_styles__WEBPACK_IMPORTED_MODULE_5__["colors"].mainBlue
      }
    },
    difficultyTitle: {
      textTransform: "uppercase",
      fontWeight: 700,
      marginBottom: "1rem",
      marginRight: "1rem"
    }
  };
});

var Difficulty = function Difficulty(_ref) {
  var difficulty = _ref.difficulty,
      duration = _ref.duration;
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "legend",
    className: classes.difficultyTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, difficulty === "medium" ? "medium-difficult" : difficulty, " ", duration, "-day-trip"), __jsx("div", {
    className: classes.bells,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()({
    length: difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3
  }).map(function (_, i) {
    return __jsx(_material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_3___default.a, {
      fontSize: "inherit",
      key: "bell-".concat(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Difficulty);

/***/ })

})
//# sourceMappingURL=index.js.435afbfe1357eb5cdbaa.hot-update.js.map