import { Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { SITE_THEME } from '../../helpers/constants';

const SideBar = () => {
  const history = useHistory();
  const handleNetWorthClick = () => {
    history.push({
      pathname: 'networth',
    });
  };
  const handleBudgetClick = () => {
    history.push({
      pathname: 'budget',
    });
  };
  const handlePlannerClick = () => {
    history.push({
      pathname: 'planner',
    });
  };

  return (
    <Row className={`border border-${SITE_THEME}`}>
      <Button
        onClick={handleNetWorthClick}
        style={{ borderRadius: '0' }}
        size="lg"
        variant={`${SITE_THEME}`}
      >
        NetWorth
      </Button>
      <Button
        onClick={handleBudgetClick}
        style={{ borderRadius: '0' }}
        size="lg"
        variant={`${SITE_THEME}`}
      >
        Budget
      </Button>
      <Button
        onClick={handlePlannerClick}
        style={{ borderRadius: '0' }}
        size="lg"
        variant={`${SITE_THEME}`}
      >
        Planner
      </Button>
    </Row>
  );
};

export default SideBar;
