import { Col, Row, Container } from 'react-bootstrap';

const UserStockItemHeader = props => {
  return (
    <Container>
      <Row style={{ fontSize: 18, fontWeight: 'bold' }}>
        <Col className="border border-secondary">Symbol</Col>
        <Col className="border border-secondary">Price</Col>
        <Col className="border border-secondary">Available units</Col>
        <Col className="border border-secondary">Total</Col>
      </Row>
    </Container>
  );
};

export default UserStockItemHeader;
