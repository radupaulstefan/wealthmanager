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
            <ButtonGroup>
              <Button
                style={{ borderRadius: '0' }}
                onClick={handleStocksClicked}
                // onMouseEnter={handleStocksClicked}
                variant={`outline-${SITE_THEME}`}
              >
                Stocks
              </Button>{' '}
              <Button
                style={{ borderRadius: '0' }}
                onClick={handleCryptoClicked}
                // onMouseEnter={handleCryptoClicked}
                variant={`outline-${SITE_THEME}`}
              >
                Crypto
              </Button>{' '}
              <Button
                style={{ borderRadius: '0' }}
                onClick={handleRealEstateClicked}
                // onMouseEnter={handleRealEstateClicked}
                variant={`outline-${SITE_THEME}`}
              >
                Real Estate
              </Button>{' '}
              <Button
                style={{ borderRadius: '0' }}
                onClick={handleCashClicked}
                // onMouseEnter={handleCashClicked}
                variant={`outline-${SITE_THEME}`}
              >
                Cash
              </Button>{' '}
              <Button
                style={{ borderRadius: '0' }}
                onClick={handleCommoditiesClicked}
                // onMouseEnter={handleCommoditiesClicked}
                variant={`outline-${SITE_THEME}`}
              >
                Commodities
              </Button>{' '}
            </ButtonGroup>
            <Card className="p-2">{cardBody}</Card>
          </Card.Body>
        </Card>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default UserNetWorth;
