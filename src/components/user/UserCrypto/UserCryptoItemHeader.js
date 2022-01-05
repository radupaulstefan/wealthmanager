import { Col, Row, Container } from 'react-bootstrap';

const UserCryptoItemHeader = props => {
  return (
    <Container>
      <Row style={{ fontSize: 18, fontWeight: 'bold' }}>
        <Col className="border border-secondary">Symbol</Col>
        <Col className="border border-secondary">Price</Col>
        <Col className="border border-secondary">Available coins</Col>
        <Col className="border border-secondary">Total</Col>
      </Row>
    </Container>
  );
};

export default UserCryptoItemHeader;
