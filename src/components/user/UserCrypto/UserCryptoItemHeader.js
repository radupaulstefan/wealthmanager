import { Col, Row, Container } from 'react-bootstrap';
import { SITE_THEME } from '../../../helpers/constants';

const UserCryptoItemHeader = props => {
  return (
    <Container>
      <Row style={{ fontSize: 18, fontWeight: 'bold' }}>
        <Col className={`border border-${SITE_THEME}`}>Symbol</Col>
        <Col className={`border border-${SITE_THEME}`}>Price</Col>
        <Col className={`border border-${SITE_THEME}`}>Coins</Col>
        <Col className={`border border-${SITE_THEME}`}>Total</Col>
        <Col lg="1"></Col>
      </Row>
    </Container>
  );
};

export default UserCryptoItemHeader;
