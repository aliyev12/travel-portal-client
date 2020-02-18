webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/Difficulty.tsx":
/*!****************************************!*\
  !*** ./components/home/Difficulty.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/FitnessCenterRounded */ "./node_modules/@material-ui/icons/FitnessCenterRounded.js");
/* harmony import */ var _material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/Rating */ "./node_modules/@material-ui/lab/esm/Rating/index.js");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/Difficulty.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    box: {
      marginBottom: "1rem"
    },
    difficultyTitle: {
      textTransform: "uppercase",
      fontWeight: 700,
      marginBottom: "1rem"
    }
  };
});
var StyledRating = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])({
  iconFilled: {
    color: _utils_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].mainBlue
  },
  iconHover: {
    color: _utils_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].mainBlue
  }
})(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_5__["default"]);

var Difficulty = function Difficulty(_ref) {
  var difficulty = _ref.difficulty,
      duration = _ref.duration;
  var classes = useStyles();
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.box,
    component: "fieldset",
    mb: 3,
    borderColor: "transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "legend",
    className: classes.difficultyTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, difficulty === "medium" ? "medium-difficult" : difficulty, " ", duration, "-day-trip"), __jsx(StyledRating, {
    name: "Difficulty Level",
    precision: 1,
    readOnly: true,
    defaultValue: difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3,
    max: 3,
    icon: __jsx(_material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_2___default.a, {
      fontSize: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Difficulty);

/***/ })

})
//# sourceMappingURL=index.js.634ccf4fa849157f067a.hot-update.js.map