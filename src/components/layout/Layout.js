import MainNavigation from './MainNavigation';
import SideBar from './SideBar';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Layout = props => {
  const userLoggedIn = useSelector(state => state.currentUser.userLoggedIn);
  return (
    <Container fluid>
      <Row>
        <MainNavigation />
      </Row>
      <Row>
        <Col lg="1">{userLoggedIn && <SideBar />}</Col>
        <Col className="p-0">
          <main>{props.children}</main>
        </Col>
      </Row>
    </Container>
  );
};
export default Layout;
