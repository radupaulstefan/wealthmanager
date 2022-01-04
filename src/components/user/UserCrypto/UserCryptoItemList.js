import UserCryptoItem from './UserCryptoItem';
const UserCryptoItemList = props => {
  return (
    <>
      <UserCryptoItem symbol="BTC" price={57000} units={1} />
      <UserCryptoItem symbol="ETH" price={3800} units={10} />
    </>
  );
};

export default UserCryptoItemList;
