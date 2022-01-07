import { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  deleteStock,
  changeStockUnits,
  incrementStockUnits,
  decrementStockUnits,
} from '../../../actions/userStocksActions';
import UnitsInput from '../../UI/UnitsInput';
import FinancialInstrumentFrame from '../../UI/FinancialInstrumentFrame';
import { SITE_THEME } from '../../../helpers/constants';
import { useSelector } from 'react-redux';

const UserStockItem = props => {
  const dispatch = useDispatch();
  const [symbol, setSymbol] = useState(props.symbol);
  const stocks = useSelector(state => state.stocks.items);

  const handleRemoveItemClick = () => {
    dispatch(deleteStock(symbol));
  };

  const handleStockUnitsChange = value => {
    dispatch(changeStockUnits(symbol, value));
  };

  const handlePlusButtonClick = () => {
    dispatch(incrementStockUnits(symbol));
  };
  const handleMinusButtonClick = () => {
    dispatch(decrementStockUnits(symbol));
  };
  useEffect(() => {
    setSymbol(props.symbol);
  }, [stocks]);

  if (props.units === 0) {
    dispatch(deleteStock(symbol));
  }

  return (
    <Container>
      <FinancialInstrumentFrame onRemoveItemClick={handleRemoveItemClick}>
        <Col md="2" className={`border border-${SITE_THEME}`}>
          {props.symbol}
        </Col>
        <Col md="2" className={`border border-${SITE_THEME}`}>
          {props.price}
        </Col>
        <Col md="4" className={`border border-${SITE_THEME}`}>
          <UnitsInput
            onChange={handleStockUnitsChange}
            onPlusClick={handlePlusButtonClick}
            onMinusClick={handleMinusButtonClick}
            units={props.units}
          />
        </Col>
        <Col md="3" className={`border border-${SITE_THEME}`}>
          <Col>{(props.price * props.units).toFixed(2)}</Col>
        </Col>
      </FinancialInstrumentFrame>
    </Container>
  );
};

export default UserStockItem;
