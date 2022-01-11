import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  deleteCrypto,
  changeCryptoUnits,
  incrementCryptoUnits,
  decrementCryptoUnits,
} from '../../../actions/userCryptoActions';
import { useEffect, useState } from 'react';
import UnitsInput from '../../UI/UnitsInput';
import { SITE_THEME } from '../../../helpers/constants';
import { useSelector } from 'react-redux';
import TableItemFrame from '../../UI/TableItemFrame';

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
    //dispatch(getCryptoCoinPrice(symbol));
  }, [crypto]);

  return (
    <TableItemFrame onRemoveItemClick={handleRemoveItemClick}>
      <Col
        style={{ display: 'inline-block' }}
        xs={props.sizes[0].xs}
        lg={props.sizes[0].lg}
        className={`border border-${SITE_THEME}`}
      >
        {symbol.toUpperCase()}
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
          onChange={handleCryptoUnitsChange}
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
    </TableItemFrame>
  );
};

export default UserCryptoItem;
