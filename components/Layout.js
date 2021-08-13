import NavBar from "./nav-bar";
import { Container } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const Layout = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <NavBar></NavBar>
      <Container style={{ marginTop: theme.spacing(4) }}>{children}</Container>
    </>
  );
};

export default Layout;
