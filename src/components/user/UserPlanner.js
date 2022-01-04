import { Button, Card } from 'react-bootstrap';

const UserPlanner = props => {
  return (
    <Card bg="white">
      <Card.Body>
        <Card.Title>My Planner</Card.Title>
        <Button variant="secondary">Calendar</Button>{' '}
        <Button variant="secondary">ToDoList</Button>{' '}
        <Button variant="secondary">Today</Button>{' '}
      </Card.Body>
    </Card>
  );
};

export default UserPlanner;
