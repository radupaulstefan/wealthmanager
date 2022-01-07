import { Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

const FinancialInstrumentFrame = props => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(true);
  const handleItemMouseEnter = () => {
    setShowDeleteBtn(true);
  };
  const handleItemMouseLeave = () => {
    setShowDeleteBtn(false);
  };
  return (
    <Row
      onMouseEnter={handleItemMouseEnter}
      onMouseLeave={handleItemMouseLeave}
    >
      <>{props.children}</>
      <Col lg="1">
        {showDeleteBtn && (
          <Button onClick={props.onRemoveItemClick} size="md" variant="light">
            X
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default FinancialInstrumentFrame;
