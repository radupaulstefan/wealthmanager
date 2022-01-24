import MainNavigation from "./MainNavigation";
import MenuBar from "./MenuBar";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const userLoggedIn = useSelector((state) => state.currentUser.userLoggedIn);
  const homePageMode = useSelector((state) => state.currentUser.homePageMode);
  return (
    <Container fluid>
      <MainNavigation />
      {userLoggedIn && homePageMode && <MenuBar />}

      <main>{props.children}</main>
    </Container>
  );
};
export default Layout;
