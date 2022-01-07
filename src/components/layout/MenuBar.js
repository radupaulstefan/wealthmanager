import { Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { SITE_THEME } from '../../helpers/constants';
import { useState } from 'react';

const MenuBar = () => {
  const history = useHistory();
  const [netWorthActive, setNetWorthActive] = useState(false);
  const [budgetActive, setBudgetActive] = useState(false);
  const [plannerActive, setPlannerActive] = useState(false);

  const handleNetWorthClick = () => {
    setNetWorthActive(true);
    setBudgetActive(false);
    setPlannerActive(false);
    history.push({
      pathname: 'networth',
    });
  };
  const handleBudgetClick = () => {
    setNetWorthActive(false);
    setBudgetActive(true);
    setPlannerActive(false);
    history.push({
      pathname: 'budget',
    });
  };
  const handlePlannerClick = () => {
    setNetWorthActive(false);
    setBudgetActive(false);
    setPlannerActive(true);
    history.push({
      pathname: 'planner',
    });
  };
  // 212529
  return (
    <>
      <Col
        style={{ backgroundColor: 'white' }}
        className="d-flex justify-content-center"
      >
        {' '}
        <Button
          onClick={handleNetWorthClick}
          style={{ borderRadius: '0' }}
          size="lg"
          variant={`outline-${SITE_THEME}`}
          active={netWorthActive}
        >
          NetWorth
        </Button>{' '}
        <Button
          onClick={handleBudgetClick}
          style={{ borderRadius: '0' }}
          size="lg"
          variant={`outline-${SITE_THEME}`}
          active={budgetActive}
        >
          Budget
        </Button>{' '}
        <Button
          onClick={handlePlannerClick}
          style={{ borderRadius: '0' }}
          size="lg"
          variant={`outline-${SITE_THEME}`}
          active={plannerActive}
        >
          Planner
        </Button>{' '}
      </Col>
    </>
  );
};

export default MenuBar;
