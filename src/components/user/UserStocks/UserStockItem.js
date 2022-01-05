import { useState } from 'react';
import {
  Col,
  InputGroup,
  FormControl,
  Button,
  Row,
  Container,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  deleteStock,
  changeStockUnits,
  incrementStockUnits,
  decrementStockUnits,
} from '../../../actions/userStocksActions';

const UserStockItem = props => {
  const dispatch = useDispatch();
  const [symbol, setSymbol] = useState(props.symbol);
  const handleRemoveItemClick = ev => {
    dispatch(deleteStock(symbol));
  };

  const handleStockUnitsChange = ev => {
    dispatch(changeStockUnits(symbol, ev.target.value));
  };

  const handlePlusButtonClick = () => {
    dispatch(incrementStockUnits(symbol));
  };
  const handleMinusButtonClick = () => {
    dispatch(decrementStockUnits(symbol));
  };

  if (props.units === 0) {
    dispatch(deleteStock(symbol));
  }

  return (
    <Container>
      <Row>
        <Col className="border border-secondary">{props.symbol}</Col>
        <Col className="border border-secondary">{props.price}</Col>
        <Col className="border border-secondary">
          <InputGroup>
            <FormControl
              placeholder="0"
              aria-label=""
              onChange={handleStockUnitsChange}
              value={props.units}
            />

            <Button
              onClick={handleMinusButtonClick}
              size="sm"
              variant="outline-secondary"
            >
              -
            </Button>
            <Button
              onClick={handlePlusButtonClick}
              size="sm"
              variant="outline-secondary"
            >
              +
            </Button>
          </InputGroup>
        </Col>
        <Col className="border border-secondary">
          <Row>
            <Col>{(props.price * props.units).toFixed(2)}</Col>
            <Col>
              <Button
                onClick={handleRemoveItemClick}
                size="sm"
                variant="secondary"
              >
                X
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UserStockItem;
