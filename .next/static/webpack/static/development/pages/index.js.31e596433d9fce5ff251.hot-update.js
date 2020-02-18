webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/TourCard.tsx":
/*!**************************************!*\
  !*** ./components/home/TourCard.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/FitnessCenterRounded */ "./node_modules/@material-ui/icons/FitnessCenterRounded.js");
/* harmony import */ var _material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Share */ "./node_modules/@material-ui/icons/Share.js");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/lab/Rating */ "./node_modules/@material-ui/lab/esm/Rating/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _utils_colorPerLetter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../utils/colorPerLetter */ "./components/utils/colorPerLetter.ts");
/* harmony import */ var _utils_getHost__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../utils/getHost */ "./components/utils/getHost.ts");
/* harmony import */ var _Spotlights__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Spotlights */ "./components/home/Spotlights.tsx");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");




var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/TourCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



























var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9

    },
    box: {
      marginBottom: "1rem"
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_18__["red"][500]
    },
    difficultyTitle: {
      textTransform: "uppercase",
      fontWeight: 700,
      marginBottom: "1rem"
    },
    summary: {
      fontSize: "1rem",
      color: _utils_styles__WEBPACK_IMPORTED_MODULE_30__["colors"].mainBlack
    }
  };
});
var StyledRating = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])({
  iconFilled: {
    color: _utils_styles__WEBPACK_IMPORTED_MODULE_30__["colors"].mainBlue
  },
  iconHover: {
    color: _utils_styles__WEBPACK_IMPORTED_MODULE_30__["colors"].mainBlue
  }
})(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_25__["default"]);

var TourCard = function TourCard(props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var name = props.name,
      createdAt = props.createdAt,
      summary = props.summary,
      imageCover = props.imageCover,
      difficulty = props.difficulty,
      duration = props.duration,
      startDates = props.startDates,
      startLocation = props.startLocation;

  var handleExpandClick = function handleExpandClick() {
    setExpanded(!expanded);
  };

  console.log("startLocation = ", startLocation);
  var firstLetter = name.toLowerCase().split("the ")[1][0].toUpperCase();
  var closestTourDate = moment__WEBPACK_IMPORTED_MODULE_26___default()(closestDate(startDates)).format("MMMM YYYY");
  var place = startLocation && startLocation.description ? startLocation.description : "";
  console.log("closestTourDate = ", closestTourDate);
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    md: 6,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    avatar: __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_15__["default"], {
      "aria-label": "recipe",
      className: classes.avatar,
      style: {
        backgroundColor: Object(_utils_colorPerLetter__WEBPACK_IMPORTED_MODULE_27__["default"])(firstLetter)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, firstLetter),
    action: __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
      "aria-label": "settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_22___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    })),
    title: name,
    subheader: moment__WEBPACK_IMPORTED_MODULE_26___default()(createdAt * 1).format("MMMM Do YYYY"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_23__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.media,
    image: "".concat(Object(_utils_getHost__WEBPACK_IMPORTED_MODULE_28__["default"])(), "/img/tours/").concat(imageCover),
    title: "Paella dish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_24__["default"], {
    className: classes.box,
    component: "fieldset",
    mb: 3,
    borderColor: "transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    component: "legend",
    className: classes.difficultyTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, difficulty === "medium" ? "medium-difficult" : difficulty, " ", duration, "-day-trip"), __jsx(StyledRating, {
    name: "Difficulty Level",
    precision: 1,
    readOnly: true,
    defaultValue: difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3,
    max: 3,
    icon: __jsx(_material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_7___default.a, {
      fontSize: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    className: classes.summary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, summary))), __jsx(_Spotlights__WEBPACK_IMPORTED_MODULE_29__["default"], {
    date: closestTourDate,
    place: place,
    stops: stops,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_13__["default"], {
    disableSpacing: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
    "aria-label": "add to favorites",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
    "aria-label": "share",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.expand, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, classes.expandOpen, expanded)),
    onClick: handleExpandClick,
    "aria-expanded": expanded,
    "aria-label": "show more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_21___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }))), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_14__["default"], {
    "in": expanded,
    timeout: "auto",
    unmountOnExit: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Method:"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xF3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, "Set aside off of the heat to let rest for 10 minutes, and then serve.")))));
};

function closestDate(dateStrings) {
  var currentDate = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()();

  var date = -1;

  if (dateStrings.length) {
    var futureDateExists = dateStrings.some(function (d) {
      return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(d) > currentDate;
    });

    if (futureDateExists) {
      for (var i = 0; i < dateStrings.length; i++) {
        var dateItem = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(dateStrings[i]);

        if (dateItem > currentDate) {
          date = dateItem;
          break;
        }
      }
    } else {
      for (var _i = dateStrings.length - 1; _i >= 0; _i--) {
        var _dateItem = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(dateStrings[_i]);

        if (_dateItem <= currentDate) {
          date = _dateItem;
          break;
        }
      }
    }
  }

  return date;
}

/* harmony default export */ __webpack_exports__["default"] = (TourCard);

/***/ })

})
//# sourceMappingURL=index.js.31e596433d9fce5ff251.hot-update.js.map