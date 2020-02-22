webpackHotUpdate("static/development/pages/tour/[slug].js",{

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
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Map */ "./components/tour/Map.tsx");
/* harmony import */ var _Reviews__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Reviews */ "./components/tour/Reviews.tsx");
/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Prompt */ "./components/tour/Prompt.tsx");

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
  console.log("Toud data = ", data);
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Loading ...");

  if (data && data.getTour) {
    var _data$getTour = data.getTour,
        name = _data$getTour.name,
        price = _data$getTour.price,
        createdAt = _data$getTour.createdAt,
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
        lineNumber: 71
      },
      __self: this
    }, __jsx(_Cover__WEBPACK_IMPORTED_MODULE_6__["default"], {
      imageCover: imageCover,
      name: name,
      duration: duration,
      startLocation: startLocation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), __jsx("div", {
      className: classes.infoSection,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("div", {
      className: classes.factsAndGuides,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx(_QuickFacts__WEBPACK_IMPORTED_MODULE_7__["default"], {
      startDates: startDates,
      difficulty: difficulty,
      people: maxGroupSize,
      rating: ratingsAverage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }), __jsx(_TourGuides__WEBPACK_IMPORTED_MODULE_8__["default"], {
      guides: guides,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })), __jsx(_About__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: name,
      description: description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    })), __jsx(_Images__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), __jsx(_Map__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), __jsx(_Reviews__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), __jsx(_Prompt__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Tour);

/***/ })

})
//# sourceMappingURL=[slug].js.d222ce5d77e3eb16a42b.hot-update.js.map