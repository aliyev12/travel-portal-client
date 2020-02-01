webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/global/navbar/Links.tsx":
/*!********************************************!*\
  !*** ./components/global/navbar/Links.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/global/navbar/Links.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    link: {
      fontSize: "1.6rem",
      margin: theme.spacing(1, 1.5),
      "&:hover": {
        textDecoration: "none"
      }
    }
  };
});

var Links = function Links(_ref) {
  var auth = _ref.auth;
  var classes = useStyles();
  return __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, auth && __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "button",
    color: "textPrimary",
    href: "#",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "My Bookings"), !auth && __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "button",
    color: "textPrimary",
    href: "#",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Login"));
};

/* harmony default export */ __webpack_exports__["default"] = (Links); //  {/* <Button href="#">Login</Button> */}
//     {/* <Button variant="outlined" color="primary">
//       Login
//     </Button> */}
//     {/* <Button
//       href="#"
//       color="primary"
//       variant="outlined"
//       className={classes.link}
//     >
//       Login
//     </Button> */}

/***/ })

})
//# sourceMappingURL=_app.js.fb0cb1a8824b57745cbc.hot-update.js.map