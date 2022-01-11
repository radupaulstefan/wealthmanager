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
import FinancialInstrumentFrame from '../../UI/TableItemFrame';
import { SITE_THEME } from '../../../helpers/constants';
import TableItemFrame from '../../UI/TableItemFrame';

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
    <TableItemFrame onRemoveItemClick={handleRemoveItemClick}>
      {' '}
      <Col
        style={{ display: 'inline-block' }}
        xs={props.sizes[0].xs}
        lg={props.sizes[0].lg}
        className={`border border-${SITE_THEME}`}
      >
        {symbol}
      </Col>
      <Col
        style={{ display: 'inline-block' }}
        xs={props.sizes[1].xs}
        lg={props.sizes[1].lg}
        className={`border border-${SITE_THEME}`}
      >
        <UnitsInput
          onChange={handleUnitsChange}
          onPlusClick={handleUnitsPlusButtonClick}
          onMinusClick={handleUnitsMinusButtonClick}
          units={props.units}
        />
      </Col>
      <Col
        style={{ display: 'inline-block' }}
        xs={props.sizes[2].xs}
        lg={props.sizes[2].lg}
        className={`border border-${SITE_THEME}`}
      >
        <UnitsInput
          onChange={handleInterestRateChange}
          onPlusClick={handleInterestRatePlusButtonClick}
          onMinusClick={handleInterestRateMinusButtonClick}
          units={props.interestRate}
        />
      </Col>
      <Col
        style={{ display: 'inline-block' }}
        xs={props.sizes[3].xs}
        lg={props.sizes[3].lg}
        className={`border border-${SITE_THEME}`}
      >
        {props.annualInflation}
      </Col>
      <Col
        style={{ display: 'inline-block' }}
        xs={props.sizes[4].xs}
        lg={props.sizes[4].lg}
        className={`border border-${SITE_THEME}`}
      >
        {nextYearValue}
      </Col>
    </TableItemFrame>
  );
};

export default UserCashItem;
