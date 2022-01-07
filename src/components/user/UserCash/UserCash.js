import { ListGroup, Button } from 'react-bootstrap';
import UserCashItemHeader from './UserCashItemHeader';
import UserCashItemList from './UserCashItemList';
import UserAddCashInput from './UserAddCashInput';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCash } from '../../../actions/userCashActions';

const UserCash = props => {
  const dispatch = useDispatch();
  const userCash = useSelector(state => state.cash.items);
  useEffect(() => {
    dispatch(fetchCash());
  }, []);

  return (
    <>
      <ListGroup as="ul">
        <UserCashItemHeader />
        <UserCashItemList cashList={userCash} />
        <UserAddCashInput />
      </ListGroup>
    </>
  );
};
export default UserCash;
