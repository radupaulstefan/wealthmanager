import { Container, Col, Row } from 'react-bootstrap';
import CreateUser from '../components/user/CreateUser';

const SignUpPage = props => {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col md="auto" sd="auto">
          <CreateUser />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
