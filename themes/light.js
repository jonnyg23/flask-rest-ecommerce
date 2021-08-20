import { createTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const theme = createTheme({
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
    background: {
      paper: "#fff",
    },
  },
});

export default theme;
