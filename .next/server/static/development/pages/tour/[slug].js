module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/Loader.tsx":
/*!**************************************!*\
  !*** ./components/common/Loader.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CircularIndeterminate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/common/Loader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    display: "flex",
    minHeight: "20rem",
    justifyContent: "center",
    alignItems: "center",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  }
}));
function CircularIndeterminate() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/home/Actions.tsx":
/*!*************************************!*\
  !*** ./components/home/Actions.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Share */ "@material-ui/icons/Share");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors/red */ "@material-ui/core/colors/red");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/Actions.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
  detailsBtn: {
    marginLeft: "1rem"
  },
  like: {},
  liked: {
    "& svg": {
      color: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8___default.a[500]
    }
  },
  anchor: {}
}));

const Actions = ({
  handleExpandClick,
  expanded,
  slug
}) => {
  const classes = useStyles();
  const [liked, setLiked] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  return __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3___default.a, {
    disableSpacing: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": "add to favorites",
    onClick: () => setLiked(l => !l),
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.like, {
      [classes.liked]: liked
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": "share",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.detailsBtn,
    variant: "contained",
    color: "primary",
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/tour/[slug]", `/tour/${slug}`);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Details"), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.expand, {
      [classes.expandOpen]: expanded
    }),
    onClick: handleExpandClick,
    "aria-expanded": expanded,
    "aria-label": "show more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ }),

/***/ "./components/home/CardCollapsible.tsx":
/*!*********************************************!*\
  !*** ./components/home/CardCollapsible.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/CardCollapsible.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({// root: {
  //   maxWidth: 345
  // },
}));

const TourCard = ({
  expanded,
  description
}) => {
  const classes = useStyles();
  return __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3___default.a, {
    in: expanded,
    timeout: "auto",
    unmountOnExit: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, description)));
};

/* harmony default export */ __webpack_exports__["default"] = (TourCard);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/FitnessCenterRounded */ "@material-ui/icons/FitnessCenterRounded");
/* harmony import */ var _material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");

var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/Difficulty.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    display: "flex",
    marginBottom: "1rem"
  },
  bells: {
    display: "flex",
    transform: "translateY(-2px)",
    "& svg": {
      color: _utils_styles__WEBPACK_IMPORTED_MODULE_5__["colors"].mainBlue,
      width: "1.5rem",
      height: "1.5rem"
    }
  },
  difficultyTitle: {
    textTransform: "uppercase",
    fontWeight: 700,
    marginRight: "1rem"
  }
}));

const Difficulty = ({
  difficulty,
  duration
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "legend",
    className: classes.difficultyTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, difficulty === "medium" ? "medium-difficult" : difficulty, " ", duration, "-day-trip"), __jsx("div", {
    className: classes.bells,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()({
    length: difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3
  }).map((_, i) => __jsx(_material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fontSize: "inherit",
    key: `bell-${i}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Difficulty);

/***/ }),

/***/ "./components/home/Header.tsx":
/*!************************************!*\
  !*** ./components/home/Header.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_colorPerLetter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/colorPerLetter */ "./components/utils/colorPerLetter.ts");
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    maxWidth: 345
  },
  avatar: {
    backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["red"][500]
  }
}));

const Header = ({
  name,
  createdAt
}) => {
  const classes = useStyles();
  const firstLetter = name.toLowerCase().split("the ")[1][0].toUpperCase();
  return __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_2___default.a, {
    avatar: __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
      "aria-label": "recipe",
      className: classes.avatar,
      style: {
        backgroundColor: Object(_utils_colorPerLetter__WEBPACK_IMPORTED_MODULE_8__["default"])(firstLetter)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, firstLetter),
    action: __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
      "aria-label": "settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    })),
    title: name,
    subheader: moment__WEBPACK_IMPORTED_MODULE_7___default()(createdAt * 1).format("MMMM Do YYYY"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/home/Spotlights.tsx":
/*!****************************************!*\
  !*** ./components/home/Spotlights.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Place__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Place */ "@material-ui/icons/Place");
/* harmony import */ var _material_ui_icons_Place__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Place__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/CalendarToday */ "@material-ui/icons/CalendarToday");
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_EmojiFlagsRounded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/EmojiFlagsRounded */ "@material-ui/icons/EmojiFlagsRounded");
/* harmony import */ var _material_ui_icons_EmojiFlagsRounded__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EmojiFlagsRounded__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_PeopleOutlineRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/PeopleOutlineRounded */ "@material-ui/icons/PeopleOutlineRounded");
/* harmony import */ var _material_ui_icons_PeopleOutlineRounded__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PeopleOutlineRounded__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");
/* harmony import */ var _utils_formatMoney__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/formatMoney */ "./components/utils/formatMoney.ts");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/lab/Rating */ "@material-ui/lab/Rating");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/Spotlights.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    margin: "1rem 2rem"
  },
  root2: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1)
    }
  },
  spotlightItem: {
    display: "flex"
  },
  icon: {
    marginRight: "1rem",
    "& svg": {
      width: "2rem",
      height: "2rem",
      color: _utils_styles__WEBPACK_IMPORTED_MODULE_8__["colors"].mainBlue
    }
  },
  text: {
    display: "flex",
    alignItems: "center",
    height: "2rem",
    fontSize: "1rem"
  },
  details: {
    margin: "2rem 0"
  },
  price: {
    fontSize: "1.6rem"
  },
  money: {
    fontWeight: "bold"
  },
  per: {},
  ratingContainer: {
    marginTop: "1rem"
  },
  ratingLegend: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem"
  },
  rating: {
    pointerEvents: "none"
  }
}));
const icons = {
  place: __jsx(_material_ui_icons_Place__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }),
  date: __jsx(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }),
  stops: __jsx(_material_ui_icons_EmojiFlagsRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }),
  people: __jsx(_material_ui_icons_PeopleOutlineRounded__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  })
};

const SpotlightItem = ({
  icon,
  text
}) => {
  const classes = useStyles();
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: 1,
    item: true,
    xs: 6
    /*md={6} lg={4}*/
    ,
    className: classes.spotlightItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, icon), __jsx("div", {
    className: classes.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, text));
};

const Spotlights = ({
  date,
  place,
  stops,
  people,
  price,
  ratingsAverage,
  ratingsQuantity
}) => {
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(2);
  const classes = useStyles();
  const infoContent = {
    place: {
      icon: __jsx(_material_ui_icons_Place__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: undefined
      }),
      text: place
    },
    date: {
      icon: __jsx(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: undefined
      }),
      text: date
    },
    stops: {
      icon: __jsx(_material_ui_icons_EmojiFlagsRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: undefined
      }),
      text: `${stops} stop${stops === 1 ? "" : "s"}`
    },
    people: {
      icon: __jsx(_material_ui_icons_PeopleOutlineRounded__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: undefined
      }),
      text: `${people} ${people === 1 ? "person" : "people"}`
    }
  };
  const spotLights = [__jsx(SpotlightItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, infoContent.place, {
    key: "place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  })), __jsx(SpotlightItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, infoContent.date, {
    key: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  })), __jsx(SpotlightItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, infoContent.stops, {
    key: "stops",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  })), __jsx(SpotlightItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, infoContent.people, {
    key: "people",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }))];
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, spotLights), __jsx("div", {
    className: classes.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.price,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.money,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, Object(_utils_formatMoney__WEBPACK_IMPORTED_MODULE_9__["default"])(price)), __jsx("span", {
    className: classes.per,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, " per person")), __jsx("div", {
    className: classes.ratingContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12___default.a, {
    component: "fieldset",
    mb: 3,
    borderColor: "transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    component: "legend",
    className: classes.ratingLegend,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, "Average rating: ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, ratingsAverage)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, "Number of ratings: ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, ratingsQuantity))), __jsx(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_10___default.a, {
    name: "rating",
    defaultValue: ratingsAverage,
    precision: 0.1,
    className: classes.rating,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Spotlights);

/***/ }),

/***/ "./components/home/TourCard.tsx":
/*!**************************************!*\
  !*** ./components/home/TourCard.tsx ***!
  \**************************************/
/*! exports provided: closestTourDate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closestTourDate", function() { return closestTourDate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Spotlights__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Spotlights */ "./components/home/Spotlights.tsx");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/helpers */ "./components/utils/helpers.ts");
/* harmony import */ var _CardCollapsible__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CardCollapsible */ "./components/home/CardCollapsible.tsx");
/* harmony import */ var _Difficulty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Difficulty */ "./components/home/Difficulty.tsx");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Actions */ "./components/home/Actions.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Header */ "./components/home/Header.tsx");
/* harmony import */ var _closestDate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./closestDate */ "./components/home/closestDate.ts");
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/TourCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


















const closestTourDate = dates => moment__WEBPACK_IMPORTED_MODULE_9___default()(Object(_closestDate__WEBPACK_IMPORTED_MODULE_17__["default"])(dates)).format("MMMM YYYY");
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    maxWidth: "100%",
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      maxWidth: 345
    }
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9

  },
  summary: {
    fontSize: "1rem",
    color: _utils_styles__WEBPACK_IMPORTED_MODULE_11__["colors"].mainBlack
  }
}));

const TourCard = ({
  name,
  slug,
  price,
  createdAt,
  summary,
  imageCover,
  difficulty,
  duration,
  startDates,
  startLocation,
  description,
  locations,
  maxGroupSize,
  rating,
  ratingsQuantity,
  ratingsAverage
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const place = startLocation && startLocation.description ? startLocation.description : "";
  const stops = locations ? locations.length : 0;
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 6,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_16__["default"], {
    name: name,
    createdAt: createdAt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }), __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8___default.a, {
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/tour/[slug]", `/tour/${slug}`);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.media,
    image: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_12__["imgUrl"])("tours", imageCover),
    title: "Paella dish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(_Difficulty__WEBPACK_IMPORTED_MODULE_14__["default"], {
    difficulty: difficulty,
    duration: duration,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    className: classes.summary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, summary))), __jsx(_Spotlights__WEBPACK_IMPORTED_MODULE_10__["default"], {
    date: closestTourDate(startDates),
    place: place,
    stops: stops,
    people: maxGroupSize,
    price: `${price}`.length < 5 ? price * 100 : price,
    ratingsAverage: ratingsAverage,
    ratingsQuantity: ratingsQuantity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }), __jsx(_Actions__WEBPACK_IMPORTED_MODULE_15__["default"], {
    handleExpandClick: handleExpandClick,
    expanded: expanded,
    slug: slug,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), __jsx(_CardCollapsible__WEBPACK_IMPORTED_MODULE_13__["default"], {
    expanded: expanded,
    description: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TourCard);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TourCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TourCard */ "./components/home/TourCard.tsx");
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Loader */ "./components/common/Loader.tsx");

var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/TourCards.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const TourFragment = apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"]`
  fragment TourFragment on Tour {
    id
    slug
    name
    price
    rating
    description
    ratingsAverage
    ratingsQuantity
    duration
    createdAt
    images
    maxGroupSize
    summary
    imageCover
    difficulty
    startDates
    guides {
      id
      role
      name
      email
      photo
      createdAt
      updatedAt
    }
    startLocation {
      description
      address
      coordinates
      type
    }
    locations {
      _id
      description
      day
      coordinates
      type
    }
  }
`;
const ALL_TOURS = apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"]`
  query ALL_TOURS {
    getAllTours {
      ...TourFragment
    }
  }
  ${TourFragment}
`;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  }
}));

const TourCards = () => {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(ALL_TOURS);
  const classes = useStyles();
  if (loading) return __jsx(_common_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  });
  const {
    getAllTours
  } = data;
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, getAllTours && getAllTours.length && getAllTours.map(tour => {
    return __jsx(_TourCard__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: tour.id
    }, tour, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TourCards);

/***/ }),

/***/ "./components/home/closestDate.ts":
/*!****************************************!*\
  !*** ./components/home/closestDate.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (dateStrings => {
  const currentDate = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()();

  let date = -1;

  if (dateStrings.length) {
    let futureDateExists = dateStrings.some(d => _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(d) > currentDate);

    if (futureDateExists) {
      for (let i = 0; i < dateStrings.length; i++) {
        const dateItem = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(dateStrings[i]);

        if (dateItem > currentDate) {
          date = dateItem;
          break;
        }
      }
    } else {
      for (let i = dateStrings.length - 1; i >= 0; i--) {
        const dateItem = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(dateStrings[i]);

        if (dateItem <= currentDate) {
          date = dateItem;
          break;
        }
      }
    }
  }

  return date;
});

/***/ }),

/***/ "./components/tour/About.tsx":
/*!***********************************!*\
  !*** ./components/tour/About.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionTitle */ "./components/tour/SectionTitle.tsx");
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/About.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
}));

const About = ({
  name,
  description
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.About,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.factsContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: `ABOUT ${name.toUpperCase()}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "body1",
    gutterBottom: true,
    className: classes.desc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, description)));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/tour/Cover.tsx":
/*!***********************************!*\
  !*** ./components/tour/Cover.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_AccessTimeRounded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/AccessTimeRounded */ "@material-ui/icons/AccessTimeRounded");
/* harmony import */ var _material_ui_icons_AccessTimeRounded__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccessTimeRounded__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_PlaceRounded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/PlaceRounded */ "@material-ui/icons/PlaceRounded");
/* harmony import */ var _material_ui_icons_PlaceRounded__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlaceRounded__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helpers */ "./components/utils/helpers.ts");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/Cover.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
    boxShadow: `rgba(255, 255, 255, 0.2) 0px 2px 4px -1px, 
      rgba(255, 255, 255, 0.14) 0px 4px 5px 0px, 
      rgba(255, 255, 255, 0.12) 0px 1px 10px 0px`
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
}));

const Cover = ({
  name,
  imageCover,
  duration,
  startLocation
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.Cover,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.imageCover,
    style: {
      backgroundImage: `url("${Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_5__["imgUrl"])("tours", imageCover)}")`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.titleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h1",
    component: "h2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, name)), __jsx("div", {
    className: classes.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx(_material_ui_icons_AccessTimeRounded__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, duration, " day", duration === 1 ? "" : "s")), __jsx("div", {
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx(_material_ui_icons_PlaceRounded__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), console.log("startLocation = ", startLocation), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, startLocation.description))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Cover);

/***/ }),

/***/ "./components/tour/Images.tsx":
/*!************************************!*\
  !*** ./components/tour/Images.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-image */ "react-image");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_PauseRounded__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/PauseRounded */ "@material-ui/icons/PauseRounded");
/* harmony import */ var _material_ui_icons_PauseRounded__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PauseRounded__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_PlayArrowRounded__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/PlayArrowRounded */ "@material-ui/icons/PlayArrowRounded");
/* harmony import */ var _material_ui_icons_PlayArrowRounded__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayArrowRounded__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/helpers */ "./components/utils/helpers.ts");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_18__);









var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/Images.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }












function NextArrow(props) {
  const {
    className,
    style,
    onClick
  } = props;
  return __jsx("div", {
    className: className,
    style: _objectSpread({}, style, {
      display: "block",
      color: "#333"
    }),
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  });
}

function PrevArrow(props) {
  const {
    className,
    style,
    onClick
  } = props;
  return __jsx("div", {
    className: className,
    style: _objectSpread({}, style, {
      display: "block",
      color: "#333"
    }),
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  });
}

const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 1,
  pauseOnHover: true,
  pauseOnFocus: true,
  nextArrow: __jsx(NextArrow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }),
  prevArrow: __jsx(PrevArrow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(theme => ({
  Images: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5rem 0",
    width: "100%"
  },
  sliderContainer: {
    // height: "500px",
    width: "500px"
  },
  image: {
    width: "100%" // height: "200px"

  }
}));

const Images = ({
  images
}) => {
  const [playing, setPlaying] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(true);
  const [slickImages, setSlickImages] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState([]);
  const classes = useStyles();
  let slider;
  react__WEBPACK_IMPORTED_MODULE_9___default.a.useEffect(() => {
    const imagesArr = [];

    if (images && images.length && _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_7___default()(images)) {
      images.forEach(img => {
        imagesArr.push(__jsx("div", {
          key: img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: undefined
        }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
          src: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_16__["imgUrl"])("tours", img),
          alt: img,
          className: classes.image,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: undefined
        })));
      });
    }

    setSlickImages(imagesArr);
  }, [images]);

  const play = () => slider.slickPlay();

  const pause = () => slider.slickPause();

  return __jsx("div", {
    className: classes.Images,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.sliderContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_10___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
    ref: sl => slider = sl
  }, sliderSettings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), slickImages && slickImages.length ? slickImages : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15___default.a, {
    "aria-label": "pause or play",
    className: "play-pause-btn",
    title: playing ? `Pause slide show` : `Play slide show`,
    onClick: () => {
      playing ? pause() : play();
      setPlaying(oldPlaying => !oldPlaying);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, playing ? __jsx(_material_ui_icons_PauseRounded__WEBPACK_IMPORTED_MODULE_13___default.a, {
    fontSize: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }) : __jsx(_material_ui_icons_PlayArrowRounded__WEBPACK_IMPORTED_MODULE_14___default.a, {
    fontSize: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Images);

/***/ }),

/***/ "./components/tour/Map.js":
/*!********************************!*\
  !*** ./components/tour/Map.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "mapbox-gl");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ "./node_modules/mapbox-gl/dist/mapbox-gl.css");
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/*
.marker {
  background-image: url('../img/pin.png');
  background-size: cover;
  width: 32px;
  height: 40px;
  cursor: pointer;
}

.mapboxgl-popup {
  max-width: 25rem;
}

.mapboxgl-popup-content {
  text-align: center;
  font-family: 'Lato', sans-serif;
  padding: 1.5rem !important;
  font-size: 1.4rem;
  -webkit-box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15) !important;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15) !important;
}
*/

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  Map: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5rem 0",
    width: "100%",
    position: "relative",
    height: "65rem"
  },
  map: {
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    bottom: "0",
    width: "100%"
  }
}));
const geojson = {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-112.987418, 37.198125]
    },
    properties: {
      description: "Zion Canyon National Park"
    }
  }, {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-111.376161, 36.86438]
    },
    properties: {
      description: "Antelope Canyon"
    }
  }, {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-112.115763, 36.058973]
    },
    properties: {
      description: "Grand Canyon National Park"
    }
  }, {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-116.107963, 34.011646]
    },
    properties: {
      description: "Joshua Tree National Park"
    }
  }]
};

const Map = () => {
  const classes = useStyles();
  const [lng, seLng] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(5);
  const [lat, setLat] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(34);
  const [zoom, setZoom] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(2);
  const [map, setMap] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const mapContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.accessToken = "pk.eyJ1IjoiZGV2N2M0IiwiYSI6ImNrNnpxenl5eTB2bHczZW15MzBhM3dyODYifQ.Y7JGKPXPwGMFuSQSyQaZaw";

    const initializeMap = ({
      setMap,
      mapContainer
    }) => {
      const map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        // stylesheet location
        center: [0, 0],
        zoom: 5
      });
      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({
      setMap,
      mapContainer
    });
  }, [map]); // const map = new mapboxgl.Map({
  //   container: mapContainer,
  //   scrollZoom: false,
  //   style: "mapbox://styles/mapbox/streets-v11",
  //   center: [state.lng, state.lat],
  //   zoom: state.zoom
  // });
  // map.on("move", () => {
  //   seLng(map.getCenter().lng.toFixed(4));
  //   setLat(map.getCenter().lat.toFixed(4));
  //   setZoom(map.getZoom().toFixed(2));
  // });
  // const bounds = new mapboxgl.LngLatBounds();
  // geojson.features.forEach(function(marker) {
  //   var el = document.createElement("div");
  //   el.className = "marker";
  //   new mapboxgl.Marker({
  //     element: el,
  //     anchor: "bottom"
  //   })
  //     .setLngLat(marker.geometry.coordinates)
  //     .addTo(map);
  //   new mapboxgl.Popup({
  //     offset: 30,
  //     closeOnClick: false
  //   })
  //     .setLngLat(marker.geometry.coordinates)
  //     .setHTML("<p>" + marker.properties.description + "</p>")
  //     .addTo(map);
  //   bounds.extend(marker.geometry.coordinates);
  // });
  // map.fitBounds(bounds, {
  //   padding: {
  //     top: 200,
  //     bottom: 150,
  //     left: 50,
  //     right: 50
  //   }
  // });
  // map.on("load", function() {
  //   map.addLayer({
  //     id: "route",
  //     type: "line",
  //     source: {
  //       type: "geojson",
  //       data: {
  //         type: "Feature",
  //         properties: {},
  //         geometry: {
  //           type: "LineString",
  //           coordinates: [
  //             [-112.987418, 37.198125],
  //             [-111.376161, 36.86438],
  //             [-112.115763, 36.058973],
  //             [-116.107963, 34.011646]
  //           ]
  //         }
  //       }
  //     },
  //     layout: {
  //       "line-join": "round",
  //       "line-cap": "round"
  //     },
  //     paint: {
  //       "line-color": "#55c57a",
  //       "line-opacity": 0.6,
  //       "line-width": 3
  //     }
  //   });
  // });

  return __jsx("div", {
    className: classes.Map,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, __jsx("div", {
    ref: el => mapContainer.current = el,
    className: classes.map,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Map); // import React, { Component } from "react";
// import mapboxgl from "mapbox-gl";
// // pk.eyJ1IjoiZGV2N2M0IiwiYSI6ImNrNnpxenl5eTB2bHczZW15MzBhM3dyODYifQ.Y7JGKPXPwGMFuSQSyQaZaw
// mapboxgl.accessToken =
//   "pk.eyJ1IjoiZGV2N2M0IiwiYSI6ImNrNnpxenl5eTB2bHczZW15MzBhM3dyODYifQ.Y7JGKPXPwGMFuSQSyQaZaw";
// const geojson = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-112.987418, 37.198125]
//       },
//       properties: {
//         description: "Zion Canyon National Park"
//       }
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-111.376161, 36.86438]
//       },
//       properties: {
//         description: "Antelope Canyon"
//       }
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-112.115763, 36.058973]
//       },
//       properties: {
//         description: "Grand Canyon National Park"
//       }
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-116.107963, 34.011646]
//       },
//       properties: {
//         description: "Joshua Tree National Park"
//       }
//     }
//   ]
// };
// class Map extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lng: 5,
//       lat: 34,
//       zoom: 2
//     };
//   }
//   componentDidMount() {
//     const map = new mapboxgl.Map({
//       container: this.mapContainer,
//       scrollZoom: false,
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [this.state.lng, this.state.lat],
//       zoom: this.state.zoom
//     });
//     map.on("move", () => {
//       this.setState({
//         lng: map.getCenter().lng.toFixed(4),
//         lat: map.getCenter().lat.toFixed(4),
//         zoom: map.getZoom().toFixed(2)
//       });
//     });
//     const bounds = new mapboxgl.LngLatBounds();
//     geojson.features.forEach(function(marker) {
//       var el = document.createElement("div");
//       el.className = "marker";
//       new mapboxgl.Marker({
//         element: el,
//         anchor: "bottom"
//       })
//         .setLngLat(marker.geometry.coordinates)
//         .addTo(map);
//       new mapboxgl.Popup({
//         offset: 30,
//         closeOnClick: false
//       })
//         .setLngLat(marker.geometry.coordinates)
//         .setHTML("<p>" + marker.properties.description + "</p>")
//         .addTo(map);
//       bounds.extend(marker.geometry.coordinates);
//     });
//     map.fitBounds(bounds, {
//       padding: {
//         top: 200,
//         bottom: 150,
//         left: 50,
//         right: 50
//       }
//     });
//     map.on("load", function() {
//       map.addLayer({
//         id: "route",
//         type: "line",
//         source: {
//           type: "geojson",
//           data: {
//             type: "Feature",
//             properties: {},
//             geometry: {
//               type: "LineString",
//               coordinates: [
//                 [-112.987418, 37.198125],
//                 [-111.376161, 36.86438],
//                 [-112.115763, 36.058973],
//                 [-116.107963, 34.011646]
//               ]
//             }
//           }
//         },
//         layout: {
//           "line-join": "round",
//           "line-cap": "round"
//         },
//         paint: {
//           "line-color": "#55c57a",
//           "line-opacity": 0.6,
//           "line-width": 3
//         }
//       });
//     });
//   }
//   // render() {
//   //   return (
//   //     <div>
//   //       <div
//   //         ref={el => (this.mapContainer = el)}
//   //         className="mapContainer"
//   //         style={{
//   //           position: "absolute",
//   //           top: "0",
//   //           right: "0",
//   //           left: "0",
//   //           bottom: "0"
//   //         }}
//   //       />
//   //     </div>
//   //   );
//   // }
//   render() {
//     return (
//       <div
//         style={{
//           position: "relative",
//           height: "65rem"
//         }}
//       >
//         <div
//           className="sidebarStyle"
//           style={{
//             display: "inline-block",
//             position: "absolute",
//             top: 0,
//             left: 0,
//             margin: "12px",
//             backgroundColor: "#404040",
//             color: "#ffffff",
//             zIndex: "1 !important",
//             padding: "6px",
//             fontWeight: "bold"
//           }}
//         >
//           <div>
//             Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
//             {this.state.zoom}
//           </div>
//         </div>
//         <div
//           ref={el => (this.mapContainer = el)}
//           className="mapContainer"
//           style={{
//             position: "absolute",
//             top: "0",
//             right: "0",
//             left: "0",
//             bottom: "0",
//             width: "100%"
//           }}
//         />
//       </div>
//     );
//   }
// }
// export default Map;

/***/ }),

/***/ "./components/tour/QuickFacts.tsx":
/*!****************************************!*\
  !*** ./components/tour/QuickFacts.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_AccessTimeRounded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/AccessTimeRounded */ "@material-ui/icons/AccessTimeRounded");
/* harmony import */ var _material_ui_icons_AccessTimeRounded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccessTimeRounded__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/FitnessCenterRounded */ "@material-ui/icons/FitnessCenterRounded");
/* harmony import */ var _material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_PeopleOutlineRounded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/PeopleOutlineRounded */ "@material-ui/icons/PeopleOutlineRounded");
/* harmony import */ var _material_ui_icons_PeopleOutlineRounded__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PeopleOutlineRounded__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/StarBorderRounded */ "@material-ui/icons/StarBorderRounded");
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");
/* harmony import */ var _home_TourCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/TourCard */ "./components/home/TourCard.tsx");
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SectionTitle */ "./components/tour/SectionTitle.tsx");
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/QuickFacts.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  QuickFacts: {
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
      color: _utils_styles__WEBPACK_IMPORTED_MODULE_6__["colors"].mainBlue,
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
  }
}));

const QuickFacts = ({
  startDates,
  difficulty,
  people,
  rating
}) => {
  const classes = useStyles(); // const place =
  //   startLocation && startLocation.description ? startLocation.description : "";

  const factItems = (Icon, heading, info) => __jsx("div", {
    className: classes.factItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  })), __jsx("div", {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, heading), __jsx("div", {
    className: classes.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, info));

  return __jsx("div", {
    className: classes.QuickFacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.factsContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "QUICK FACTS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), factItems(_material_ui_icons_AccessTimeRounded__WEBPACK_IMPORTED_MODULE_2___default.a, "NEXT DATE", Object(_home_TourCard__WEBPACK_IMPORTED_MODULE_7__["closestTourDate"])(startDates)), factItems(_material_ui_icons_FitnessCenterRounded__WEBPACK_IMPORTED_MODULE_3___default.a, "DIFFICULTY", difficulty), factItems(_material_ui_icons_PeopleOutlineRounded__WEBPACK_IMPORTED_MODULE_4___default.a, "PARTICIPANTS", `${people} ${people === 1 ? "person" : "people"}`), factItems(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_5___default.a, "RATING", `${rating} / 5`)));
};

/* harmony default export */ __webpack_exports__["default"] = (QuickFacts);
/*
stopped at building fact items...

NEXT DATE
June 2021
DIFFICULTY
Medium
PARTICIPANTS
15 People
RATING
4.8 / 5
*/

/***/ }),

/***/ "./components/tour/SectionTitle.tsx":
/*!******************************************!*\
  !*** ./components/tour/SectionTitle.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/SectionTitle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  SectionTitle: {
    marginBottom: "3rem",
    textAlign: "center"
  }
}));

const SectionTitle = ({
  title
}) => {
  const classes = useStyles();
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h3",
    gutterBottom: true,
    className: classes.SectionTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (SectionTitle);

/***/ }),

/***/ "./components/tour/Tour.tsx":
/*!**********************************!*\
  !*** ./components/tour/Tour.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_TourCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/TourCards */ "./components/home/TourCards.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Cover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cover */ "./components/tour/Cover.tsx");
/* harmony import */ var _QuickFacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./QuickFacts */ "./components/tour/QuickFacts.tsx");
/* harmony import */ var _TourGuides__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TourGuides */ "./components/tour/TourGuides.tsx");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./About */ "./components/tour/About.tsx");
/* harmony import */ var _Images__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Images */ "./components/tour/Images.tsx");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Map */ "./components/tour/Map.js");
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/Loader */ "./components/common/Loader.tsx");
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/Tour.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const TOUR = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query TOUR($slug: String!) {
    getTour(slug: $slug) {
      ...TourFragment
    }
  }
  ${_home_TourCards__WEBPACK_IMPORTED_MODULE_3__["TourFragment"]}
`;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
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
}));

const Tour = ({
  slug
}) => {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(TOUR, {
    variables: {
      slug
    }
  });
  const classes = useStyles();
  if (loading) return __jsx(_common_Loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  });

  if (data && data.getTour) {
    const {
      name,
      price,
      createdAt,
      images,
      summary,
      guides,
      imageCover,
      difficulty,
      duration,
      startDates,
      startLocation,
      description,
      locations,
      maxGroupSize,
      rating,
      ratingsQuantity,
      ratingsAverage
    } = data.getTour;
    return __jsx("main", {
      className: classes.Tour,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: undefined
    }, __jsx(_Cover__WEBPACK_IMPORTED_MODULE_5__["default"], {
      imageCover: imageCover,
      name: name,
      duration: duration,
      startLocation: startLocation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }), __jsx("div", {
      className: classes.infoSection,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: undefined
    }, __jsx("div", {
      className: classes.factsAndGuides,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: undefined
    }, __jsx(_QuickFacts__WEBPACK_IMPORTED_MODULE_6__["default"], {
      startDates: startDates,
      difficulty: difficulty,
      people: maxGroupSize,
      rating: ratingsAverage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: undefined
    }), __jsx(_TourGuides__WEBPACK_IMPORTED_MODULE_7__["default"], {
      guides: guides,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: undefined
    })), __jsx(_About__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: name,
      description: description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: undefined
    })), __jsx(_Images__WEBPACK_IMPORTED_MODULE_9__["default"], {
      images: images,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: undefined
    }), __jsx(_Map__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Tour);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/helpers */ "./components/utils/helpers.ts");
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SectionTitle */ "./components/tour/SectionTitle.tsx");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "@material-ui/core/ListItemAvatar");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/TourGuides.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
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
}));

const TourGuides = ({
  guides
}) => {
  const classes = useStyles();
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
    __self: undefined
  }, __jsx("div", {
    className: classes.factsContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "YOUR TOUR GUIDES",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, guides && _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(guides) ? guides.map((guide, i) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: guide.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: undefined
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
      alignItems: "flex-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: undefined
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12___default.a, {
      alt: guide.name,
      src: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_5__["imgUrl"])("users", guide.photo),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
      primary: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_5__["parseRole"])(guide.role),
      secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: undefined
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        component: "span",
        variant: "body2",
        className: classes.inline,
        color: "textPrimary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: undefined
      }, guide.name)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: undefined
    })), i < guides.length - 1 && __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9___default.a, {
      variant: "inset",
      component: "li",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: undefined
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

/***/ }),

/***/ "./components/utils/colorPerLetter.ts":
/*!********************************************!*\
  !*** ./components/utils/colorPerLetter.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/colors/purple */ "@material-ui/core/colors/purple");
/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors/red */ "@material-ui/core/colors/red");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/pink */ "@material-ui/core/colors/pink");
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors_deepPurple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors/deepPurple */ "@material-ui/core/colors/deepPurple");
/* harmony import */ var _material_ui_core_colors_deepPurple__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_deepPurple__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_colors_indigo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/colors/indigo */ "@material-ui/core/colors/indigo");
/* harmony import */ var _material_ui_core_colors_indigo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_indigo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "@material-ui/core/colors/blue");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_colors_lightBlue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors/lightBlue */ "@material-ui/core/colors/lightBlue");
/* harmony import */ var _material_ui_core_colors_lightBlue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_lightBlue__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_colors_cyan__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors/cyan */ "@material-ui/core/colors/cyan");
/* harmony import */ var _material_ui_core_colors_cyan__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_cyan__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors/teal */ "@material-ui/core/colors/teal");
/* harmony import */ var _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/colors/green */ "@material-ui/core/colors/green");
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors/lightGreen */ "@material-ui/core/colors/lightGreen");
/* harmony import */ var _material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_colors_lime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/colors/lime */ "@material-ui/core/colors/lime");
/* harmony import */ var _material_ui_core_colors_lime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_lime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/colors/yellow */ "@material-ui/core/colors/yellow");
/* harmony import */ var _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/colors/amber */ "@material-ui/core/colors/amber");
/* harmony import */ var _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_colors_orange__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/colors/orange */ "@material-ui/core/colors/orange");
/* harmony import */ var _material_ui_core_colors_orange__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_orange__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_colors_deepOrange__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/colors/deepOrange */ "@material-ui/core/colors/deepOrange");
/* harmony import */ var _material_ui_core_colors_deepOrange__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_deepOrange__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_colors_brown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/colors/brown */ "@material-ui/core/colors/brown");
/* harmony import */ var _material_ui_core_colors_brown__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_brown__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "@material-ui/core/colors/grey");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/colors/blueGrey */ "@material-ui/core/colors/blueGrey");
/* harmony import */ var _material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_18__);



















const letterColors = {
  a: _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_0___default.a[500],
  b: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default.a[500],
  c: _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_2___default.a[500],
  d: _material_ui_core_colors_deepPurple__WEBPACK_IMPORTED_MODULE_3___default.a[500],
  e: _material_ui_core_colors_indigo__WEBPACK_IMPORTED_MODULE_4___default.a[500],
  f: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_5___default.a[500],
  g: _material_ui_core_colors_lightBlue__WEBPACK_IMPORTED_MODULE_6___default.a[500],
  h: _material_ui_core_colors_cyan__WEBPACK_IMPORTED_MODULE_7___default.a[500],
  i: _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_8___default.a[500],
  j: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_9___default.a[500],
  k: _material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_10___default.a[500],
  l: _material_ui_core_colors_lime__WEBPACK_IMPORTED_MODULE_11___default.a[500],
  m: _material_ui_core_colors_yellow__WEBPACK_IMPORTED_MODULE_12___default.a[500],
  n: _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_13___default.a[500],
  o: _material_ui_core_colors_orange__WEBPACK_IMPORTED_MODULE_14___default.a[500],
  p: _material_ui_core_colors_deepOrange__WEBPACK_IMPORTED_MODULE_15___default.a[500],
  q: _material_ui_core_colors_brown__WEBPACK_IMPORTED_MODULE_16___default.a[500],
  r: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_17___default.a[500],
  s: _material_ui_core_colors_blueGrey__WEBPACK_IMPORTED_MODULE_18___default.a[500],
  t: _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_0___default.a[900],
  u: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default.a[900],
  v: _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_2___default.a[900],
  w: _material_ui_core_colors_deepPurple__WEBPACK_IMPORTED_MODULE_3___default.a[900],
  x: _material_ui_core_colors_indigo__WEBPACK_IMPORTED_MODULE_4___default.a[900],
  y: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_5___default.a[900],
  z: _material_ui_core_colors_lightBlue__WEBPACK_IMPORTED_MODULE_6___default.a[900]
};
/* harmony default export */ __webpack_exports__["default"] = (letter => {
  return letterColors[letter.toLowerCase()];
});

/***/ }),

/***/ "./components/utils/formatMoney.ts":
/*!*****************************************!*\
  !*** ./components/utils/formatMoney.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (amount => {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat("en-US", options);
  return formatter.format(amount / 100);
});

/***/ }),

/***/ "./components/utils/getHost.ts":
/*!*************************************!*\
  !*** ./components/utils/getHost.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  if (true) return "http://localhost:8080";
  if (false) {}
});

/***/ }),

/***/ "./components/utils/helpers.ts":
/*!*************************************!*\
  !*** ./components/utils/helpers.ts ***!
  \*************************************/
/*! exports provided: parseRole, imgUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRole", function() { return parseRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgUrl", function() { return imgUrl; });
/* harmony import */ var _getHost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getHost */ "./components/utils/getHost.ts");

const ROLES = {
  user: "Regular User",
  guide: "Tour Guide",
  lead_guide: "Lead Guide",
  admin: "Admin User"
};
const parseRole = role => ROLES[role];
const imgUrl = (type, name) => `${Object(_getHost__WEBPACK_IMPORTED_MODULE_0__["default"])()}/img/${type}/${name}`;

/***/ }),

/***/ "./components/utils/styles.ts":
/*!************************************!*\
  !*** ./components/utils/styles.ts ***!
  \************************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
const colors = {
  lightBlue: "#d1ebff",
  mainBlue: "#3d8cc7",
  mainGreen: "#88B337",
  mainBlack: "#333333"
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/mapbox-gl/dist/mapbox-gl.css":
/*!***************************************************!*\
  !*** ./node_modules/mapbox-gl/dist/mapbox-gl.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/tour/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/tour/[slug].tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_tour_Tour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tour/Tour */ "./components/tour/Tour.tsx");
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/pages/tour/[slug].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TourPage = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    slug
  } = router.query;
  return __jsx(_components_tour_Tour__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slug: slug,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TourPage);

/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** multi ./pages/tour/[slug].tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/abdulaliyev/web-projects/travel-portal/client/pages/tour/[slug].tsx */"./pages/tour/[slug].tsx");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemAvatar":
/*!***************************************************!*\
  !*** external "@material-ui/core/ListItemAvatar" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/colors/amber":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/amber" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/amber");

/***/ }),

/***/ "@material-ui/core/colors/blue":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/blue" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/blue");

/***/ }),

/***/ "@material-ui/core/colors/blueGrey":
/*!****************************************************!*\
  !*** external "@material-ui/core/colors/blueGrey" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/blueGrey");

/***/ }),

/***/ "@material-ui/core/colors/brown":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/brown" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/brown");

/***/ }),

/***/ "@material-ui/core/colors/cyan":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/cyan" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/cyan");

/***/ }),

/***/ "@material-ui/core/colors/deepOrange":
/*!******************************************************!*\
  !*** external "@material-ui/core/colors/deepOrange" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/deepOrange");

/***/ }),

/***/ "@material-ui/core/colors/deepPurple":
/*!******************************************************!*\
  !*** external "@material-ui/core/colors/deepPurple" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/deepPurple");

/***/ }),

/***/ "@material-ui/core/colors/green":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/green" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),

/***/ "@material-ui/core/colors/grey":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/grey" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/grey");

/***/ }),

/***/ "@material-ui/core/colors/indigo":
/*!**************************************************!*\
  !*** external "@material-ui/core/colors/indigo" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/indigo");

/***/ }),

/***/ "@material-ui/core/colors/lightBlue":
/*!*****************************************************!*\
  !*** external "@material-ui/core/colors/lightBlue" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/lightBlue");

/***/ }),

/***/ "@material-ui/core/colors/lightGreen":
/*!******************************************************!*\
  !*** external "@material-ui/core/colors/lightGreen" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/lightGreen");

/***/ }),

/***/ "@material-ui/core/colors/lime":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/lime" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/lime");

/***/ }),

/***/ "@material-ui/core/colors/orange":
/*!**************************************************!*\
  !*** external "@material-ui/core/colors/orange" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/orange");

/***/ }),

/***/ "@material-ui/core/colors/pink":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/pink" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/pink");

/***/ }),

/***/ "@material-ui/core/colors/purple":
/*!**************************************************!*\
  !*** external "@material-ui/core/colors/purple" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/purple");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),

/***/ "@material-ui/core/colors/teal":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/teal" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/teal");

/***/ }),

/***/ "@material-ui/core/colors/yellow":
/*!**************************************************!*\
  !*** external "@material-ui/core/colors/yellow" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/yellow");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AccessTimeRounded":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/AccessTimeRounded" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccessTimeRounded");

/***/ }),

/***/ "@material-ui/icons/CalendarToday":
/*!***************************************************!*\
  !*** external "@material-ui/icons/CalendarToday" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CalendarToday");

/***/ }),

/***/ "@material-ui/icons/EmojiFlagsRounded":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/EmojiFlagsRounded" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/EmojiFlagsRounded");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/FitnessCenterRounded":
/*!**********************************************************!*\
  !*** external "@material-ui/icons/FitnessCenterRounded" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FitnessCenterRounded");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "@material-ui/icons/PauseRounded":
/*!**************************************************!*\
  !*** external "@material-ui/icons/PauseRounded" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PauseRounded");

/***/ }),

/***/ "@material-ui/icons/PeopleOutlineRounded":
/*!**********************************************************!*\
  !*** external "@material-ui/icons/PeopleOutlineRounded" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PeopleOutlineRounded");

/***/ }),

/***/ "@material-ui/icons/Place":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Place" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Place");

/***/ }),

/***/ "@material-ui/icons/PlaceRounded":
/*!**************************************************!*\
  !*** external "@material-ui/icons/PlaceRounded" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlaceRounded");

/***/ }),

/***/ "@material-ui/icons/PlayArrowRounded":
/*!******************************************************!*\
  !*** external "@material-ui/icons/PlayArrowRounded" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlayArrowRounded");

/***/ }),

/***/ "@material-ui/icons/Share":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Share" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

/***/ }),

/***/ "@material-ui/icons/StarBorderRounded":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/StarBorderRounded" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarBorderRounded");

/***/ }),

/***/ "@material-ui/lab/Rating":
/*!******************************************!*\
  !*** external "@material-ui/lab/Rating" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Rating");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "mapbox-gl":
/*!****************************!*\
  !*** external "mapbox-gl" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mapbox-gl");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-image":
/*!******************************!*\
  !*** external "react-image" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ })

/******/ });
//# sourceMappingURL=[slug].js.map