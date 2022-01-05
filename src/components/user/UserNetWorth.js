import { Button, Card, ButtonGroup } from 'react-bootstrap';
import { useState } from 'react';
import UserAddStockModal from './UserStocks/UserAddStockInput.js';
import { useDispatch } from 'react-redux';
import UserStocks from './UserStocks/UserStocks';
import UserRealEstate from './UserRealEstate/UserRealEstate';
import UserCash from './UserCash/UserCash';
import UserCrypto from './UserCrypto/UserCrypto';

const UserNetWorth = props => {
  const dispatch = useDispatch();
  const [cardBody, setCardBody] = useState(<UserStocks />);
  const [showModal, setShowModal] = useState(false);

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
