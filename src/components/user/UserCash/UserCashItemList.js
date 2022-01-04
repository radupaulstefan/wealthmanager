import UserCashItem from './UserCashItem';
const UserCashItemList = props => {
  return (
    <>
      <UserCashItem currency="USD" annualInflation={5} />
      <UserCashItem currency="EUR" annualInflation={7} />
      <UserCashItem currency="RON" annualInflation={10} />
    </>
  );
};

export default UserCashItemList;
