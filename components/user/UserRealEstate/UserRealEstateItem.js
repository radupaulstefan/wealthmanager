import { Col, FormControl, Row, Container } from 'react-bootstrap';

import { useState, useEffect } from 'react';
import { SITE_THEME } from '../../../helpers/constants';

const UserRealEstateItem = props => {
  const [monthlyDebt, setMonthlyDebt] = useState(0);
  const [monthlyRent, setMonthlyRent] = useState(0);
  const [cashflow, setCashflow] = useState(0);

  const handleMonthlyDebtChange = ev => {
    setMonthlyDebt(+ev.target.value);
  };
  const handleMonthlyRentChange = ev => {
    setMonthlyRent(+ev.target.value);
  };

  useEffect(() => {
    setCashflow(monthlyRent - monthlyDebt);
  }, [monthlyDebt, monthlyRent]);

  return (
    <Container>
      <Row>
        <Col className={`border border-${SITE_THEME}`}>{props.country}</Col>
        <Col className={`border border-${SITE_THEME}`}>{props.city}</Col>
        <Col className={`border border-${SITE_THEME}`}>{props.type}</Col>
        <Col className={`border border-${SITE_THEME}`}>
          <FormControl onChange={handleMonthlyDebtChange} placeholder="0" />
        </Col>
        <Col className={`border border-${SITE_THEME}`}>
          <FormControl onChange={handleMonthlyRentChange} placeholder="0" />
        </Col>
        <Col className={`border border-${SITE_THEME}`}>{cashflow}</Col>
      </Row>
    </Container>
  );
};

export default UserRealEstateItem;
