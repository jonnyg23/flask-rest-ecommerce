exports.id = 141;
exports.ids = [141];
exports.modules = {

/***/ 8549:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(4047);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/NavLink.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const NavLink = (_ref) => {
  let {
    href,
    exact,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "exact", "children"]);

  const {
    pathname
  } = (0,router_.useRouter)();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " active";
  }

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: href,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", _objectSpread(_objectSpread({}, props), {}, {
      children: children
    }))
  });
};

NavLink.defaultProps = {
  exact: false
};
// EXTERNAL MODULE: external "@material-ui/icons/Storefront"
var Storefront_ = __webpack_require__(6082);
var Storefront_default = /*#__PURE__*/__webpack_require__.n(Storefront_);
// EXTERNAL MODULE: external "@auth0/nextjs-auth0"
var nextjs_auth0_ = __webpack_require__(4084);
;// CONCATENATED MODULE: ./components/ProfileNav.js






const ProfileNav = () => {
  const {
    user,
    error,
    isLoading
  } = (0,nextjs_auth0_.useUser)();
  return user ? /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
    href: "/profile",
    exact: true,
    style: {
      textDecoration: "none",
      color: "inherit"
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
      children: "Profile"
    })
  }) : null;
};

/* harmony default export */ var components_ProfileNav = (ProfileNav);
;// CONCATENATED MODULE: ./components/MainNav.js







const useStyles = (0,styles_.makeStyles)(theme => ({
  activeLink: {
    textTransform: "none",
    color: theme.palette.secondary // "&.active": {
    //   color: theme.palette.secondary,
    // },

  },
  inactiveLink: {
    textTransform: "none",
    textDecoration: "none",
    color: theme.palette.primary.contrastText
  }
}));

const MainNav = () => {
  const classes = useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
    display: "flex",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
      container: true,
      direction: "row",
      justify: "flex-start",
      alignItems: "center",
      spacing: 4,
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          href: "/",
          exact: true,
          className: classes.inactiveLink // activeClassName={classes.activeLink}
          ,
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
            children: "Home"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          href: "/products",
          exact: true,
          className: classes.inactiveLink // activeClassName={classes.activeLink}
          ,
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
            children: "Products"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          href: "/contact",
          exact: true,
          className: classes.inactiveLink // activeClassName={classes.activeLink}
          ,
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
            children: "Contact"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(components_ProfileNav, {})
      })]
    })
  });
};

/* harmony default export */ var components_MainNav = (MainNav);
// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__(5267);
;// CONCATENATED MODULE: ./components/LoginButton.js






const LoginButton_useStyles = (0,styles_.makeStyles)(theme => ({
  root: {
    backgroundColor: colors_.indigo[500],
    color: "white"
  }
}));

const LoginButton = ({
  user,
  loading
}) => {
  const classes = LoginButton_useStyles();
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
    variant: "contained",
    className: classes.root,
    onClick: () => router.push('/api/auth/login'),
    children: "Log In"
  });
};

/* harmony default export */ var components_LoginButton = (LoginButton);
;// CONCATENATED MODULE: ./components/LogoutButton.js







const LogoutButton_useStyles = (0,styles_.makeStyles)(theme => ({
  root: {
    backgroundColor: colors_.pink[600],
    color: "white"
  }
}));

const LogoutButton = () => {
  const classes = LogoutButton_useStyles();
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
    variant: "contained",
    className: classes.root,
    onClick: () => router.push('/api/auth/logout'),
    children: "Log Out"
  });
};

/* harmony default export */ var components_LogoutButton = (LogoutButton);
;// CONCATENATED MODULE: ./components/AuthButton.js






const AuthButton = () => {
  const {
    user,
    error,
    isLoading
  } = (0,nextjs_auth0_.useUser)();
  return user ? /*#__PURE__*/jsx_runtime_.jsx(components_LogoutButton, {
    user: user,
    loading: isLoading
  }) : /*#__PURE__*/jsx_runtime_.jsx(components_LoginButton, {
    user: user,
    loading: isLoading
  });
};

/* harmony default export */ var components_AuthButton = (AuthButton);
;// CONCATENATED MODULE: ./components/AuthNav.js





const AuthNav = () => /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
  container: true,
  justifyContent: "flex-end",
  alignItems: "center",
  children: /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
    item: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(components_AuthButton, {})
  })
});

/* harmony default export */ var components_AuthNav = (AuthNav);
// EXTERNAL MODULE: external "@material-ui/icons/Brightness5TwoTone"
var Brightness5TwoTone_ = __webpack_require__(3218);
var Brightness5TwoTone_default = /*#__PURE__*/__webpack_require__.n(Brightness5TwoTone_);
// EXTERNAL MODULE: external "@material-ui/icons/Brightness2TwoTone"
var Brightness2TwoTone_ = __webpack_require__(3521);
var Brightness2TwoTone_default = /*#__PURE__*/__webpack_require__.n(Brightness2TwoTone_);
// EXTERNAL MODULE: ./context/CustomThemeProvider.js + 2 modules
var CustomThemeProvider = __webpack_require__(7927);
;// CONCATENATED MODULE: ./components/ThemeModeToggle.js







const ThemeModeToggle_useStyles = (0,styles_.makeStyles)(theme => ({
  light: {
    color: theme.palette.secondary.main
  },
  dark: {
    color: theme.palette.secondary.main
  }
}));

const ThemeModeToggle = ({
  fontSize
}) => {
  const classes = ThemeModeToggle_useStyles();
  const {
    appTheme,
    setTheme
  } = (0,external_react_.useContext)(CustomThemeProvider/* CustomThemeContext */.$);

  const handleThemeChange = (appTheme, setTheme) => {
    if (appTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(core_.IconButton, {
    onClick: () => handleThemeChange(appTheme, setTheme),
    children: appTheme === "light" ? /*#__PURE__*/jsx_runtime_.jsx((Brightness5TwoTone_default()), {
      fontSize: fontSize,
      className: classes.light
    }) : /*#__PURE__*/jsx_runtime_.jsx((Brightness2TwoTone_default()), {
      fontSize: fontSize,
      className: classes.dark
    })
  });
};

/* harmony default export */ var components_ThemeModeToggle = (ThemeModeToggle);
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(9682);
;// CONCATENATED MODULE: ./components/Responsive.js

const Desktop = ({
  children
}) => {
  const isDesktop = (0,external_react_responsive_.useMediaQuery)({
    minWidth: 992
  });
  return isDesktop ? children : null;
};
const Tablet = ({
  children
}) => {
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 991
  });
  return isTablet ? children : null;
};
const Mobile = ({
  children
}) => {
  const isMobile = useMediaQuery({
    maxWidth: 767
  });
  return isMobile ? children : null;
};
const SmallScreen = ({
  children
}) => {
  const isSmallScreen = (0,external_react_responsive_.useMediaQuery)({
    maxWidth: 991
  });
  return isSmallScreen ? children : null;
}; // export const isPortrait = () =>
//   useMediaQuery({ query: "(orientation: portrait)" });
// export const isRetina = () =>
//   useMediaQuery({ query: "(min-resolution: 2dppx)" });
;// CONCATENATED MODULE: ./hooks/user.js

async function fetchUser(cookie = "") {
  if (false) {}

  const res = await fetch("/api/me", cookie ? {
    headers: {
      cookie
    }
  } : {});

  if (!res.ok) {
    delete window.__user;
    return null;
  }

  const json = await res.json();

  if (false) {}

  return json;
}
function useFetchUser({
  required
} = {}) {
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(() => !( false && 0));
  const {
    0: user,
    1: setUser
  } = (0,external_react_.useState)(() => {
    if (true) {
      return null;
    }

    return window.__user || null;
  });
  (0,external_react_.useEffect)(() => {
    if (!loading && user) {
      return;
    }

    setLoading(true);
    let isMounted = true;
    fetchUser().then(user => {
      // Only set the user if the component is still mounted
      if (isMounted) {
        // When the user is not logged in but login is required
        if (required && !user) {
          window.location.href = "/api/auth/login";
          return;
        }

        setUser(user);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  return {
    user,
    loading
  };
}
// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__(1358);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__(8237);
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_);
// EXTERNAL MODULE: external "@material-ui/icons/ShoppingBasket"
var ShoppingBasket_ = __webpack_require__(4319);
var ShoppingBasket_default = /*#__PURE__*/__webpack_require__.n(ShoppingBasket_);
// EXTERNAL MODULE: external "@material-ui/icons/Mail"
var Mail_ = __webpack_require__(4215);
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);
// EXTERNAL MODULE: external "@material-ui/icons/Person"
var Person_ = __webpack_require__(7386);
var Person_default = /*#__PURE__*/__webpack_require__.n(Person_);
;// CONCATENATED MODULE: ./components/HamburgerMenu.js




function HamburgerMenu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function HamburgerMenu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { HamburgerMenu_ownKeys(Object(source), true).forEach(function (key) { HamburgerMenu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { HamburgerMenu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function HamburgerMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













 // This StyledMenu is the style for the menu content box

const StyledMenu = (0,styles_.withStyles)(theme => ({
  paper: {
    backgroundColor: theme.palette.primary.light,
    border: "0px solid #FCF0F0",
    borderRadius: 10
  }
}))(props => /*#__PURE__*/jsx_runtime_.jsx(core_.Menu, HamburgerMenu_objectSpread({
  elevation: 2,
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "top",
    horizontal: "center"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center"
  }
}, props))); // This StyledMenuItem is the style for the menu's items

const StyledMenuItem = (0,styles_.withStyles)(theme => ({
  root: {
    display: "flex",
    width: "100%",
    color: theme.palette.primary.contrastText,
    "&:hover": {
      display: "flex",
      width: "100%",
      backgroundColor: colors_.teal.A700,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(core_.MenuItem); // Bottom Menu Items styling

const BottomMenuItem = (0,styles_.withStyles)(theme => ({
  root: {
    display: "flex",
    width: "100%",
    "&:hover": {
      display: "flex",
      width: "100%",
      backgroundColor: "transparent"
    }
  }
}))(core_.MenuItem); // This 'useStyles' is for the style of the hamburger menu button
// This style is triggered with 'classes.root'

const HamburgerMenu_useStyles = (0,styles_.makeStyles)(theme => ({
  root: {
    color: "#ffff",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.3)"
    },
    borderRadius: 30,
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.3)"
  },
  link: {
    display: "flex",
    flexGrow: 1,
    width: "100%",
    textTransform: "none",
    textDecoration: "none",
    color: theme.palette.secondary.main
  },
  menuIcon: {
    color: theme.palette.primary.contrastText
  },
  subIcons: {
    color: theme.palette.grey[500]
  }
}));
function HamburgerMenu() {
  const {
    0: anchorEl,
    1: setAnchorEl
  } = (0,external_react_.useState)(null);
  const {
    user,
    loading
  } = useFetchUser();
  const classes = HamburgerMenu_useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
      "aria-controls": "customized-menu",
      "aria-haspopup": "true",
      variant: "contained",
      className: classes.root,
      onClick: handleClick,
      children: /*#__PURE__*/jsx_runtime_.jsx((Menu_default()), {
        className: classes.menuIcon
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledMenu, {
      id: "customized-menu",
      anchorEl: anchorEl,
      keepMounted: true,
      open: Boolean(anchorEl),
      onClose: handleClose,
      children: [/*#__PURE__*/jsx_runtime_.jsx(NavLink, {
        exact: true,
        className: classes.link,
        href: "/",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledMenuItem, {
          onClick: handleClose,
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx((Home_default()), {
              fontSize: "medium",
              className: classes.subIcons
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItemText, {
            primary: "Home"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
        exact: true,
        className: classes.link,
        href: "/products",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledMenuItem, {
          onClick: handleClose,
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx((ShoppingBasket_default()), {
              fontSize: "medium",
              className: classes.subIcons
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItemText, {
            primary: "Products"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
        exact: true,
        className: classes.link,
        href: "/contact",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledMenuItem, {
          onClick: handleClose,
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx((Mail_default()), {
              fontSize: "medium",
              className: classes.subIcons
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItemText, {
            primary: "Contact"
          })]
        })
      }), user ? /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
        exact: true,
        className: classes.link,
        href: "/profile",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledMenuItem, {
          onClick: handleClose,
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.ListItemIcon, {
            children: /*#__PURE__*/jsx_runtime_.jsx((Person_default()), {
              fontSize: "medium"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItemText, {
            primary: "Profile"
          })]
        })
      }) : null, /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
        container: true,
        direction: "row",
        justify: "space-between",
        alignItems: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          xs: 6,
          children: /*#__PURE__*/jsx_runtime_.jsx(BottomMenuItem, {
            onClick: handleClose,
            children: /*#__PURE__*/jsx_runtime_.jsx(components_AuthButton, {})
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          item: true,
          xs: 6,
          children: /*#__PURE__*/jsx_runtime_.jsx(BottomMenuItem, {
            onClick: handleClose,
            children: /*#__PURE__*/jsx_runtime_.jsx(components_ThemeModeToggle, {
              fontSize: "large"
            })
          })
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/NavBar.js












const NavBar_useStyles = (0,styles_.makeStyles)(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: 0
    }
  },
  appBar: {
    backgroundColor: theme.palette.primary.main
  },
  icon: {
    color: theme.palette.primary.contrastText
  },
  inactiveLink: {
    textTransform: "none",
    textDecoration: "none",
    color: theme.palette.primary.contrastText
  }
}));

const NavBar = () => {
  const classes = NavBar_useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx(core_.AppBar, {
    position: "static",
    elevation: 3,
    className: classes.appBar,
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.Toolbar, {
      children: /*#__PURE__*/jsx_runtime_.jsx(core_.Container, {
        className: classes.root,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
          container: true,
          justify: "center",
          alignItems: "center",
          spacing: 2,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Desktop, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
              item: true,
              xs: 1,
              children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
                href: "/",
                exact: true,
                className: classes.inactiveLink,
                children: /*#__PURE__*/jsx_runtime_.jsx((Storefront_default()), {
                  fontSize: "large",
                  className: classes.icon
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
              item: true,
              xs: 7,
              children: /*#__PURE__*/jsx_runtime_.jsx(components_MainNav, {})
            }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
              item: true,
              xs: 3,
              children: /*#__PURE__*/jsx_runtime_.jsx(components_AuthNav, {})
            }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
              item: true,
              xs: 1,
              children: /*#__PURE__*/jsx_runtime_.jsx(components_ThemeModeToggle, {
                fontSize: "large"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SmallScreen, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
              item: true,
              xs: 2,
              children: /*#__PURE__*/jsx_runtime_.jsx((Storefront_default()), {
                fontSize: "medium",
                className: classes.icon
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
              container: true,
              item: true,
              xs: 10,
              justifyContent: "flex-end",
              children: /*#__PURE__*/jsx_runtime_.jsx(HamburgerMenu, {})
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ var components_NavBar = (NavBar);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(9583);
;// CONCATENATED MODULE: ./components/types.js
const GITHUB_URL = "https://github.com/jonnyg23";
const LINKEDIN_URL = "https://www.linkedin.com/in/jonathan-gutierrez-b9412357/";
const EMAIL_ADDRESS = "jonguti23@outlook.com";
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var fi_index_esm = __webpack_require__(6893);
;// CONCATENATED MODULE: ./components/Footer.js









const Footer_useStyles = (0,styles_.makeStyles)(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    position: "relative",
    overflow: "hidden",
    padding: "1em 0"
  },
  copyrightName: {
    color: colors_.teal.A700,
    marginRight: 6
  },
  copyrightYear: {
    color: theme.palette.secondary.main
  }
}));

const Footer = () => {
  const classes = Footer_useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.footer,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
      container: true,
      justifyContent: "center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.IconButton, {
          href: GITHUB_URL,
          color: "inherit",
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
            display: "flex",
            border: 2,
            borderRadius: 50,
            p: 0.5,
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaGithub */.hJX, {
              size: 30
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.IconButton, {
          href: "https://instagram.com/jonnyg_23",
          color: "inherit",
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
            display: "flex",
            border: 2,
            borderRadius: 50,
            p: 0.5,
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaInstagram */.Zf_, {
              size: 30
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.IconButton, {
          href: LINKEDIN_URL,
          color: "inherit",
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Box, {
            display: "flex",
            border: 2,
            borderRadius: 50,
            p: 0.5,
            children: /*#__PURE__*/jsx_runtime_.jsx(fi_index_esm/* FiLinkedin */.qOw, {
              size: 30
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Box, {
      display: "flex",
      flexDirection: "row",
      mt: 2,
      justifyContent: "center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "body1",
        className: classes.copyrightName,
        children: "Jonathan Gutierrez"
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "body1",
        className: classes.copyrightYear,
        children: "\xA9 2021"
      })]
    })]
  });
};

/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: external "@material-ui/unstyled"
var unstyled_ = __webpack_require__(4132);
;// CONCATENATED MODULE: ./components/Layout.js











const Layout_useStyles = (0,styles_.makeStyles)(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(10)
  }
}));

const Layout = ({
  children,
  title,
  description,
  ogImage,
  url
}) => {
  // Website URL
  const pageUrl = "http://localhost:3000"; // When you share this page on Facebook, you will see this image

  const ogImg = "https://i.imgur.com/1H2TK2B.png";
  const classes = Layout_useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        className: "jsx-1682160654",
        children: title ? title : "Template - Next.js and Material-UI with Header & Footer"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: description ? description : "This is a Template using Next.js and Material-UI with Header and Footer.",
        className: "jsx-1682160654"
      }, "description"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: title ? title : "Template - Next.js and Material-UI with Header and Footer",
        className: "jsx-1682160654"
      }, "og:title"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: url ? url : pageUrl,
        className: "jsx-1682160654"
      }, "og:url"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: ogImage ? ogImage : ogImg,
        className: "jsx-1682160654"
      }, "og:image"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: description ? description : "This is a Template using Next.js and Material-UI with Header and Footer.",
        className: "jsx-1682160654"
      }, "og:description")]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_NavBar, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "jsx-1682160654",
      children: /*#__PURE__*/jsx_runtime_.jsx(core_.Container, {
        className: classes.container,
        children: children
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(unstyled_.NoSsr, {
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "1682160654",
      children: ["html,body{overflow-x:hidden;padding:0 !important;}", "#__next{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", "main{-webkit-flex:1;-ms-flex:1;flex:1;}"]
    })]
  });
};

/* harmony default export */ var components_Layout = (Layout);

/***/ }),

/***/ 387:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ setInitTheme; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_CustomThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7927);


function setInitTheme(initialAppTheme) {
  const ThemeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_CustomThemeProvider__WEBPACK_IMPORTED_MODULE_1__/* .CustomThemeContext */ .$);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ThemeContext.setTheme(initialAppTheme);
  }, []);
}

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;