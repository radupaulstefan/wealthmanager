import { Col, Row, Container } from 'react-bootstrap';
import { SITE_THEME } from '../../../helpers/constants';

const UserStockItemHeader = props => {
  return (
    <Container>
      <Row style={{ fontSize: 18, fontWeight: 'bold' }}>
        <Col md="2" className={`border border-${SITE_THEME}`}>
          Symbol
        </Col>
        <Col md="2" className={`border border-${SITE_THEME}`}>
          Price
        </Col>
        <Col md="4" className={`border border-${SITE_THEME}`}>
          Units
        </Col>
        <Col md="3" className={`border border-${SITE_THEME}`}>
          Total
        </Col>
        <Col lg="1"></Col>
      </Row>
    </Container>
  );
};

export default UserStockItemHeader;
