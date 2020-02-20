module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
  expanded
}) => {
  const classes = useStyles();
  return __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3___default.a, {
    in: expanded,
    timeout: "auto",
    unmountOnExit: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Method:"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xF3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Set aside off of the heat to let rest for 10 minutes, and then serve.")));
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

/***/ "./components/home/Home.tsx":
/*!**********************************!*\
  !*** ./components/home/Home.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TourCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TourCards */ "./components/home/TourCards.tsx");
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/Home.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  heroContent: {// padding: theme.spacing(8, 0, 6)
  }
}));

const Layout = ({
  nodeEnv
}) => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    maxWidth: "lg",
    component: "main",
    className: classes.heroContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_TourCards__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _utils_getHost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/getHost */ "./components/utils/getHost.ts");
/* harmony import */ var _Spotlights__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Spotlights */ "./components/home/Spotlights.tsx");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/styles */ "./components/utils/styles.ts");
/* harmony import */ var _CardCollapsible__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CardCollapsible */ "./components/home/CardCollapsible.tsx");
/* harmony import */ var _Difficulty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Difficulty */ "./components/home/Difficulty.tsx");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Actions */ "./components/home/Actions.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Header */ "./components/home/Header.tsx");
/* harmony import */ var _closestDate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./closestDate */ "./components/home/closestDate.ts");
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/TourCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


















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
    color: _utils_styles__WEBPACK_IMPORTED_MODULE_12__["colors"].mainBlack
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

  const closestTourDate = moment__WEBPACK_IMPORTED_MODULE_9___default()(Object(_closestDate__WEBPACK_IMPORTED_MODULE_17__["default"])(startDates)).format("MMMM YYYY");
  const place = startLocation && startLocation.description ? startLocation.description : "";
  const stops = locations ? locations.length : 0;
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 6,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_16__["default"], {
    name: name,
    createdAt: createdAt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8___default.a, {
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/tour/[slug]", `/tour/${slug}`);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.media,
    image: `${Object(_utils_getHost__WEBPACK_IMPORTED_MODULE_10__["default"])()}/img/tours/${imageCover}`,
    title: "Paella dish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, __jsx(_Difficulty__WEBPACK_IMPORTED_MODULE_14__["default"], {
    difficulty: difficulty,
    duration: duration,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    className: classes.summary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, summary))), __jsx(_Spotlights__WEBPACK_IMPORTED_MODULE_11__["default"], {
    date: closestTourDate,
    place: place,
    stops: stops,
    people: maxGroupSize,
    price: `${price}`.length < 5 ? price * 100 : price,
    ratingsAverage: ratingsAverage,
    ratingsQuantity: ratingsQuantity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }), __jsx(_Actions__WEBPACK_IMPORTED_MODULE_15__["default"], {
    handleExpandClick: handleExpandClick,
    expanded: expanded,
    slug: "the-sea-explorer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }), __jsx(_CardCollapsible__WEBPACK_IMPORTED_MODULE_13__["default"], {
    expanded: expanded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
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
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TourCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TourCard */ "./components/home/TourCard.tsx");

var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/TourCards.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const ALL_TOURS = apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"]`
  query ALL_TOURS {
    getAllTours {
      id
      name
      price
      rating
      ratingsAverage
      ratingsQuantity
      duration
      createdAt
      maxGroupSize
      summary
      imageCover
      difficulty
      startDates
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
  }
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
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Loading ...");
  const {
    getAllTours
  } = data;
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, getAllTours && getAllTours.length && getAllTours.map(tour => {
    return __jsx(_TourCard__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: tour.id
    }, tour, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home/Home */ "./components/home/Home.tsx");
var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Home = ({
  userAgent,
  nodeEnv
}) => {
  return __jsx(_components_home_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
    nodeEnv: nodeEnv,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  });
};

Home.getInitialProps = async ({
  req
}) => {
  // console.log("headers = ", req.headers);
  // console.log("req = ", req);
  // console.log("process.env = ", process.env);
  const nodeEnv = "development";
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return {
    userAgent,
    nodeEnv
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/abdulaliyev/web-projects/travel-portal/client/pages/index.tsx */"./pages/index.tsx");


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

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

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

/***/ "@material-ui/icons/Share":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Share" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

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

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map