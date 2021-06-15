import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: "light",
    primary: {
      main: "#B4F8C8",
    },
    secondary: {
      main: "#B3C2F2"
    }
  },
});

export default theme;
