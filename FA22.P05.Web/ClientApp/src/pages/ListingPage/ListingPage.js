import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import logo from "../../components/logo.png";

const theme = createTheme();

export default function Login() {
    
    return (
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
                      
                        <Typography component="h1" variant="h3" color="white">
                            All Listings
                        </Typography>
                    <Box
                        component="list"
                        noValidate
                        sx={{ mt: 3 }}
                        >
                            <Typography component="h1" variant="h5" color="white">
                                Listing 1
                            </Typography>
                            <Typography component="h1" variant="h5" color="white">
                                Listing 2
                            </Typography>
                            <Typography component="h1" variant="h5" color="white">
                                Listing 3
                            </Typography>

                        
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
        </div >
    );
}