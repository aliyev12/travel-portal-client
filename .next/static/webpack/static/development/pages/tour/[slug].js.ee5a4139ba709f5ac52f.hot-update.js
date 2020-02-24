webpackHotUpdate("static/development/pages/tour/[slug].js",{

/***/ "./components/tour/Images.tsx":
/*!************************************!*\
  !*** ./components/tour/Images.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helpers */ "./components/utils/helpers.ts");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "/Users/abdulaliyev/web-projects/travel-portal/client/components/tour/Images.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







var sliderSettings = {
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 2,
  pauseOnHover: true,
  pauseOnFocus: true
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    Images: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "5rem 0"
    },
    sliderContainer: {
      height: "200px",
      width: "300px"
    },
    image: {// height: "200px"
    }
  };
});

var Images = function Images(_ref) {
  var images = _ref.images;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(true),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      playing = _React$useState2[0],
      setPlaying = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      slickImages = _React$useState4[0],
      setSlickImages = _React$useState4[1];

  var classes = useStyles();
  var slider;
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    var imagesArr = [];

    if (images && images.length && _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(images)) {
      images.forEach(function (img) {
        imagesArr.push(__jsx("div", {
          key: img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
          src: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["imgUrl"])("tours", img),
          alt: img,
          className: classes.image,
          width: 200,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        })));
      });
    }

    setSlickImages(imagesArr);
  }, [images]);

  var play = function play() {
    return slider.slickPlay();
  };

  var pause = function pause() {
    return slider.slickPause();
  };

  return __jsx("div", {
    className: classes.Images,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: classes.sliderContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: function ref(sl) {
      return slider = sl;
    }
  }, sliderSettings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), slickImages && slickImages.length ? slickImages : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Images);

/***/ })

})
//# sourceMappingURL=[slug].js.ee5a4139ba709f5ac52f.hot-update.js.map