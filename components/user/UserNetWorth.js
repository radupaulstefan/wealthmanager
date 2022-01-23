import { Button, Card, ButtonGroup, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import UserStocks from './UserStocks/UserStocks';
import UserRealEstate from './UserRealEstate/UserRealEstate';
import UserCash from './UserCash/UserCash';
import UserCrypto from './UserCrypto/UserCrypto';
import { SITE_THEME } from '../../helpers/constants';

const UserNetWorth = props => {
  const [cardBody, setCardBody] = useState(<UserStocks />);

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
  return (
    <Row>
      <Col>
        <Card bg="white">
          <Card.Body>
            <Card.Title>Net Worth</Card.Title>
            <Button
              // style={{ borderRadius: '0' }}
              onClick={handleStocksClicked}
              variant={`${SITE_THEME}`}
            >
              Stocks
            </Button>{' '}
            <Button
              // style={{ borderRadius: '0' }}
              onClick={handleCryptoClicked}
              variant={`${SITE_THEME}`}
            >
              Crypto
            </Button>{' '}
            <Button
              // style={{ borderRadius: '0' }}
              onClick={handleRealEstateClicked}
              variant={`${SITE_THEME}`}
            >
              Real Estate
            </Button>{' '}
            <Button
              // style={{ borderRadius: '0' }}
              onClick={handleCashClicked}
              variant={`${SITE_THEME}`}
            >
              Cash
            </Button>{' '}
            <Button
              // style={{ borderRadius: '0' }}
              onClick={handleCommoditiesClicked}
              variant={`${SITE_THEME}`}
            >
              Commodities
            </Button>{' '}
            <Card className="p-2">{cardBody}</Card>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default UserNetWorth;
