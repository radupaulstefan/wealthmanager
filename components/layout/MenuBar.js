import { Button, Grid } from "@mui/material";
// import { useHistory } from 'react-router-dom';
import { SITE_THEME } from "../../helpers/constants";
import { useState } from "react";

const MenuBar = () => {
  // const history = useHistory();
  const [netWorthActive, setNetWorthActive] = useState(true);
  const [budgetActive, setBudgetActive] = useState(false);
  const [plannerActive, setPlannerActive] = useState(false);

  const handleNetWorthClick = () => {
    setNetWorthActive(true);
    setBudgetActive(false);
    setPlannerActive(false);
    // history.push({
    //   pathname: 'networth',
    // });
  };
  const handleBudgetClick = () => {
    setNetWorthActive(false);
    setBudgetActive(true);
    setPlannerActive(false);
    // history.push({
    //   pathname: 'budget',
    // });
  };
  const handlePlannerClick = () => {
    setNetWorthActive(false);
    setBudgetActive(false);
    setPlannerActive(true);
    // history.push({
    //   pathname: 'planner',
    // });
  };
  // 212529
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      {" "}
      <Button variant="outlined" onClick={handleNetWorthClick}>
        NetWorth
      </Button>{" "}
      <Button variant="outlined" onClick={handleBudgetClick}>
        Budget
      </Button>{" "}
      <Button variant="outlined" onClick={handlePlannerClick}>
        Planner
      </Button>{" "}
    </Grid>
  );
};

export default MenuBar;
