import { Col, Row, Container } from 'react-bootstrap';
import { SITE_THEME } from '../../../helpers/constants';

const UserStockItemHeader = props => {
  return (
    <>
      {props.columns.map(el => (
        <Col
          style={{ display: 'inline-block', fontSize: 18, fontWeight: 'bold' }}
          className={`border border-${SITE_THEME}`}
          xs={el.xs}
          lg={el.lg}
        >
          {el.name}
        </Col>
      ))}
      <Col xs="1" style={{ display: 'inline-block' }} lg="1"></Col>
    </>
  );
};

export default UserStockItemHeader;
