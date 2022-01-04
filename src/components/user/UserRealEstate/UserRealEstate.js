import { ListGroup, Button } from 'react-bootstrap';
import UserRealEstateItemHeader from './UserRealEstateItemHeader';
import UserRealEstateItemList from './UserRealEstateItemList';

const UserRealEstate = props => {
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
        <UserRealEstateItemHeader />
        <UserRealEstateItemList />
      </ListGroup>
    </>
  );
};
export default UserRealEstate;
