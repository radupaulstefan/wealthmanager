import { Button, Card } from 'react-bootstrap';
import { SITE_THEME } from '../../helpers/constants';
const UserBudgetTracker = props => {
  return (
    <Card bg="white">
      <Card.Body>
        <Card.Title>Budget Tracker</Card.Title>
        <Button variant={`${SITE_THEME}`}>Incomes</Button>{' '}
        <Button variant={`${SITE_THEME}`}>Expenses</Button>{' '}
      </Card.Body>
    </Card>
  );
};

export default UserBudgetTracker;
