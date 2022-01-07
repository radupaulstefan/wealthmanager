import { Col, Row, Container, Button, Form, InputGroup } from 'react-bootstrap';
import { addCash } from '../../../actions/userCashActions';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SITE_THEME } from '../../../helpers/constants';

const UserAddCashInput = props => {
  const symbolRef = useRef();
  const unitsRef = useRef();
  const interestRateRef = useRef();
  const dispatch = useDispatch();

  const handleAddCashSubmit = ev => {
    ev.preventDefault();
    dispatch(
      addCash({
        symbol: symbolRef.current.value,
        units: unitsRef.current.value,
        interestRate: interestRateRef.current.value,
      })
    );
    symbolRef.current.focus();
    symbolRef.current.value = '';
    unitsRef.current.value = '';
    interestRateRef.current.value = '';
  };
  useEffect(() => {
    symbolRef.current.focus();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleAddCashSubmit}>
            <InputGroup>
              <Form.Control ref={symbolRef} placeholder="currency" />
              <Form.Control ref={unitsRef} placeholder="Amount" />
              <Form.Control ref={interestRateRef} placeholder="Interest Rate" />
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

export default UserAddCashInput;
