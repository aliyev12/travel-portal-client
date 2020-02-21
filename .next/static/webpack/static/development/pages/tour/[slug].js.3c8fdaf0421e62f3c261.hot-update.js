webpackHotUpdate("static/development/pages/tour/[slug].js",{

/***/ "./components/tour/Cover.tsx":
/*!***********************************!*\
  !*** ./components/tour/Cover.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_AccessTimeRounded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/AccessTimeRounded */ "./node_modules/@material-ui/icons/AccessTimeRounded.js");
/* harmony import */ var _material_ui_icons_AccessTimeRounded__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccessTimeRounded__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_PlaceRounded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/PlaceRounded */ "./node_modules/@material-ui/icons/PlaceRounded.js");
/* harmony import */ var _material_ui_icons_PlaceRounded__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlaceRounded__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_getHost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getHost */ "./components/utils/getHost.ts");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/Cover.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    Cover: {
      display: "flex",
      flexDirection: "column"
    },
    imageCover: {
      position: "relative",
      minHeight: "40rem",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    },
    titleContainer: {
      position: "absolute",
      textAlign: "center",
      color: "#000",
      marginLeft: "auto",
      marginRight: "auto",
      width: "fit-content",
      padding: "3rem",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(255,255,255,0.7)",
      boxShadow: "rgba(255, 255, 255, 0.2) 0px 2px 4px -1px, \n      rgba(255, 255, 255, 0.14) 0px 4px 5px 0px, \n      rgba(255, 255, 255, 0.12) 0px 1px 10px 0px"
    },
    title: {
      display: "flex",
      justifyContent: "center"
    },
    details: {
      display: "flex",
      justifyContent: "center"
    },
    item: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:first-child": {
        marginRight: "3rem"
      },
      "& svg": {
        marginRight: "0.7rem",
        color: _utils_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].mainBlue,
        width: "25px",
        height: "25px"
      }
    }
  };
});

var Cover = function Cover(_ref) {
  var name = _ref.name,
      imageCover = _ref.imageCover,
      duration = _ref.duration,
      startLocation = _ref.startLocation;
  var classes = useStyles();
  return __jsx("div", {
    className: classes.Cover,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: classes.imageCover,
    style: {
      backgroundImage: "url(\"".concat(Object(_utils_getHost__WEBPACK_IMPORTED_MODULE_5__["default"])(), "/img/tours/").concat(imageCover, "\")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: classes.titleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h1",
    component: "h2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, name)), __jsx("div", {
    className: classes.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("div", {
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_material_ui_icons_AccessTimeRounded__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, duration, " day", duration === 1 ? "" : "s")), __jsx("div", {
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_material_ui_icons_PlaceRounded__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), console.log("startLocation = ", startLocation), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, startLocation.description))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Cover);

/***/ })

})
//# sourceMappingURL=[slug].js.3c8fdaf0421e62f3c261.hot-update.js.map