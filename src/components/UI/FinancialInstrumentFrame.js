import { Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

const FinancialInstrumentFrame = props => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const handleItemMouseEnter = () => {
    setShowDeleteBtn(true);
  };
  const handleItemMouseLeave = () => {
    setShowDeleteBtn(false);
  };
  return (
    <div
      onMouseEnter={handleItemMouseEnter}
      onMouseLeave={handleItemMouseLeave}
      className="d-flex p-0"
    >
      <>{props.children}</>
      <Col style={{ display: 'inline-block' }} lg="1">
        {showDeleteBtn && (
          <Button onClick={props.onRemoveItemClick} size="md" variant="light">
            X
          </Button>
        )}
      </Col>
    </div>
  );
};

export default FinancialInstrumentFrame;
