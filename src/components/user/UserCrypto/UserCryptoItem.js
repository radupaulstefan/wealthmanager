import { Col, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  deleteCrypto,
  changeCryptoUnits,
  incrementCryptoUnits,
  decrementCryptoUnits,
} from '../../../actions/userCryptoActions';
import { useEffect, useState } from 'react';
import UnitsInput from '../../UI/UnitsInput';
import FinancialInstrumentFrame from '../../UI/FinancialInstrumentFrame';
import { SITE_THEME } from '../../../helpers/constants';
import { useSelector } from 'react-redux';

const UserCryptoItem = props => {
  const dispatch = useDispatch();
  const [symbol, setSymbol] = useState(props.symbol);
  const crypto = useSelector(state => state.crypto.items);

  const handleRemoveItemClick = ev => {
    dispatch(deleteCrypto(symbol));
  };

  const handleCryptoUnitsChange = value => {
    dispatch(changeCryptoUnits(symbol, value));
  };

  const handlePlusButtonClick = () => {
    dispatch(incrementCryptoUnits(symbol));
  };
  const handleMinusButtonClick = () => {
    dispatch(decrementCryptoUnits(symbol));
  };
  useEffect(() => {
    setSymbol(props.symbol);
  }, [crypto]);

  return (
    <Container>
      <FinancialInstrumentFrame onRemoveItemClick={handleRemoveItemClick}>
        <Col
          style={{ cursor: 'default' }}
          className={`border border-${SITE_THEME}`}
        >
          {symbol.toUpperCase()}
        </Col>
        <Col
          style={{ cursor: 'default' }}
          className={`border border-${SITE_THEME}`}
        >
          {props.price}
        </Col>
        <Col
          style={{ cursor: 'default' }}
          className={`border border-${SITE_THEME}`}
        >
          <UnitsInput
            onChange={handleCryptoUnitsChange}
            onPlusClick={handlePlusButtonClick}
            onMinusClick={handleMinusButtonClick}
            units={props.units}
          />
        </Col>
        <Col
          style={{ cursor: 'default' }}
          className={`border border-${SITE_THEME}`}
        >
          <Col>{(props.price * props.units).toFixed(2)}</Col>
        </Col>
      </FinancialInstrumentFrame>
    </Container>
  );
};

export default UserCryptoItem;
