import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert } from "@material-ui/lab";
import { Snackbar, StylesProvider } from "@material-ui/core";

import logo from "../../resources/logo.png";
import { PageRoutes } from "../../models/PageRoutes";
import { useNavigate } from "react-router-dom";
import styles from "./_LoginPage.module.scss";

const theme = createTheme();

//Login Page for the App
export function LoginPage(): React.ReactElement {
  const navigate = useNavigate();

  //Navigate back to Home Page
  const navigateToHomePage = (): void => {
    navigate(PageRoutes.HOME);
  };

  //Login Alert
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
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
                  <Snackbar
                    open={open}
                    autoHideDuration={4000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      variant="filled"
                    >
                      Invalid Login!
                    </Alert>
                  </Snackbar>
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
                    href="./SignUpPage"
                    variant="body2"
                  >
                    Don't have an account? Sign up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
