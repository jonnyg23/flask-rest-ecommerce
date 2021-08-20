import { createTheme } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    useNextVariants: true,
    button: {
      textTransform: "none",
    },
  },
  palette: {
    // type: "dark",
    primary: {
      dark: "#00242C",
      main: "#002A32",
      light: "#004654",
      contrastText: "#fff",
    },
    secondary: {
      dark: "#9BAEEE",
      main: "#B3C2F2",
      light: "#CAD4F6",
    },
    text: {
      primary: "#fff",
      secondary: teal["A700"],
    },
    background: {
      paper: "#002A32",
    },
  },
});

export default theme;
