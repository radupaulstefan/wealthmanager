import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";

const Auth = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
      onSubmit={(ev) => {
        ev.preventDefault();
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <TextField required id="outlined-email" label="Email" type="email" />
        <TextField
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
