import { Col, Row, Container } from 'react-bootstrap';

const UserCashItemHeader = props => {
  return (
    <Container>
      <Row style={{ fontSize: 18, fontWeight: 'bold' }}>
        <Col className="border border-secondary">Currency</Col>
        <Col className="border border-secondary">Amount</Col>
        <Col className="border border-secondary">Interest Rate</Col>
        <Col className="border border-secondary">Annual Inflation</Col>
        <Col className="border border-secondary">Next year value</Col>
      </Row>
    </Container>
  );
};

export default UserCashItemHeader;
