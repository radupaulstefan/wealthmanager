import MainNavigation from './MainNavigation';
import MenuBar from './MenuBar';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Layout = props => {
  const userLoggedIn = useSelector(state => state.currentUser.userLoggedIn);
  const homePageMode = useSelector(state => state.currentUser.homePageMode);
  return (
    <Container>
      <Row>
        <MainNavigation />
      </Row>
      <Row>{userLoggedIn && homePageMode && <MenuBar />}</Row>
      <Row>
        <Col className="p-0">
          <main>{props.children}</main>
        </Col>
      </Row>
    </Container>
  );
};
export default Layout;
