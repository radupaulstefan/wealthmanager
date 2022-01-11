import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserNetWorth from '../components/user/UserNetWorth';
import '../App.css';

const UserNetWorthPage = props => {
  const currentUser = useSelector(state => state.currentUser);

  return (
    <>
      <Row>
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
      </Row>
      <div class="container testimonial-group">
        <div class="row text-center">
          <div class="col-4">1</div>
          <div class="col-4">2</div>
          <div class="col-4">3</div>
          <div class="col-4">4</div>
          <div class="col-4">5</div>
          <div class="col-4">6</div>
          <div class="col-4">7</div>
          <div class="col-4">8</div>
          <div class="col-4">9</div>
        </div>
      </div>
    </>
  );
};

export default UserNetWorthPage;
