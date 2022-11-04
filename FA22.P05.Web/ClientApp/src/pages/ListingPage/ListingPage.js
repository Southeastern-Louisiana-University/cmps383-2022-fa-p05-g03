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
import axios from "axios";
import { ApiResponse, ListingDto } from "../../constants/types";
import { useEffect, useState } from "react";

import logo from "../../components/logo.png";

const theme = createTheme();

export const Listings = () => {
    const [listings, setListings] = useState < ApiResponse() < ListingDto();
    const [didLoad, setDidLoad] = useState(false);
    const [Error, setError] = useState("");
   // const history = useHistory();

    useEffect(() => {
        axios({
            method: 'get',
            url: `/api/listings`,
            responseType: 'stream'
        })
                .then(function (response) {
                    console.log("message");
                    if (response.data.hasErrors) {
                        response.data.errors.forEach((err) => {
                            console.error(`${err.property}: ${err.message}`);
                            setError(err.message);
                        });
                    }
                    setListings(response.data);
                    setDidLoad(true);
                });
    }, []);

    if (Error !== "") {
        return <div>Error Occurred</div>;
    } else if (!didLoad) {
        return (
            <div style={{ height: "100%", width: "100%" }} className="ui segment">
                <div className="ui active dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
            </div>
        );
    }
    const listingsToShow = listings?.data;

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
                            <Container>
                                
                            </Container>
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