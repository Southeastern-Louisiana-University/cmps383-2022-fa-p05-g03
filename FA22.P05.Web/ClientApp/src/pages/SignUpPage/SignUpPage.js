import React, { useState, Redirect } from 'react';
import axios from 'axios';
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

import logo from "../../components/logo.png";

const theme = createTheme();

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [redirect, setRedirect] = useState(false);

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    let AxiosCall = (username, password, password2) => {
        console.log(username, password, password2);
        if (password === password2) {
            axios({
                method: "post",
                url: "/api/create",
                data: {
                    username: username,
                    password: password,
                },
            })
                .then((res) => {
                    if (res.status === 200) {
                        setRedirect(true);
                    }
                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log("Error", error.message);
                    }
                    console.log(error.config);
                });
        }
    };

    return !redirect ? (
        <div>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
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
                        <a href="/">
                            <img
                                src={logo}
                                alt="Game X-Change"
                                width="250"
                                height="100"
                                onClick=""
                            />
                        </a>
                        <Typography component="h1" variant="h5" color="white">
                            REGISTER
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            sx={{ mt: 3 }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
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
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
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
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
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
                                        onChange={(e) => setPassword2(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {" "}
                                </Grid>
                            </Grid>
                            <Button
                                onClick={() => {
                                    AxiosCall(username, password, password2);
                                }}
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
                                <Alert onClose={handleClose} severity="error" variant="filled">
                                    Passwords do not match!
                                </Alert>
                            </Snackbar>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="./LoginPage" variant="body2">
                                        Already have an account? Login
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    ) : (<Redirect to='/' />);
};
export default SignUp;