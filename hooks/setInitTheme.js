import { useEffect, useContext } from "react";
import { CustomThemeContext } from "../context/CustomThemeProvider";

export default function setInitTheme(initialAppTheme) {
  const ThemeContext = useContext(CustomThemeContext);

  useEffect(() => {
    ThemeContext.setTheme(initialAppTheme);
  }, []);
}
