import { Container, Col, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import UserNetWorth from '../components/user/UserNetWorth';
import UserBudgetTracker from '../components/user/UserBudgetTracker';
import UserPlanner from '../components/user/UserPlanner';
import useHttp from '../hooks/use-http';
import currentUserActions from '../store/currentUser-slice';

const UserPage = props => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  const { isLoading, error, sendRequest: userRequest } = useHttp();

  const processGetUserDataResponse = (responseObj, body) => {
    console.log(responseObj);
    dispatch(currentUserActions.setUserNetWorthStocks(body));
  };

  // getUserData(
  //   'fetch',
  //   {
  //     url: `https://react-http-7e1be-default-rtdb.firebaseio.com/`,
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   },
  //   processGetUserDataResponse
  // );

  const handleDummyButton = () => {
    userRequest(
      'fetch',
      {
        url: `https://react-http-7e1be-default-rtdb.firebaseio.com/users/${currentUser.userUID}/userData/netWorth/stocks.json`,
        method: 'POST',
        body: {
          symbol: 'UIP',
          price: '50',
          units: 400,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      processGetUserDataResponse
    );
  };
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
            <Button onClick={handleDummyButton}>Dummy</Button>
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
