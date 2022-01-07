import { Col, Row, Container, Button, Form, InputGroup } from 'react-bootstrap';
import { addStock } from '../../../actions/userStocksActions';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SITE_THEME } from '../../../helpers/constants';

const UserAddStockInput = props => {
  const symbolRef = useRef();
  const priceRef = useRef();
  const unitRef = useRef();
  const dispatch = useDispatch();

  const handleAddStockSubmit = ev => {
    ev.preventDefault();
    dispatch(
      addStock({
        symbol: symbolRef.current.value,
        price: priceRef.current.value,
        units: unitRef.current.value,
      })
    );
    symbolRef.current.focus();
    symbolRef.current.value = '';
    priceRef.current.value = '';
    unitRef.current.value = '';
  };
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleAddStockSubmit}>
            <InputGroup>
              <Form.Control ref={symbolRef} placeholder="Symbol" />
              <Form.Control ref={priceRef} placeholder="Price" />
              <Form.Control ref={unitRef} placeholder="Unit" />
              <Button type="submit" size="sm" variant={`outline-${SITE_THEME}`}>
                +
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserAddStockInput;
