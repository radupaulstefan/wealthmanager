import { ListGroup, Button } from 'react-bootstrap';
import UserRealEstateItemHeader from './UserRealEstateItemHeader';
import UserRealEstateItemList from './UserRealEstateItemList';

const UserRealEstate = props => {
  const handleAddItem = () => {};
  return (
    <>
      <ListGroup as="ul">
        <UserRealEstateItemHeader />
        <UserRealEstateItemList />
      </ListGroup>
    </>
  );
};
export default UserRealEstate;
