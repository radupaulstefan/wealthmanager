import { useState } from 'react';
import UserStocks from '../components/user/UserStocks/UserStocks';
import UserRealEstate from '../components/user/UserRealEstate/UserRealEstate';
import UserCash from '../components/user/UserCash/UserCash';
import UserCrypto from '../components/user/UserCrypto/UserCrypto';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const NetworthPage = props => {
  const [cardBody, setCardBody] = useState(<UserStocks />);
  const userLoggedIn = useSelector(state => state.currentUser.userLoggedIn);

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
    <>
      {userLoggedIn && (
        <>
          <Button onClick={handleStocksClicked}>Stocks</Button>{' '}
          <Button onClick={handleCryptoClicked}>Crypto</Button>{' '}
          <Button onClick={handleRealEstateClicked}>Real Estate</Button>{' '}
          <Button onClick={handleCashClicked}>Cash</Button>{' '}
          <Button onClick={handleCommoditiesClicked}>Commodities</Button>{' '}
          <Card className="p-2">{cardBody}</Card>
        </>
      )}
      {!userLoggedIn && (
        <Link href="/login">Login with an existing account</Link>
      )}
    </>
  );
};

export default NetworthPage;
