import { ListGroup, Button } from 'react-bootstrap';
import UserCryptoItemHeader from './UserCryptoItemHeader';
import UserCryptoItemList from './UserCryptoItemList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCrypto, addCryptoList } from '../../../actions/userCryptoActions';
import UserAddCryptoInput from './UserAddCryptoInput';

const UserCrypto = props => {
  const dispatch = useDispatch();
  const userCrypto = useSelector(state => state.crypto.items);
  useEffect(() => {
    dispatch(fetchCrypto());
    dispatch(addCryptoList());
  }, []);

  return (
    <>
      <ListGroup as="ul">
        <UserCryptoItemHeader></UserCryptoItemHeader>
        <UserCryptoItemList cryptoList={userCrypto} />
        <UserAddCryptoInput />
      </ListGroup>
    </>
  );
};
export default UserCrypto;
