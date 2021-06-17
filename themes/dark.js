import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: "dark",
    primary: {
      main: "#002A32",
    },
    secondary: {
      main: "#B3C2F2",
    },
  },
});

export default theme;
