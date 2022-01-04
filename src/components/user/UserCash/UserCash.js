import { ListGroup, Button } from 'react-bootstrap';
import UserCashItemHeader from './UserCashItemHeader';
import UserCashItemList from './UserCashItemList';

const UserCash = props => {
  const handleAddItem = () => {};
  return (
    <>
      <Button
        onClick={handleAddItem}
        className="align-self-start"
        variant="secondary"
      >
        +
      </Button>
      <ListGroup as="ul">
        <UserCashItemHeader />
        <UserCashItemList />
      </ListGroup>
    </>
  );
};
export default UserCash;
