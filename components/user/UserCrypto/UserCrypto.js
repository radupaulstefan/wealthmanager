import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchCrypto,
  getAllCryptoList,
  addCrypto,
} from '../../../actions/userCryptoActions';
import MarketTableFrame from '../../UI/MarketTableFrame';
import UserCryptoItem from './UserCryptoItem';

const UserCrypto = props => {
  const dispatch = useDispatch();
  const userCrypto = useSelector(state => state.crypto.items);
  useEffect(() => {
    dispatch(fetchCrypto());
    dispatch(getAllCryptoList());
  }, []);

  const tableColumns = [
    { name: 'Symbol', xs: '4', lg: '2' },
    { name: 'Price', xs: '4', lg: '2' },
    { name: 'Units', xs: '4', lg: '3' },
    { name: 'Total', xs: '4', lg: '2' },
  ];

  const handleNewItemSubmit = symbol => {
    dispatch(
      addCrypto({
        symbol: symbol,
        price: 0,
        units: 0,
      })
    );
  };

  return (
    <MarketTableFrame
      onNewItemSubmit={handleNewItemSubmit}
      columns={tableColumns}
    >
      {userCrypto.map((el, index) => (
        <UserCryptoItem
          key={`stock-item-${index}`}
          symbol={el.symbol}
          price={el.price}
          units={el.units}
          sizes={tableColumns.map(el => ({
            xs: el.xs,
            lg: el.lg,
          }))}
        />
      ))}
    </MarketTableFrame>
  );
};
export default UserCrypto;
