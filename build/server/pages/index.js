(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1497:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(4047);
// EXTERNAL MODULE: external "react-json-pretty"
var external_react_json_pretty_ = __webpack_require__(5192);
var external_react_json_pretty_default = /*#__PURE__*/__webpack_require__.n(external_react_json_pretty_);
;// CONCATENATED MODULE: ./hooks/useAxios.js


const useAxios = ({
  api,
  method,
  url,
  data = null,
  config = null
}) => {
  const {
    0: response,
    1: setResponse
  } = (0,external_react_.useState)(null);
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)("");
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    const fetchData = async () => {
      try {
        api[method.toLowerCase()](url, JSON.parse(config), JSON.parse(data)).then(res => {
          setResponse(res.data);
        }).catch(err => {
          setError(err);
        }).finally(() => {
          setIsLoading(false);
        });
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [api, method, url, data, config]);
  return {
    response,
    error,
    isLoading
  };
};

/* harmony default export */ var hooks_useAxios = (useAxios);
;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./apis/axiosRequests.js

const backendApi = external_axios_default().create({
  baseURL: "http://localhost:5000"
});
// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__(5267);
;// CONCATENATED MODULE: ./components/ProductsButton.js





const ProductsButton = ({
  text,
  onClick
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
    variant: "contained",
    onClick: onClick,
    style: {
      backgroundColor: colors_.teal.A700,
      color: "white"
    },
    children: text
  });
};

/* harmony default export */ var components_ProductsButton = (ProductsButton);
// EXTERNAL MODULE: ./components/Layout.js + 14 modules
var Layout = __webpack_require__(8549);
// EXTERNAL MODULE: ./hooks/setInitTheme.js
var setInitTheme = __webpack_require__(387);
;// CONCATENATED MODULE: ./pages/index.js












const useStyles = (0,styles_.makeStyles)(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper
  }
}));

const Home = ({
  initialAppTheme
}) => {
  const classes = useStyles();
  const {
    0: url,
    1: setUrl
  } = (0,external_react_.useState)("/products");
  (0,setInitTheme/* default */.Z)(initialAppTheme); // Fetches data from backend Async

  const {
    response,
    isLoading
  } = hooks_useAxios({
    api: backendApi,
    method: "get",
    url: `${url}` // config: JSON.stringify({ requireAuthentication: true }),

  });
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Box, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "Welcome to Flask+NextJS Ecommerce Template"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "description",
          content: "Flask REST ecommerce website template"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Box, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "h3",
          color: "textSecondary",
          gutterBottom: true,
          children: "Welcome to Flask-Ecommerce!"
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "h5",
          gutterBottom: true,
          children: "This is the Flask+Nextjs Ecommerce REST Website template."
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
        container: true,
        spacing: 1,
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(components_ProductsButton, {
            text: "All Products",
            onClick: () => setUrl("/products")
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(components_ProductsButton, {
            text: "Mens Apparel",
            onClick: () => setUrl("/collections/mens-apparel")
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(components_ProductsButton, {
            text: "Womens Apparel",
            onClick: () => setUrl("/collections/womens-apparel")
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(components_ProductsButton, {
            text: "Holiday",
            onClick: () => setUrl("/collections/holiday")
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(components_ProductsButton, {
            text: "Misc",
            onClick: () => setUrl("/collections/misc")
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
        mt: 2,
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "h5",
          gutterBottom: true,
          children: "Example JSON Data Output:"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Paper, {
        elevation: 4,
        className: classes.paper,
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
          padding: 2,
          children: /*#__PURE__*/jsx_runtime_.jsx((external_react_json_pretty_default()), {
            id: "json-pretty",
            data: data,
            style: {
              overflow: "auto"
            }
          })
        })
      })]
    })
  });
};

/* harmony default export */ var pages = (Home);
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
var __webpack_exports__ = __webpack_require__.X(0, [301,831,927,141], function() { return __webpack_exec__(1497); });
module.exports = __webpack_exports__;

})();