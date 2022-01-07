import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { currentUserActions } from '../../store/currentUser-slice';
import { SITE_THEME } from '../../helpers/constants';

const MainNavigation = () => {
  const userLoggedIn = useSelector(state => {
    return state.currentUser.userLoggedIn;
  });
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(currentUserActions.logout());
    dispatch(currentUserActions.setHomePageMode(false));
  };

  return (
    <>
      <Navbar bg={`${SITE_THEME}`} variant={`${SITE_THEME}`}>
        <Navbar.Brand
          onClick={() => {
            dispatch(currentUserActions.setHomePageMode(false));
          }}
          as={Link}
          to="/home"
        >
          WealthManager
        </Navbar.Brand>
        <Nav className="me-auto">
          {!userLoggedIn && (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
          {userLoggedIn && (
            <Nav.Link
              onClick={() => {
                dispatch(currentUserActions.setHomePageMode(true));
              }}
              as={Link}
              to="/networth"
            >
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
