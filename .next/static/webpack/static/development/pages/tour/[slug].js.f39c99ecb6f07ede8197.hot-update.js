webpackHotUpdate("static/development/pages/tour/[slug].js",{

/***/ "./components/tour/TourGuides.tsx":
/*!****************************************!*\
  !*** ./components/tour/TourGuides.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helpers */ "./components/utils/helpers.ts");
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SectionTitle */ "./components/tour/SectionTitle.tsx");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/esm/ListItemAvatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");

var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/TourGuides.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    TourGuides: {
      margin: "5rem 0"
    },
    factsContainer: {},
    factItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1.5rem",
      "&:last-child": {
        marginBottom: "0"
      }
    },
    icon: {
      marginRight: "1rem",
      "& svg": {
        color: _utils_styles__WEBPACK_IMPORTED_MODULE_4__["colors"].mainBlue,
        width: "2.5rem",
        height: "2.5rem"
      }
    },
    heading: {
      marginRight: "2rem",
      fontSize: "1.6rem",
      fontWeight: "bold"
    },
    info: {
      fontSize: "1.6rem",
      textTransform: "capitalize"
    },
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    }
  };
});

var TourGuides = function TourGuides(_ref) {
  var guides = _ref.guides;
  var classes = useStyles();
  console.log("guides = ", guides); // "photo": "user-12.jpg",
  // const place =
  //   startLocation && startLocation.description ? startLocation.description : "";
  // const factItems = (Icon, heading, info) => (
  //   <div className={classes.factItem}>
  //     <div className={classes.icon}>
  //       <Icon />
  //     </div>
  //     <div className={classes.heading}>{heading}</div>
  //     <div className={classes.info}>{info}</div>
  //   </div>
  // );

  return __jsx("div", {
    className: classes.TourGuides,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    className: classes.factsContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "YOUR TOUR GUIDES",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, guides && _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(guides) ? guides.map(function (guide, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: guide.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      alignItems: "flex-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      alt: guide.name,
      src: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_5__["imgUrl"])("users", guide.photo),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
      primary: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_5__["parseRole"])(guide.role),
      secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
        component: "span",
        variant: "body2",
        className: classes.inline,
        color: "textPrimary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, guide.name)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    })), i < guides.length - 1 && __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "inset",
      component: "li",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }));
  }) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (TourGuides);
{
  /* <ListItem alignItems="flex-start">
  <ListItemAvatar>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  </ListItemAvatar>
  <ListItemText
  primary={parseRole()}
  secondary={
    <React.Fragment>
      <Typography
        component="span"
        variant="body2"
        className={classes.inline}
        color="textPrimary"
      >
        Ali Connors
      </Typography>
      {" — I'll be in your neighborhood doing errands this…"}
    </React.Fragment>
  }
  />
  </ListItem>
  <Divider variant="inset" component="li" />
  <ListItem alignItems="flex-start">
  <ListItemAvatar>
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  </ListItemAvatar>
  <ListItemText
  primary="Summer BBQ"
  secondary={
    <React.Fragment>
      <Typography
        component="span"
        variant="body2"
        className={classes.inline}
        color="textPrimary"
      >
        to Scott, Alex, Jennifer
      </Typography>
      {" — Wish I could come, but I'm out of town this…"}
    </React.Fragment>
  }
  />
  </ListItem>
  <Divider variant="inset" component="li" />
  <ListItem alignItems="flex-start">
  <ListItemAvatar>
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  </ListItemAvatar>
  <ListItemText
  primary="Oui Oui"
  secondary={
    <React.Fragment>
      <Typography
        component="span"
        variant="body2"
        className={classes.inline}
        color="textPrimary"
      >
        Sandra Adams
      </Typography>
      {" — Do you have Paris recommendations? Have you ever…"}
    </React.Fragment>
  }
  />
  </ListItem> */
}

/***/ })

})
//# sourceMappingURL=[slug].js.f39c99ecb6f07ede8197.hot-update.js.map