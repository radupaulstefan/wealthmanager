import UserStockItem from './UserStockItem';
import UserStockItemHeader from './UserStockItemHeader';

const UserStockItemList = props => {
  console.log(props.header);
  return (
    <>
      <UserStockItemHeader columns={props.header}></UserStockItemHeader>
      {props.stockList.map((el, index) => (
        <UserStockItem
          key={`stock-item-${index}`}
          symbol={el.symbol}
          price={el.price}
          units={el.units}
          sizes={props.header.map(el => ({
            xs: el.xs,
            lg: el.lg,
          }))}
        />
      ))}
    </>
  );
};

export default UserStockItemList;
