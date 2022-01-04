import { Button, Card } from 'react-bootstrap';
const UserBudgetTracker = props => {
  return (
    <Card bg="white">
      <Card.Body>
        <Card.Title>Budget Tracker</Card.Title>
        <Button variant="secondary">Incomes</Button>{' '}
        <Button variant="secondary">Expenses</Button>{' '}
      </Card.Body>
    </Card>
  );
};

export default UserBudgetTracker;
