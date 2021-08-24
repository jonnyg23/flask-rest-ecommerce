exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 7927:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": function() { return /* binding */ CustomThemeContext; },
  "Z": function() { return /* binding */ context_CustomThemeProvider; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8604);
// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__(5267);
;// CONCATENATED MODULE: ./themes/dark.js


const theme = (0,styles_.createTheme)({
  typography: {
    useNextVariants: true,
    button: {
      textTransform: "none"
    }
  },
  palette: {
    // type: "dark",
    primary: {
      dark: "#00242C",
      main: "#002A32",
      light: "#004654",
      contrastText: "#fff"
    },
    secondary: {
      dark: "#9BAEEE",
      main: "#B3C2F2",
      light: "#CAD4F6"
    },
    text: {
      primary: "#fff",
      secondary: colors_.teal.A700
    },
    background: {
      paper: "#002A32",
      default: colors_.grey.A700
    }
  }
});
/* harmony default export */ var dark = (theme);
// EXTERNAL MODULE: ./themes/light.js
var light = __webpack_require__(5831);
;// CONCATENATED MODULE: ./themes/index.js

 // TODO: Add system theme choice.
// import system from './system';

const themes = {
  dark: dark,
  light: light/* default */.Z // system

};
function getTheme(theme) {
  return themes[theme];
}
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
;// CONCATENATED MODULE: ./context/CustomThemeProvider.js





const CustomThemeContext = /*#__PURE__*/(0,external_react_.createContext)({
  // Set the default theme and setter.
  appTheme: "light",
  setTheme: null
});

const CustomThemeProvider = ({
  children,
  initialAppTheme
}) => {
  // State to hold selected theme
  const {
    0: themeName,
    1: _setThemeName
  } = (0,external_react_.useState)(initialAppTheme); // Retrieve theme object by theme name

  const theme = getTheme(themeName); // Wrap setThemeName to store new theme names as cookie.

  const setThemeName = name => {
    external_js_cookie_default().set("appTheme", name);

    _setThemeName(name);
  };

  const contextValue = {
    appTheme: themeName,
    setTheme: setThemeName
  };
  return /*#__PURE__*/jsx_runtime_.jsx(CustomThemeContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsx_runtime_.jsx(styles_.ThemeProvider, {
      theme: theme,
      children: children
    })
  });
};

/* harmony default export */ var context_CustomThemeProvider = (CustomThemeProvider);

/***/ })

};
;