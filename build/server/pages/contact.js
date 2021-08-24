(function() {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 2465:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4047);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8549);
/* harmony import */ var _hooks_setInitTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(387);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8193);









const useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(theme => ({
  github: {
    width: "150px",
    backgroundColor: "black",
    color: "white"
  },
  linkedIn: {
    width: "150px",
    backgroundColor: "#0A66C2",
    color: "white"
  },
  email: {
    width: "150px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
}));

const Contact = ({
  initialAppTheme
}) => {
  const classes = useStyles();
  (0,_hooks_setInitTheme__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(initialAppTheme);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      variant: "h3",
      color: "textSecondary",
      gutterBottom: true,
      children: "Contact me!"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      container: true,
      direction: "column",
      justifyContent: "center",
      spacing: 2,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "contained",
          href: "https://www.linkedin.com/in/jonathan-gutierrez-b9412357/",
          className: classes.linkedIn,
          startIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__/* .AiFillLinkedin */ ._iD, {
            size: 30
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "button",
            display: "block",
            children: "LinkedIn"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "contained",
          href: "https://www.github.com/jonnyg23",
          className: classes.github,
          startIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__/* .AiOutlineGithub */ .idJ, {
            size: 30
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "button",
            display: "block",
            children: "Github"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "contained",
          href: "mailto:jonguti23@outlook.com?subject=Inquiry for Jonathan",
          className: classes.email,
          startIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__/* .AiOutlineMail */ .Dme, {
            size: 30
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "button",
            display: "block",
            children: "Email"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);
function getServerSideProps({
  req
}) {
  return {
    props: {
      initialAppTheme: req.cookies.appTheme || "light"
    }
  };
}

/***/ }),

/***/ 4084:
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

/***/ }),

/***/ 1731:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ 5267:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/colors");;

/***/ }),

/***/ 8604:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ 3521:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Brightness2TwoTone");;

/***/ }),

/***/ 3218:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Brightness5TwoTone");;

/***/ }),

/***/ 8237:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Home");;

/***/ }),

/***/ 4215:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Mail");;

/***/ }),

/***/ 1358:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Menu");;

/***/ }),

/***/ 7386:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Person");;

/***/ }),

/***/ 4319:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/ShoppingBasket");;

/***/ }),

/***/ 6082:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Storefront");;

/***/ }),

/***/ 4047:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ 4132:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/unstyled");;

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 9682:
/***/ (function(module) {

"use strict";
module.exports = require("react-responsive");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [301,193,831,927,141], function() { return __webpack_exec__(2465); });
module.exports = __webpack_exports__;

})();