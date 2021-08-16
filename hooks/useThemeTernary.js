import { CustomThemeContext } from "../context/CustomThemeProvider";

const useThemeTernary = (lightStyle, darkStyle) => {
  //  Use `theme` in props if necessary.
  const ThemeContext = CustomThemeContext;
  console.log(ThemeContext.appTheme);

  return ThemeContext.appTheme === "light" ? lightStyle : darkStyle;
};

export default useThemeTernary;
