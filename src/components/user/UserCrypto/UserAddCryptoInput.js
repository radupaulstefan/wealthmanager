import { Col, Row, Container, Button, Form, InputGroup } from 'react-bootstrap';
import {
  addCrypto,
  getCryptoCoinPrice,
} from '../../../actions/userCryptoActions';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SITE_THEME } from '../../../helpers/constants';
import { useSelector } from 'react-redux';
import AutoCompleteList from '../../UI/AutoCompleteList';

const UserAddCryptoInput = props => {
  const symbolRef = useRef();
  const dispatch = useDispatch();
  const cryptoList = useSelector(state => state.crypto.cryptoList);
  const [symbolList, setSymbolList] = useState(
    cryptoList.map(el => el.symbol.toUpperCase())
  );
  const [symbolInputValue, setSymbolInputValue] = useState();

  const handleAddCryptoSubmit = ev => {
    ev.preventDefault();
    dispatch(
      addCrypto({
        symbol: symbolRef.current.value,
        price: 0,
        units: 0,
      })
    );
    symbolRef.current.value = '';
  };

  const handleSymbolChange = ev => {
    setSymbolInputValue(ev.target.value.toUpperCase());
  };

  const handleAutoCompleteClick = text => {
    dispatch(addCrypto({ symbol: text, price: 0, units: 0 }));
    symbolRef.current.value = '';
    setSymbolInputValue('');
    dispatch(getCryptoCoinPrice(text));
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setSymbolList(
        cryptoList
          .map(el => el.symbol.toUpperCase())
          .filter(el => el.includes(symbolInputValue))
          .sort((el1, el2) => el1.length - el2.length)
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [symbolInputValue]);

  return (
    <Container>
      <Row>
        <Col sm="1" md="2" lg="3" className="p-0">
          <Form onSubmit={handleAddCryptoSubmit}>
            <InputGroup>
              <Form.Control
                onChange={handleSymbolChange}
                ref={symbolRef}
                placeholder="Symbol"
              />
              <Button type="submit" size="sm" variant={`outline-${SITE_THEME}`}>
                +
              </Button>
            </InputGroup>
          </Form>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        {/* {symbolInputValue?.length > 0 && (
          <AutoCompleteList
            onClick={handleAutoCompleteClick}
            symbolList={symbolList}
          />
        )} */}
      </Row>
    </Container>
  );
};

export default UserAddCryptoInput;
