import { Container, Col, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import UserNetWorth from '../components/user/UserNetWorth';
import UserBudgetTracker from '../components/user/UserBudgetTracker';
import UserPlanner from '../components/user/UserPlanner';
import useHttp from '../hooks/use-http';
import currentUserActions from '../store/currentUser-slice';
import { addStock } from '../actions/userStocksActions';

const UserPage = props => {
  const currentUser = useSelector(state => state.currentUser);

  return (
    <Container fluid>
      {currentUser.userLoggedIn && (
        <div>
          <Row>
            <Col></Col>
            <Col md="auto" sd="auto" style={{ color: 'grey', fontSize: 30 }}>
              Welcome {currentUser.userDisplayName}
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <UserNetWorth></UserNetWorth>
            </Col>
            <Col>
              <UserBudgetTracker></UserBudgetTracker>
            </Col>
            <Col>
              <UserPlanner></UserPlanner>
            </Col>
          </Row>
        </div>
      )}
      {!currentUser.userLoggedIn && (
        <Row>
          <Col></Col>
          <Col md="auto" sd="auto">
            <Link to="/login">Login with an existing account</Link>
          </Col>
          <Col></Col>
        </Row>
      )}
    </Container>
  );
};

export default UserPage;
