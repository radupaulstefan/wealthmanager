import { Col, Button, Form, Container } from 'react-bootstrap';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { currentUserActions } from '../../store/currentUser-slice';
import { useHistory } from 'react-router';
import useHttp from '../../hooks/use-http';
import { Link } from 'react-router-dom';
import { SITE_THEME } from '../../helpers/constants';

const CreateUser = () => {
  const dispatch = useDispatch();
  const [errorText, setErrorText] = useState('');
  const history = useHistory();
  const { isLoading, error, sendRequest: sendCreateAccount } = useHttp();
  const {
    isUpdatingData,
    isUpdatingDataError,
    sendRequest: updateUserProfile,
  } = useHttp();

  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const handleFormSubmit = ev => {
    ev.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const firstNameValue = firstNameRef.current.value;
    const lastNameValue = lastNameRef.current.value;

    if (enteredEmail.length === 0) {
      setErrorText('Please insert an email address');
      return;
    }

    if (firstNameValue.length === 0) {
      setErrorText('Please type the your first name');
      return;
    }
    if (lastNameValue.length === 0) {
      setErrorText('Please type the your last name');
      return;
    }
    if (enteredPassword.length === 0) {
      setErrorText('Please type a password');
      return;
    }

    const processCreateAccountResponse = createAccountObj => {
      const firstNameValue = firstNameRef.current.value;
      const lastNameValue = lastNameRef.current.value;
      updateUserProfile('fetch', {
        url: 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCYZkf_sG0vyaKHH4I-D_wNaCMpSCAQ_GY',
        method: 'POST',
        body: {
          idToken: createAccountObj.idToken,
          displayName: firstNameValue + ' ' + lastNameValue,
          returnSecureToken: false,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch(currentUserActions.setUserLoggedIn(true));
      dispatch(currentUserActions.setUserTokenId(createAccountObj.idToken));
      dispatch(
        currentUserActions.setUserDisplayName(
          firstNameValue + ' ' + lastNameValue
        )
      );
      dispatch(currentUserActions.setUserUID(createAccountObj.localId));
      history.push({
        pathname: 'networth',
      });
    };

    sendCreateAccount(
      'fetch',
      {
        url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYZkf_sG0vyaKHH4I-D_wNaCMpSCAQ_GY',
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
      processCreateAccountResponse
    );

    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  const showErrorText = errorText.length !== 0;

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
            />
            <Form.Text className="text-muted">
              Type an email to be used for your account.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              ref={firstNameRef}
              type="text"
              placeholder="Type your first name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              ref={lastNameRef}
              type="text"
              placeholder="Type your first name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
            <Form.Text className="text-muted">
              Choose a strong password.
            </Form.Text>
          </Form.Group>
          {!isLoading && (
            <Button variant={`${SITE_THEME}`} type="submit">
              Create account
            </Button>
          )}{' '}
          {!isLoading && (
            <Link to="/login">Login with an existing account</Link>
          )}
          {isLoading && <p>Waiting for account creation</p>}
          {showErrorText && (
            <Form.Group>
              <Form.Text style={{ color: 'red' }}>{errorText}</Form.Text>
            </Form.Group>
          )}
        </Form>
      </Col>
    </Container>
  );
};

export default CreateUser;
