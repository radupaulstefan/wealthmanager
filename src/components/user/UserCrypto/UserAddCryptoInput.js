import { Col, Row, Container, Button, Form, InputGroup } from 'react-bootstrap';
import { addCrypto } from '../../../actions/userCryptoActions';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SITE_THEME } from '../../../helpers/constants';

const UserAddCryptoInput = props => {
  const symbolRef = useRef();
  const priceRef = useRef();
  const unitRef = useRef();
  const dispatch = useDispatch();

  const handleAddCryptoSubmit = ev => {
    ev.preventDefault();
    dispatch(
      addCrypto({
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
  useEffect(() => {
    symbolRef.current.focus();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleAddCryptoSubmit}>
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

export default UserAddCryptoInput;
