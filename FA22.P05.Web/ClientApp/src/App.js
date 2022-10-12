import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavBar from './components/NavBar/NavBar';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/loginPage';

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
                <NavBar title="GAME X-CHANGE" sections={sections} />
                <main>
                </main>
            </Container>
        </ThemeProvider>
    );
}
