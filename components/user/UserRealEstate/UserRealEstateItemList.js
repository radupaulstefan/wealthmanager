import UserRealEstateItem from './UserRealEstateItem';

const UserRealEstateItemList = props => {
  return (
    <>
      <UserRealEstateItem country="Romania" city="Cluj-Napoca" type="Flat" />
      <UserRealEstateItem country="Romania" city="Sibiu" type="House" />
      <UserRealEstateItem country="Germany" city="Berlin" type="Flat" />
    </>
  );
};

export default UserRealEstateItemList;
