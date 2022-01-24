import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCash, addCash } from "../../../actions/userCashActions";
import UserCashItem from "./UserCashItem";
import MarketTableFrame from "../../UI/MarketTableFrame";

const UserCash = (props) => {
  const dispatch = useDispatch();
  const userCash = useSelector((state) => state.cash.items);
  useEffect(() => {
    dispatch(fetchCash());
  }, []);

  const tableColumns = [
    { name: "Currency", xs: "4", lg: "2" },
    { name: "Amount", xs: "4", lg: "2" },
    { name: "Interest Rate", xs: "4", lg: "3" },
    { name: "Inflation", xs: "4", lg: "2" },
    { name: "Next year value", xs: "4", lg: "2" },
  ];

  const handleNewItemSubmit = (symbol) => {
    dispatch(
      addCash({
        symbol: symbol,
        units: "0",
        interestRate: "0.2",
      })
    );
  };

  return (
    <MarketTableFrame
      onNewItemSubmit={handleNewItemSubmit}
      columns={tableColumns}
    >
      {userCash.map((el, index) => (
        <UserCashItem
          key={`stock-item-${index}`}
          symbol={el.symbol}
          interestRate={el.interestRate}
          units={el.units}
          annualInflation={4.5}
          sizes={tableColumns.map((el) => ({
            xs: el.xs,
            lg: el.lg,
          }))}
        />
      ))}
    </MarketTableFrame>
  );
};
export default UserCash;
