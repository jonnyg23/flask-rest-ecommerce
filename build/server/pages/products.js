(function() {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 9134:
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8549);
/* harmony import */ var _hooks_setInitTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(387);







const Products = ({
  initialAppTheme
}) => {
  (0,_hooks_setInitTheme__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(initialAppTheme);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        variant: "h3",
        color: "textSecondary",
        gutterBottom: true,
        children: "Products"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        variant: "body1",
        children: "Dev in Progress!"
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Products);
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
var __webpack_exports__ = __webpack_require__.X(0, [301,831,927,141], function() { return __webpack_exec__(9134); });
module.exports = __webpack_exports__;

})();