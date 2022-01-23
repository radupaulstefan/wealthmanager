import { Col, Button, Form, Container } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUserActions } from '../../store/currentUser-slice';
import { useHistory } from 'react-router';
import useHttp from '../../hooks/use-http';
import { SITE_THEME } from '../../helpers/constants';

const Auth = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [emailValue, setEmailValue] = useState('');

  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [passwordValue, setPasswordValue] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const { isLoading, error, sendRequest: sendLoginRequest } = useHttp();

  const handleFormSubmit = ev => {
    ev.preventDefault();
    if (!emailIsValid || emailValue.length === 0) return;
    if (!passwordIsValid || passwordValue.length === 0) return;

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const processSignInResponse = responseObj => {
      dispatch(currentUserActions.setUserLoggedIn(true));
      dispatch(currentUserActions.setUserDisplayName(responseObj.displayName));
      dispatch(currentUserActions.setUserTokenId(responseObj.idToken));
      dispatch(currentUserActions.setUserUID(responseObj.localId));
      dispatch(currentUserActions.setHomePageMode(true));
      history.push({
        pathname: 'networth',
      });
    };

    sendLoginRequest(
      'fetch',
      {
        url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYZkf_sG0vyaKHH4I-D_wNaCMpSCAQ_GY',
        method: 'POST',
        body: {
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      processSignInResponse
    );

    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  const handleEmailChange = ev => {
    setEmailValue(ev.target.value);
  };

  const handlePasswordChange = ev => {
    setPasswordValue(ev.target.value);
  };

  const handleSignUp = () => {
    history.push({
      pathname: 'signup',
    });
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setEmailIsValid(emailValue.includes('@') || emailValue.length === 0);
      setPasswordIsValid(
        passwordValue.trim().length > 8 || passwordValue.trim().length === 0
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailValue, passwordValue]);

  return (
    <Container>
      <Col>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="text"
              placeholder="Enter email"
              style={{ backgroundColor: `${emailIsValid ? '' : 'pink'}` }}
              onChange={handleEmailChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              style={{ backgroundColor: `${passwordIsValid ? '' : 'pink'}` }}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Button variant={`${SITE_THEME}`} type="submit">
            Sign In
          </Button>{' '}
          <Button
            onClick={handleSignUp}
            variant={`${SITE_THEME}`}
            type="submit"
          >
            Sign Up
          </Button>
          {isLoading && <p>Logging In...</p>}
        </Form>
      </Col>
    </Container>
  );
};

export default Auth;
