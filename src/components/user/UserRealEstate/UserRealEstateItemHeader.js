import { Col, Row, Container } from 'react-bootstrap';

const UserRealEstateItemHeader = props => {
  return (
    <Container>
      <Row style={{ fontSize: 18, fontWeight: 'bold' }}>
        <Col className="border border-secondary">Country</Col>
        <Col className="border border-secondary">City</Col>
        <Col className="border border-secondary">Type</Col>
        <Col className="border border-secondary">Monthly Debt</Col>
        <Col className="border border-secondary">Monthly Rent</Col>
        <Col className="border border-secondary">Cashflow</Col>
      </Row>
    </Container>
  );
};

export default UserRealEstateItemHeader;
