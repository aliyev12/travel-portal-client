webpackHotUpdate("static/development/pages/tour/[slug].js",{

/***/ "./components/common/Loader.tsx":
/*!**************************************!*\
  !*** ./components/common/Loader.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CircularIndeterminate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/common/Loader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2)
      }
    }
  };
});
function CircularIndeterminate() {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
}

/***/ }),

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
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _home_TourCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/TourCards */ "./components/home/TourCards.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Cover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Cover */ "./components/tour/Cover.tsx");
/* harmony import */ var _QuickFacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./QuickFacts */ "./components/tour/QuickFacts.tsx");
/* harmony import */ var _TourGuides__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TourGuides */ "./components/tour/TourGuides.tsx");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./About */ "./components/tour/About.tsx");
/* harmony import */ var _Images__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Images */ "./components/tour/Images.tsx");
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/Loader */ "./components/common/Loader.tsx");

var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/Tour.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query TOUR($slug: String!) {\n    getTour(slug: $slug) {\n      ...TourFragment\n    }\n  }\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var TOUR = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject(), _home_TourCards__WEBPACK_IMPORTED_MODULE_4__["TourFragment"]);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    Tour: {},
    infoSection: {
      display: "flex",
      minHeight: "30rem"
    },
    factsAndGuides: {
      display: "flex",
      width: "50%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  };
});

var Tour = function Tour(_ref) {
  var slug = _ref.slug;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(TOUR, {
    variables: {
      slug: slug
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var classes = useStyles();
  if (loading) return __jsx(_common_Loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  });

  if (data && data.getTour) {
    var _data$getTour = data.getTour,
        name = _data$getTour.name,
        price = _data$getTour.price,
        createdAt = _data$getTour.createdAt,
        images = _data$getTour.images,
        summary = _data$getTour.summary,
        guides = _data$getTour.guides,
        imageCover = _data$getTour.imageCover,
        difficulty = _data$getTour.difficulty,
        duration = _data$getTour.duration,
        startDates = _data$getTour.startDates,
        startLocation = _data$getTour.startLocation,
        description = _data$getTour.description,
        locations = _data$getTour.locations,
        maxGroupSize = _data$getTour.maxGroupSize,
        rating = _data$getTour.rating,
        ratingsQuantity = _data$getTour.ratingsQuantity,
        ratingsAverage = _data$getTour.ratingsAverage;
    return __jsx("main", {
      className: classes.Tour,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx(_Cover__WEBPACK_IMPORTED_MODULE_6__["default"], {
      imageCover: imageCover,
      name: name,
      duration: duration,
      startLocation: startLocation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), __jsx("div", {
      className: classes.infoSection,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("div", {
      className: classes.factsAndGuides,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx(_QuickFacts__WEBPACK_IMPORTED_MODULE_7__["default"], {
      startDates: startDates,
      difficulty: difficulty,
      people: maxGroupSize,
      rating: ratingsAverage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), __jsx(_TourGuides__WEBPACK_IMPORTED_MODULE_8__["default"], {
      guides: guides,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    })), __jsx(_About__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: name,
      description: description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    })), __jsx(_Images__WEBPACK_IMPORTED_MODULE_10__["default"], {
      images: images,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Tour);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js ***!
  \*********************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");








var SIZE = 44;

function getRelativeValue(value, min, max) {
  return (Math.min(Math.max(min, value), max) - min) / (max - min);
}

function easeOut(t) {
  t = getRelativeValue(t, 0, 1); // https://gist.github.com/gre/1650294

  t = (t -= 1) * t * t + 1;
  return t;
}

function easeIn(t) {
  return t * t;
}

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-block'
    },

    /* Styles applied to the root element if `variant="static"`. */
    static: {
      transition: theme.transitions.create('transform')
    },

    /* Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate: {
      animation: '$circular-rotate 1.4s linear infinite'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the `svg` element. */
    svg: {
      display: 'block' // Keeps the progress centered

    },

    /* Styles applied to the `circle` svg path. */
    circle: {
      stroke: 'currentColor' // Use butt to follow the specification, by chance, it's already the default CSS value.
      // strokeLinecap: 'butt',

    },

    /* Styles applied to the `circle` svg path if `variant="static"`. */
    circleStatic: {
      transition: theme.transitions.create('stroke-dashoffset')
    },

    /* Styles applied to the `circle` svg path if `variant="indeterminate"`. */
    circleIndeterminate: {
      animation: '$circular-dash 1.4s ease-in-out infinite',
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: '80px, 200px',
      strokeDashoffset: '0px' // Add the unit to fix a Edge 16 and below bug.

    },
    '@keyframes circular-rotate': {
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    '@keyframes circular-dash': {
      '0%': {
        strokeDasharray: '1px, 200px',
        strokeDashoffset: '0px'
      },
      '50%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-15px'
      },
      '100%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-125px'
      }
    },

    /* Styles applied to the `circle` svg path if `disableShrink={true}`. */
    circleDisableShrink: {
      animation: 'none'
    }
  };
};
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

var CircularProgress = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function CircularProgress(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$disableShrink = props.disableShrink,
      disableShrink = _props$disableShrink === void 0 ? false : _props$disableShrink,
      _props$size = props.size,
      size = _props$size === void 0 ? 40 : _props$size,
      style = props.style,
      _props$thickness = props.thickness,
      thickness = _props$thickness === void 0 ? 3.6 : _props$thickness,
      _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'indeterminate' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]);

  var circleStyle = {};
  var rootStyle = {};
  var rootProps = {};

  if (variant === 'determinate' || variant === 'static') {
    var circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(value);

    if (variant === 'static') {
      circleStyle.strokeDashoffset = "".concat(((100 - value) / 100 * circumference).toFixed(3), "px");
      rootStyle.transform = 'rotate(-90deg)';
    } else {
      circleStyle.strokeDashoffset = "".concat((easeIn((100 - value) / 100) * circumference).toFixed(3), "px");
      rootStyle.transform = "rotate(".concat((easeOut(value / 70) * 270).toFixed(3), "deg)");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, color !== 'inherit' && classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(color))], {
      indeterminate: classes.indeterminate,
      static: classes.static
    }[variant]),
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: size,
      height: size
    }, rootStyle, {}, style),
    ref: ref,
    role: "progressbar"
  }, rootProps, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    className: classes.svg,
    viewBox: "".concat(SIZE / 2, " ").concat(SIZE / 2, " ").concat(SIZE, " ").concat(SIZE)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("circle", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.circle, disableShrink && classes.circleDisableShrink, {
      indeterminate: classes.circleIndeterminate,
      static: classes.circleStatic
    }[variant]),
    style: circleStyle,
    cx: SIZE,
    cy: SIZE,
    r: (SIZE - thickness) / 2,
    fill: "none",
    strokeWidth: thickness
  })));
});
 true ? CircularProgress.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary', 'inherit']),

  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   */
  disableShrink: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, function (props) {
    if (props.disableShrink && props.variant && props.variant !== 'indeterminate') {
      return new Error('Material-UI: you have provided the `disableShrink` prop ' + 'with a variant other than `indeterminate`. This will have no effect.');
    }

    return null;
  }),

  /**
   * The size of the circle.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g '3rem'.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The thickness of the circle.
   */
  thickness: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['determinate', 'indeterminate', 'static'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiCircularProgress',
  flip: false
})(CircularProgress));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/CircularProgress/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CircularProgress/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CircularProgress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CircularProgress__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

})
//# sourceMappingURL=[slug].js.06389dfe5fb2c8e25a53.hot-update.js.map