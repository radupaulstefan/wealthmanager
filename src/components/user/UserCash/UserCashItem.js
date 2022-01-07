import { Col, Container } from 'react-bootstrap';
import { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import UnitsInput from '../../UI/UnitsInput';
import { useSelector } from 'react-redux';
import {
  deleteCash,
  changeCashUnits,
  incrementCashUnits,
  decrementCashUnits,
  changeInterestRate,
  incrementInterestRate,
  decrementInterestRate,
} from '../../../actions/userCashActions';
import FinancialInstrumentFrame from '../../UI/FinancialInstrumentFrame';
import { SITE_THEME } from '../../../helpers/constants';

const UserCashItem = props => {
  const [nextYearValue, setNextYearValue] = useState(0);
  const dispatch = useDispatch();
  const [symbol, setSymbol] = useState(props.symbol);
  const userCash = useSelector(state => state.cash);

  const handleRemoveItemClick = ev => {
    dispatch(deleteCash(symbol));
  };

  const handleUnitsChange = value => {
    dispatch(changeCashUnits(symbol, +value));
  };

  const handleUnitsPlusButtonClick = () => {
    dispatch(incrementCashUnits(symbol));
  };
  const handleUnitsMinusButtonClick = () => {
    dispatch(decrementCashUnits(symbol));
  };

  const handleInterestRateChange = value => {
    dispatch(changeInterestRate(symbol, +value));
  };

  const handleInterestRatePlusButtonClick = () => {
    dispatch(incrementInterestRate(symbol));
  };
  const handleInterestRateMinusButtonClick = () => {
    dispatch(decrementInterestRate(symbol));
  };

  useEffect(() => {
    setSymbol(props.symbol);
    setNextYearValue(
      (
        +props.units +
        (+props.interestRate / 100) * +props.units -
        (+props.annualInflation / 100) * +props.units
      ).toFixed(2)
    );
  }, [userCash]);

  return (
    <Container>
      <FinancialInstrumentFrame onRemoveItemClick={handleRemoveItemClick}>
        {' '}
        <Col lg="2" className={`border border-${SITE_THEME}`}>
          {symbol}
        </Col>
        <Col lg="2" className={`border border-${SITE_THEME}`}>
          <UnitsInput
            onChange={handleUnitsChange}
            onPlusClick={handleUnitsPlusButtonClick}
            onMinusClick={handleUnitsMinusButtonClick}
            units={props.units}
          />
        </Col>
        <Col lg="2" className={`border border-${SITE_THEME}`}>
          <UnitsInput
            onChange={handleInterestRateChange}
            onPlusClick={handleInterestRatePlusButtonClick}
            onMinusClick={handleInterestRateMinusButtonClick}
            units={props.interestRate}
          />
        </Col>
        <Col lg="2" className={`border border-${SITE_THEME}`}>
          {props.annualInflation}
        </Col>
        <Col lg="3" className={`border border-${SITE_THEME}`}>
          {nextYearValue}
        </Col>
      </FinancialInstrumentFrame>
    </Container>
  );
};

export default UserCashItem;
