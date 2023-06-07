import "./style.css";
import { Container, Grid } from "@mui/material";
import React from "react";
import Forms from "./Forms";
import SignUp from "../../svg/signup";

const Registration = () => {
  return (
    <>
      <div className="registration">
        <Container fixed>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Forms />
            </Grid>
            <Grid item xs={6}>
              <SignUp />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Registration;
