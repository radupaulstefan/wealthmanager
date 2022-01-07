import { Col, Row, Container } from 'react-bootstrap';
import { SITE_THEME } from '../../../helpers/constants';

const UserRealEstateItemHeader = props => {
  return (
    <Container>
      <Row style={{ fontSize: 18, fontWeight: 'bold' }}>
        <Col className={`border border-${SITE_THEME}`}>Country</Col>
        <Col className={`border border-${SITE_THEME}`}>City</Col>
        <Col className={`border border-${SITE_THEME}`}>Type</Col>
        <Col className={`border border-${SITE_THEME}`}>Monthly Debt</Col>
        <Col className={`border border-${SITE_THEME}`}>Monthly Rent</Col>
        <Col className={`border border-${SITE_THEME}`}>Cashflow</Col>
      </Row>
    </Container>
  );
};

export default UserRealEstateItemHeader;
