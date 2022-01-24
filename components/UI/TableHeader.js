import { Col } from 'react-bootstrap';
import { SITE_THEME } from '../../helpers/constants';

const TableHeader = props => {
  return (
    <>
      {props.columns.map((el, index) => (
        <Col
          key={`col-header-${el.name}-${index}`}
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

export default TableHeader;
