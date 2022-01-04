import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { currentUserActions } from '../../store/currentUser-slice';

const MainNavigation = () => {
  const userLoggedIn = useSelector(state => {
    return state.currentUser.userLoggedIn;
  });
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(currentUserActions.setUserLoggedIn(false));
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/home">
          WealthManager
        </Navbar.Brand>
        <Nav className="me-auto">
          {!userLoggedIn && (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
          {userLoggedIn && (
            <Nav.Link as={Link} to="/user">
              My Portofolio
            </Nav.Link>
          )}
        </Nav>
        <Nav>
          {userLoggedIn && (
            <Nav.Link onClick={handleLogoutClick} as={Link} to="/logout">
              Logout
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
    </>
  );
};
export default MainNavigation;
