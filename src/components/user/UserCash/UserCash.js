import { ListGroup, Button } from 'react-bootstrap';
import UserCashItemHeader from './UserCashItemHeader';
import UserCashItemList from './UserCashItemList';

const UserCash = props => {
  const handleAddItem = () => {};
  return (
    <>
      <ListGroup as="ul">
        <UserCashItemHeader />
        <UserCashItemList />
      </ListGroup>
    </>
  );
};
export default UserCash;
