(function() {
var exports = {};
exports.id = 712;
exports.ids = [712];
exports.modules = {

/***/ 1410:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4084);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["Z"] = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.initAuth0)({
  secret: "813c08f6ef042902eec471b94ddfca69",
  issuerBaseURL: "https://jg23-dev.us.auth0.com",
  baseURL: "http://localhost:3000",
  clientID: "JaMwje4S2A7aczte32P5vpENJaMNfB9Q",
  clientSecret: "XoDDYeiKxkjEjEtYInkqwwVpRBBD3exUMPIzL_zontXFigXenje2e6-dDDszuYN0",
  routes: {
    callback: "/api/auth/callback" || 0,
    postLogoutRedirect: "/" || 0
  },
  authorizationParams: {
    response_type: "code",
    scope: "openid profile"
  },
  session: {
    absoluteDuration: "7200"
  }
}));

/***/ }),

/***/ 6427:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ callback; }
/* harmony export */ });
/* harmony import */ var _hooks_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1410);

async function callback(req, res) {
  try {
    await _hooks_auth0__WEBPACK_IMPORTED_MODULE_0__/* .default.handleCallback */ .Z.handleCallback(req, res, {
      redirectTo: "/"
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}

/***/ }),

/***/ 4084:
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(6427));
module.exports = __webpack_exports__;

})();