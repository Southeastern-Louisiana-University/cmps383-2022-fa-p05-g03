import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import logo from '../../components/logo.png';
import background from '../../components/background.mp4';

const theme = createTheme();

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 6,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            background: 'black',
                            padding: '25px 25px 25px 25px',
                            border: 3,
                            borderColor: 'white'
                        }}
                    >
                        <a href="/">
                            <img src={logo} alt="Game X-Change" width="250" height="100" onClick="" />
                        </a>
                        <Typography component="h1" variant="h5" color="white">
                            REGISTER
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField sx={{ input: { background: "white", color: "black" } }}
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        variant="filled"
                                        color="secondary"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField sx={{ input: { background: "white", color: "black" } }}
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        variant="filled"
                                        color="secondary"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField sx={{ input: { background: "white", color: "black" } }}
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        variant="filled"
                                        color="secondary"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField sx={{ input: { background: "white", color: "black" } }}
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
                                <Grid item xs={12}> </Grid>
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
    );
}