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
    <>
      <FinancialInstrumentFrame onRemoveItemClick={handleRemoveItemClick}>
        <Col
          style={{ display: 'inline-block' }}
          xs={props.sizes[0].xs}
          lg={props.sizes[0].lg}
          className={`m-0 border border-${SITE_THEME}`}
        >
          {props.symbol}
        </Col>
        <Col
          style={{ display: 'inline-block' }}
          xs={props.sizes[1].xs}
          lg={props.sizes[1].lg}
          className={`border border-${SITE_THEME}`}
        >
          {props.price}
        </Col>
        <Col
          style={{ display: 'inline-block' }}
          xs={props.sizes[2].xs}
          lg={props.sizes[2].lg}
          className={`border border-${SITE_THEME}`}
        >
          <UnitsInput
            onChange={handleStockUnitsChange}
            onPlusClick={handlePlusButtonClick}
            onMinusClick={handleMinusButtonClick}
            units={props.units}
          />
        </Col>
        <Col
          style={{ display: 'inline-block' }}
          xs={props.sizes[3].xs}
          lg={props.sizes[3].lg}
          className={`border border-${SITE_THEME}`}
        >
          <Col>{(props.price * props.units).toFixed(2)}</Col>
        </Col>
      </FinancialInstrumentFrame>
    </>
  );
};

export default UserStockItem;
