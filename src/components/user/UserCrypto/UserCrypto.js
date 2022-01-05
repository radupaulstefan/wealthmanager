import { ListGroup, Button } from 'react-bootstrap';
import UserCryptoItemHeader from './UserCryptoItemHeader';
import UserCryptoItemList from './UserCryptoItemList';

const UserCrypto = props => {
  const handleAddItem = () => {};
  return (
    <>
      <ListGroup as="ul">
        <UserCryptoItemHeader></UserCryptoItemHeader>
        <UserCryptoItemList />
      </ListGroup>
    </>
  );
};
export default UserCrypto;
