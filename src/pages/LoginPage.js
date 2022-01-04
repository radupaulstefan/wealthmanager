import Auth from '../components/user/Auth';
import { Container, Col, Row } from 'react-bootstrap';

const LoginPage = props => {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col md="auto" sd="auto">
          <Auth />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
