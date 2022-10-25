import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ListingPage from './pages/ListingPage/ListingPage';
import UserPage from './pages/UserPage/UserPage';

const sections = [
    { title: 'CONSOLES', url: '/' },
    { title: 'GAMES', url: '/' },
    { title: 'ACCESSORIES', url: '/' },
    { title: 'MERCH', url: '/' },
];

const theme = createTheme();

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <NavBar title="GAME X-CHANGE" sections={sections} >
                    <HomePage>
                        <Link to="/HomePage">HomePage</Link>
                    </HomePage>
                    <SignUpPage>
                        <Link to="/SignUpPage">SignUpPage</Link>
                    </SignUpPage>
                    <LoginPage>
                        <Link to="/LoginPage">LoginPage</Link>
                    </LoginPage>
                    <UserPage>
                        <Link to="/UserPage">UserPage</Link>
                    </UserPage>
                    <ListingPage>
                        <Link to="/ListingPage">ListingPage</Link>
                    </ListingPage>
                </NavBar>
            </Container>
        </ThemeProvider>
    );
}