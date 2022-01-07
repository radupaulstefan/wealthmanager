import UserCryptoItem from './UserCryptoItem';
const UserCryptoItemList = props => {
  return (
    <>
      {props.cryptoList.map((el, index) => (
        <UserCryptoItem
          key={`crypto-item-${index}`}
          symbol={el.symbol}
          price={el.price}
          units={el.units}
        />
      ))}
    </>
  );
};

export default UserCryptoItemList;
