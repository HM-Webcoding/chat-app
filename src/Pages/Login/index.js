import React from "react";
import "../Login/style.css";
import { Container, Grid } from "@mui/material";
import Signin from "../../svg/signin";
import LoginForm from "./Login";
const Login = () => {
  return (
    <>
      <div className="login">
        <Container fixed>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Signin />
            </Grid>
            <Grid item xs={5}>
              <LoginForm />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Login;
