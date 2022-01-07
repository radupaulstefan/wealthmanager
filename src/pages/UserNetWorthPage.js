import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserNetWorth from '../components/user/UserNetWorth';

const UserNetWorthPage = props => {
  const currentUser = useSelector(state => state.currentUser);

  return (
    <div>
      {currentUser.userLoggedIn && (
        <div>
          <UserNetWorth></UserNetWorth>
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
    </div>
  );
};

export default UserNetWorthPage;
