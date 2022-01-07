import UserStockItem from './UserStockItem';
const UserStockItemList = props => {
  return (
    <>
      {props.stockList.map((el, index) => (
        <UserStockItem
          key={`stock-item-${index}`}
          symbol={el.symbol}
          price={el.price}
          units={el.units}
        />
      ))}
    </>
  );
};

export default UserStockItemList;
