webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/Actions.tsx":
/*!*************************************!*\
  !*** ./components/home/Actions.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Share */ "./node_modules/@material-ui/icons/Share.js");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);




var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/Actions.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;








 // import { ButtonLink } from "../common/ButtonLink";



/**
 * We need to Omit from the MUI Button the {href} prop
 * as we have to handle routing with Next.js Router
 * so we block the possibility to specify an href.
 */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
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
        color: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_12___default.a[500]
      }
    },
    anchor: {}
  };
});

var Actions = function Actions(_ref) {
  var handleExpandClick = _ref.handleExpandClick,
      expanded = _ref.expanded,
      slug = _ref.slug;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      liked = _React$useState2[0],
      setLiked = _React$useState2[1]; // const ButtonLink = ({ children }) => (
  //   <Link href={"/tour/[slug]"} as={`tour/${slug}`} prefetch>
  //     <a className={classes.anchor}>{children}</a>
  //   </Link>
  // );


  var ButtonLink = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function (_ref2, ref) {
    var href = _ref2.href,
        as = _ref2.as,
        prefetch = _ref2.prefetch,
        props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, ["href", "as", "prefetch"]);

    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
      href: href,
      as: as,
      prefetch: prefetch,
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      ref: ref
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    })));
  });
  ButtonLink.displayName = "ButtonLink";
  return __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disableSpacing: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-label": "add to favorites",
    onClick: function onClick() {
      return setLiked(function (l) {
        return !l;
      });
    },
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.like, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.liked, liked)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-label": "share",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: ButtonLink // className={classes.detailsBtn}
    ,
    variant: "contained",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Details"), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.expand, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.expandOpen, expanded)),
    onClick: handleExpandClick,
    "aria-expanded": expanded,
    "aria-label": "show more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ })

})
//# sourceMappingURL=index.js.681298f67151e1d7ec3d.hot-update.js.map