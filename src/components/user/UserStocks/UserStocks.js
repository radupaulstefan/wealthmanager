import { ListGroup, Button } from 'react-bootstrap';
import UserStockItemHeader from './UserStockItemHeader';
import UserStockItemList from './UserStockItemList';
import { useSelector } from 'react-redux';

const UserStocks = props => {
  const userStocks = useSelector(
    state => state.currentUser.userInfo.netWorth.stocks
  );
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
        <UserStockItemHeader></UserStockItemHeader>
        <UserStockItemList stockList={userStocks} />
      </ListGroup>
    </>
  );
};
export default UserStocks;
