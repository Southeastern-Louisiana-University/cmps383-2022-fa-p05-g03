import React, { useMemo } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { Form, Formik } from "formik";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
//import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import logo from "../../resources/logo.png";
import { PageRoutes } from "../../models/PageRoutes";
import styles from "./_SignupPage.module.scss";
import { CreateUserDto } from "../../models/types";
import { TextField } from "@mui/material";

const theme = createTheme();

//Signup Page for the App
export function SignupPage(): React.ReactElement {
  const navigate = useNavigate();
  const initialValues = useMemo<CreateUserDto>(
    () => ({
      username: "",
      password: "",
    }),
    []
  );

  const submitRegister = (values: CreateUserDto) => {
    axios.post<CreateUserDto>("api/users/new", values).then(() => {
      console.log("Registered Sucessfully!");
      navigate(PageRoutes.LOGIN_PAGE);
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
              alt="Game X-Change"
              width="250"
              height="100"
              onClick={navigateToHomePage}
            />
            <Typography
              component="h1"
              variant="h5"
              color="white"
            >
              REGISTER
            </Typography>
            <Formik
              initialValues={initialValues}
              onSubmit={submitRegister}
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
                      <TextField
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
                      <TextField
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
                      <TextField
                        sx={{ input: { background: "white", color: "black" } }}
                        required
                        fullWidth
                        name="password2"
                        label="Confirm Password"
                        type="password"
                        id="password2"
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
                        to={PageRoutes.LOGIN_PAGE}
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
