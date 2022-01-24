import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { useRef } from "react";
import useHttp from "../../hooks/use-http";
import { useDispatch } from "react-redux";
import { currentUserActions } from "../../store/currentUser-slice";
import { useRouter } from "next/router";

const Auth = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoading, error, sendRequest: sendLoginRequest } = useHttp();

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    console.log(enteredEmail, enteredPassword);

    const processSignInResponse = (responseObj) => {
      dispatch(currentUserActions.setUserLoggedIn(true));
      dispatch(currentUserActions.setUserDisplayName(responseObj.displayName));
      dispatch(currentUserActions.setUserTokenId(responseObj.idToken));
      dispatch(currentUserActions.setUserUID(responseObj.localId));
      dispatch(currentUserActions.setHomePageMode(true));
      router.push("/networth");
    };

    sendLoginRequest(
      "fetch",
      {
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYZkf_sG0vyaKHH4I-D_wNaCMpSCAQ_GY",
        method: "POST",
        body: {
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      processSignInResponse
    );

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="on"
      onSubmit={handleFormSubmit}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <TextField
          inputRef={emailRef}
          required
          id="outlined-email"
          label="Email"
          type="email"
        />
        <TextField
          inputRef={passwordRef}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {" "}
          <Button variant="contained" type="submit">
            Sign In
          </Button>{" "}
          <Button variant="outlined">Sign Up</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Auth;
