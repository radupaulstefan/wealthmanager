import UserCashItem from './UserCashItem';
const UserCashItemList = props => {
  return (
    <>
      {props.cashList.map((el, index) => (
        <UserCashItem
          key={`cash-item-${index}`}
          symbol={el.symbol}
          units={el.units}
          interestRate={el.interestRate}
          annualInflation={4.8}
        />
      ))}
    </>
  );
};

export default UserCashItemList;
