import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export const SmallScreen = ({ children }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 991 });
  return isSmallScreen ? children : null;
};

// export const isPortrait = () =>
//   useMediaQuery({ query: "(orientation: portrait)" });

// export const isRetina = () =>
//   useMediaQuery({ query: "(min-resolution: 2dppx)" });
