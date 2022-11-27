import React, { useMemo } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { Field, Form, Formik } from "formik";

import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
//import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { LoginDto } from "../../models/types";
import logo from "../../resources/logo.png";
import { PageRoutes } from "../../models/PageRoutes";
import styles from "./_LoginPage.module.scss";

const theme = createTheme();

//Login Page for the App
export function LoginPage(): React.ReactElement {
  const navigate = useNavigate();
  const initialValues = useMemo<LoginDto>(
    () => ({
      username: "",
      password: "",
    }),
    []
  );

  const submitLogin = (values: LoginDto) => {
    axios.post<LoginDto>("api/authentication/login", values).then(() => {
      console.log("Successfully logged in!");
      navigate(PageRoutes.HOME);
    });
  };

  //Navigate back to Home Page
  const navigateToHomePage = (): void => {
    navigate(PageRoutes.HOME);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
        >
          <CssBaseline />
          <Box className={styles.box}>
            <img
              className={styles.img}
              src={logo}
              width="250"
              height="100"
              alt="Game X-Change"
              onClick={navigateToHomePage}
            />
            <Typography
              component="h1"
              variant="h5"
              color="white"
            >
              LOGIN
            </Typography>
            <Formik
              initialValues={initialValues}
              onSubmit={submitLogin}
            >
              <Form>
                <Box
                  component="form"
                  noValidate
                  sx={{ mt: 3 }}
                >
                  <Grid
                    container
                    spacing={2}
                  >
                    <Grid
                      item
                      xs={12}
                    >
                      <Field
                        sx={{ input: { background: "white", color: "black" } }}
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        variant="filled"
                        color="secondary"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                    >
                      <Field
                        sx={{ input: { background: "white", color: "black" } }}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        variant="filled"
                        color="secondary"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                    >
                      {" "}
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    color="inherit"
                  >
                    Submit
                  </Button>
                  <Grid
                    container
                    justifyContent="flex-end"
                  >
                    <Grid item>
                      <Link
                        component={RouterLink}
                        to={PageRoutes.SIGNUP_PAGE}
                        variant="body2"
                      >
                        Don't have an account? Sign up
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            </Formik>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
