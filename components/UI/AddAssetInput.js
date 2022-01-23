import { Col, Form, InputGroup, Button } from 'react-bootstrap';
import { useRef } from 'react';
import { SITE_THEME } from '../../helpers/constants';

const AddAssetInput = props => {
  const symbolRef = useRef();

  const handleSubmit = ev => {
    ev.preventDefault();
    props.onNewItemSubmit(symbolRef.current.value);

    symbolRef.current.value = '';
  };
  return (
    <div className="d-flex p-0">
      <Col xs={props.xs} lg={props.lg}>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Form.Control ref={symbolRef} placeholder="Symbol" />
            <Button type="submit" size="sm" variant={`outline-${SITE_THEME}`}>
              +
            </Button>
          </InputGroup>
        </Form>
      </Col>
    </div>
  );
};

export default AddAssetInput;
