import { createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    // type: "dark",
    primary: {
      dark: "#00242C",
      main: "#002A32",
      light: "#004654",
    },
    secondary: {
      dark: "#9BAEEE",
      main: "#B3C2F2",
      light: "#CAD4F6",
    },
    background: {
      paper: "rgba(66, 66, 66, 0.4)",
    },
  },
});

export default theme;
