import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, Outlet } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import background from "./components/background.mp4";

const sections = [
    { title: "CONSOLES", url: "/" },
    { title: "GAMES", url: "/" },
    { title: "ACCESSORIES", url: "/" },
    { title: "MERCH", url: "/" },
];

const theme = createTheme();

export default function App() {
    return (
        <div>
            <video
                src={background}
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1",
                }}
            />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg">
                    <NavBar title="GAME X-CHANGE" sections={sections} />
                </Container>
            </ThemeProvider>
            <Outlet />
        </div>
    );
}