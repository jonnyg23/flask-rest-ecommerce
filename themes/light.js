import { createTheme } from "@material-ui/core/styles";
import { orange, teal, grey } from "@material-ui/core/colors";

const theme = createTheme({
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       body: {
  //         background: "#fff",
  //         overflowX: "hidden",
  //         padding: "0 !important",
  //       },
  //       "#__next": {
  //         minHeight: "100vh",
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "space-between",
  //       },
  //       main: {
  //         flex: "1",
  //         // background: "#fff",
  //       },
  //     },
  //   },
  // },
  typography: {
    useNextVariants: true,
    button: {
      textTransform: "none",
    },
  },
  palette: {
    // type: "light",
    primary: {
      dark: "#98F5B4",
      main: "#B4F8C8",
      light: "#DFFCE8",
      contrastText: "#000",
    },
    secondary: {
      dark: orange[500],
      main: orange[400],
      light: orange[300],
    },
    text: {
      primary: "#000",
      secondary: teal["A700"],
    },
    background: {
      paper: grey["A200"],
      default: "#fff",
    },
  },
});

export default theme;
