import { Col, Row, Container } from 'react-bootstrap';
import { SITE_THEME } from '../../../helpers/constants';

const UserCashItemHeader = props => {
  return (
    <Container>
      <Row style={{ fontSize: 18, fontWeight: 'bold' }}>
        <Col lg="2" className={`border border-${SITE_THEME}`}>
          Currency
        </Col>
        <Col lg="2" className={`border border-${SITE_THEME}`}>
          Amount
        </Col>
        <Col lg="2" className={`border border-${SITE_THEME}`}>
          Interest Rate
        </Col>
        <Col lg="2" className={`border border-${SITE_THEME}`}>
          Inflation
        </Col>
        <Col lg="3" className={`border border-${SITE_THEME}`}>
          Next year value
        </Col>
        <Col lg="1"></Col>
      </Row>
    </Container>
  );
};

export default UserCashItemHeader;
