import MainNavigation from './MainNavigation';
import { Container, Row } from 'react-bootstrap';

const Layout = props => {
  return (
    <Container fluid>
      <Row>
        <MainNavigation />
      </Row>
      <Row>
        <main>{props.children}</main>
      </Row>
    </Container>
  );
};
export default Layout;
