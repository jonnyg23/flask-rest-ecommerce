import { createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    // type: "light",
    primary: {
      main: "#B4F8C8",
    },
    secondary: {
      main: orange[400],
    },
  },
});

export default theme;
