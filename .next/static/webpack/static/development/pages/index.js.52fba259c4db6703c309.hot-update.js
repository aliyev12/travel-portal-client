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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Share */ "./node_modules/@material-ui/icons/Share.js");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");


var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/home/Actions.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
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
        color: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_10___default.a[500]
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      liked = _React$useState2[0],
      setLiked = _React$useState2[1]; // const ButtonLink = ({ children }) => (
  //   <Link href={"/tour/[slug]"} as={`tour/${slug}`} prefetch>
  //     <a className={classes.anchor}>{children}</a>
  //   </Link>
  // );


  return __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disableSpacing: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-label": "add to favorites",
    onClick: function onClick() {
      return setLiked(function (l) {
        return !l;
      });
    },
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.like, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.liked, liked)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-label": "share",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), "...", __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: "hello",
    containerElement: __jsx(MyLink, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.expand, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.expandOpen, expanded)),
    onClick: handleExpandClick,
    "aria-expanded": expanded,
    "aria-label": "show more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
false,

/***/ "./node_modules/core-js/library/fn/map.js":
false,

/***/ "./node_modules/core-js/library/fn/object/create.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
false,

/***/ "./node_modules/core-js/library/fn/object/keys.js":
false,

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
false,

/***/ "./node_modules/core-js/library/fn/promise.js":
false,

/***/ "./node_modules/core-js/library/fn/reflect/construct.js":
false,

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
false,

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
false,

/***/ "./node_modules/core-js/library/fn/weak-map.js":
false,

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_bind.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-weak.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection.js":
false,

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_for-of.js":
false,

/***/ "./node_modules/core-js/library/modules/_invoke.js":
false,

/***/ "./node_modules/core-js/library/modules/_microtask.js":
false,

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
false,

/***/ "./node_modules/core-js/library/modules/_perform.js":
false,

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-species.js":
false,

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
false,

/***/ "./node_modules/core-js/library/modules/_task.js":
false,

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
false,

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.map.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.reflect.construct.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.weak-map.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.weak-map.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.weak-map.of.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/native-url/dist/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/next/node_modules/react-is/index.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false

})
//# sourceMappingURL=index.js.52fba259c4db6703c309.hot-update.js.map