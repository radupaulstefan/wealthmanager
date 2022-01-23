import { Button, Card } from 'react-bootstrap';
import { SITE_THEME } from '../../helpers/constants';

const UserPlanner = props => {
  return (
    <Card bg="white">
      <Card.Body>
        <Card.Title>My Planner</Card.Title>
        <Button variant={`${SITE_THEME}`}>Calendar</Button>{' '}
        <Button variant={`${SITE_THEME}`}>ToDoList</Button>{' '}
        <Button variant={`${SITE_THEME}`}>Today</Button>{' '}
      </Card.Body>
    </Card>
  );
};

export default UserPlanner;
