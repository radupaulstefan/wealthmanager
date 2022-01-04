import { Button, Card, ListGroup, ButtonGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import UserAddStockModal from './UserStocks/UserAddStockModal';
import useHttp from '../../hooks/use-http';
import { useSelector } from 'react-redux';
import { currentUserActions } from '../../store/currentUser-slice';
import { useDispatch } from 'react-redux';
import UserStocks from './UserStocks/UserStocks';
import UserRealEstate from './UserRealEstate/UserRealEstate';
import UserCash from './UserCash/UserCash';
import UserCrypto from './UserCrypto/UserCrypto';

const UserNetWorth = props => {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const [cardBody, setCardBody] = useState(null);
  const { isLoading, error, sendRequest: requestFirebase } = useHttp();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const processRequestFirebaseResponse = responseObj => {
      console.log(responseObj);
      dispatch(
        currentUserActions.setUserNetWorthStocks(
          Object.values(responseObj).map(el => ({
            symbol: el.symbol,
            price: el.price,
            units: el.units,
          }))
        )
      );
      setCardBody(<UserStocks />);
    };
    requestFirebase(
      'fetch',
      {
        url: `https://react-http-7e1be-default-rtdb.firebaseio.com/users/${currentUser.userUID}/userData/netWorth/stocks.json`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      processRequestFirebaseResponse
    );
  }, []);

  const handleStocksClicked = () => {
    setCardBody(<UserStocks />);
  };
  const handleCryptoClicked = () => {
    setCardBody(<UserCrypto />);
  };
  const handleRealEstateClicked = () => {
    setCardBody(<UserRealEstate />);
  };
  const handleCashClicked = () => {
    setCardBody(<UserCash />);
  };
  const handleCommoditiesClicked = () => {
    setCardBody(null);
  };
  const handleAddStockClicked = () => {
    setShowModal(true);
  };
  const handleModalSubmit = () => {
    setShowModal(false);
  };
  return (
    <Card bg="white">
      <Card.Body>
        <Card.Title>Net Worth</Card.Title>
        <ButtonGroup>
          <Button onClick={handleStocksClicked} variant="secondary">
            Stocks
          </Button>{' '}
          <Button onClick={handleCryptoClicked} variant="secondary">
            Crypto
          </Button>{' '}
          <Button onClick={handleRealEstateClicked} variant="secondary">
            Real Estate
          </Button>{' '}
          <Button onClick={handleCashClicked} variant="secondary">
            Cash
          </Button>{' '}
          <Button onClick={handleCommoditiesClicked} variant="secondary">
            Commodities
          </Button>{' '}
        </ButtonGroup>
        <Card>{cardBody}</Card>
      </Card.Body>
      {showModal && <UserAddStockModal onSubmit={handleModalSubmit} />}
    </Card>
  );
};

export default UserNetWorth;
