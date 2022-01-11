import { useSelector } from 'react-redux';
import { fetchStocks } from '../../../actions/userStocksActions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MarketTableFrame from '../../UI/MarketTableFrame';
import { addStock } from '../../../actions/userStocksActions';
import UserStockItem from './UserStockItem';

const UserStocks = props => {
  const dispatch = useDispatch();
  const userStocks = useSelector(state => state.stocks.items);
  useEffect(() => {
    dispatch(fetchStocks());
  }, []);

  const tableColumns = [
    { name: 'Symbol', xs: '4', lg: '2' },
    { name: 'Price', xs: '4', lg: '2' },
    { name: 'Units', xs: '4', lg: '3' },
    { name: 'Total', xs: '4', lg: '2' },
  ];

  const handleNewItemSubmit = symbol => {
    dispatch(
      addStock({
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
      {userStocks.map((el, index) => (
        <UserStockItem
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
export default UserStocks;
