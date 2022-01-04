import {
  Col,
  InputGroup,
  FormControl,
  Button,
  Row,
  Container,
} from 'react-bootstrap';
import { useState, useEffect } from 'react';

const UserCashItem = props => {
  const [amount, setAmount] = useState(0);
  const [nextYearValue, setNextYearValue] = useState(0);
  const [interestRate, setInterestRate] = useState(0);

  const amountChangeHandler = ev => {
    setAmount(+ev.target.value);
  };

  const interestRateChangeHandler = ev => {
    setInterestRate(+ev.target.value);
  };

  useEffect(() => {
    setNextYearValue(
      (
        amount +
        (interestRate / 100) * amount -
        (props.annualInflation / 100) * amount
      ).toFixed(2)
    );
  }, [amount, interestRate]);

  return (
    <Container>
      <Row>
        <Col className="border border-secondary">{props.currency}</Col>
        <Col className="border border-secondary">
          <InputGroup>
            <FormControl
              onChange={amountChangeHandler}
              placeholder="0"
              aria-label=""
            />
          </InputGroup>
        </Col>
        <Col className="border border-secondary">
          <InputGroup>
            <FormControl
              onChange={interestRateChangeHandler}
              placeholder="0"
              aria-label=""
            />
          </InputGroup>
        </Col>
        <Col className="border border-secondary">{props.annualInflation}</Col>
        <Col className="border border-secondary">{nextYearValue}</Col>
      </Row>
    </Container>
  );
};

export default UserCashItem;
