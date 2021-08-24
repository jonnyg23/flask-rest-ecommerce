(function() {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 2310:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4084);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_setInitTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(387);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4047);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5267);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_json_pretty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5192);
/* harmony import */ var react_json_pretty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_json_pretty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8549);











const useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__.makeStyles)(theme => ({
  image: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(0)
    }
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17)
  },
  button: {
    backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__.teal.A700,
    color: "white"
  },
  result: {
    display: "block",
    wordBreak: "break-all"
  }
}));

const Profile = ({
  initialAppTheme
}) => {
  (0,_hooks_setInitTheme__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(initialAppTheme);
  const classes = useStyles();
  const {
    user,
    error,
    isLoading
  } = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__.useUser)();
  if (isLoading) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.CircularProgress, {
      color: "primary"
    })
  });
  if (error) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    children: error.message
  });
  if (!user) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/api/auth/login",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
      children: "Login"
    })
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
      variant: "h3",
      color: "textSecondary",
      gutterBottom: true,
      children: "Profile"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
      children: [user.picture ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classes.image,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Avatar, {
          variant: "circle",
          alt: "Profile",
          src: user.picture,
          className: classes.large
        })
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
        mb: 3,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
          variant: "h2",
          children: user.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
          variant: "body1",
          children: ["Nickname: ", user.nickname]
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_3__.withPageAuthRequired)(Profile));
async function getServerSideProps({
  req,
  res
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

/***/ 5192:
/***/ (function(module) {

"use strict";
module.exports = require("react-json-pretty");;

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
var __webpack_exports__ = __webpack_require__.X(0, [301,831,927,141], function() { return __webpack_exec__(2310); });
module.exports = __webpack_exports__;

})();