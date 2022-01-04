import UserStockItem from './UserStockItem';
const UserStockItemList = props => {
  return (
    <>
      {props.stockList.map(el => (
        <UserStockItem symbol={el.symbol} price={el.price} units={el.units} />
      ))}
    </>
  );
};

export default UserStockItemList;
