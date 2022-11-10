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
import { Snackbar } from "@material-ui/core";

import logo from "../../resources/logo.png";
import { PageRoutes } from "../../models/PageRoutes";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
import styles from "./_SignupPage.module.scss";

/**
 * <description here>
 */
export function SignupPage(): React.ReactElement {
  const navigate = useNavigate();
  const navigateToHomePage = (): void => {
    navigate(PageRoutes.HOME);
  };

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
          <Box
            sx={{
              marginTop: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "black",
              padding: "25px 25px 25px 25px",
              border: 3,
              borderColor: "white",
            }}
          >
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
                    helperText="Must be at least 8 characters and include one capital letter, number, and special character"
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
                onSubmit={(e) => e.preventDefault()}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="inherit"
              >
                Submit
              </Button>
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
                  Passwords do not match!
                </Alert>
              </Snackbar>
              <Grid
                container
                justifyContent="flex-end"
              >
                <Grid item>
                  <Link
                    href="./LoginPage"
                    variant="body2"
                  >
                    Already have an account? Login
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
