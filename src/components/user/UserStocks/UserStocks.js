import { ListGroup, Button } from 'react-bootstrap';
import UserStockItemHeader from './UserStockItemHeader';
import UserStockItemList from './UserStockItemList';
import { useSelector } from 'react-redux';
import { fetchStocks } from '../../../actions/userStocksActions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserAddStockInput from './UserAddStockInput.js';

const UserStocks = props => {
  const dispatch = useDispatch();
  const userStocks = useSelector(state => state.stocks.items);
  useEffect(() => {
    dispatch(fetchStocks());
  }, []);
  return (
    <>
      <ListGroup as="ul">
        <UserStockItemHeader></UserStockItemHeader>
        <UserStockItemList stockList={userStocks} />
        <UserAddStockInput />
      </ListGroup>
    </>
  );
};
export default UserStocks;
