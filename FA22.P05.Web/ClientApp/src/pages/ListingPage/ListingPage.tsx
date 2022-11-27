import { TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HeaderButton } from "../../components/MUI/HeaderButton";
import { NavButton } from "../../components/MUI/NavButton";
import { PageRoutes } from "../../models/PageRoutes";
import logo from "../../resources/logo.png";
import styles from "./_ListingPage.module.scss";
import { useEffect, useState } from "react";
import { ListingDto } from "../../constants/types";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


//Home Page for the App
export function ListingPage(): React.ReactElement {
    const [listings, setListings] = useState<ListingDto[]>([]);


    const navigate = useNavigate();

    useEffect(() => {
        axios.get<ListingDto[]>("/api/listings/active").then((response) => {
            setListings(response.data);
        });
    }, []);

    const [listing, setListing] = useState<ListingDto>();


    //Navigate to Login Page
    const navigateToLoginPage = (): void => {
        navigate(PageRoutes.LOGIN_PAGE);
    };

    //Navigate to Signup Page
    const navigateToSignupPage = (): void => {
        navigate(PageRoutes.SIGNUP_PAGE);
    };

    //Navigate to Listing Page
    const navigateToListingPage = (): void => {
        navigate(PageRoutes.LISTING_PAGE);
    };

    //Navigate to User Page
    const navigateToUserPage = (): void => {
        navigate(PageRoutes.USER_PAGE);
    };

    //Navigate to Checkout Page
    const navigateToCheckoutPage = (): void => {
        navigate(PageRoutes.CHECKOUT_PAGE);
    };
        

        const listingsToShow = listings;

        return (
            <div className={styles.listingPage}>
                {/* Custom Toolbar */}
                <div className={styles.toolbar}>
                    {/* Login, Signup, & Logo */}
                    <div className={styles.topHalf}>
                        <HeaderButton
                            onClick={navigateToLoginPage}
                            size="small"
                        >
                            LOGIN
                        </HeaderButton>
                        <img
                            alt="Game X-Change"
                            height="100"
                            src={logo}
                            width="250"
                        />
                        <HeaderButton
                            onClick={navigateToSignupPage}
                            size="small"
                        >
                            SIGNUP
                        </HeaderButton>
                    </div>

                    <div className={styles.bottomHalf}>
                        <TextField
                            color="primary"
                            focused={true}
                            placeholder="SEARCH"
                            size="small"
                            sx={{ input: { background: "black", color: "white" }, width: "25%" }}
                            variant="outlined"
                        />
                        <NavButton onClick={navigateToListingPage}> ALL LISTINGS</NavButton>
                        <NavButton onClick={navigateToUserPage}>MY LISTINGS</NavButton>
                        <NavButton onClick={navigateToCheckoutPage}>CHECKOUT</NavButton>
                    </div>
                    <div className={styles.space}>
                        <Box sx={{ p: 6 }}></Box>
                    </div>
                    <CssBaseline />
                    <div className={styles.seeListings}>
                        <Box className={styles.seeListings}
                            sx={{
                                bgcolor: "black",
                                pt: 8,
                                pb: 6,
                            }}
                        >
                            <Container>
                                <Typography
                                    component="h1"
                                    variant="h2"
                                    align="center"
                                    color="white"
                                    gutterBottom
                                >
                                    All Listings
                                </Typography>
                                <Typography align="center" >Select a listing to view closer</Typography>
                            </Container>
                        </Box>
                        <Container className={styles.seeListings}>
                            <Grid container spacing={3}>
                                {listingsToShow && listingsToShow?.map((response) => (
                                    <Grid key={response.id} xs={12} sm={6} md={4}>
                                        <Button
                                            sx={{
                                                "&:hover": {
                                                    backgroundColor: "white",
                                                    transition: "800ms",
                                                },
                                            }}
                                            onClick={() => navigate(`/listings/${response.id}`)}
                                        >
                                            <Card
                                                sx={{
                                                    height: "100%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    border: "2px solid",
                                                    borderColor: "white",
                                                }}
                                            >
                                                <CardMedia
                                                    component="img"
                                                    sx={{

                                                        pt: "20%",
                                                    }}
                                                    image="https://source.unsplash.com/random"
                                                    alt="random"
                                                />

                                                <CardContent sx={{ flexGrow: 1 }}>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="h2"
                                                    ></Typography>
                                                    <Typography
                                                        variant="h5"
                                                        sx={{
                                                            borderStyle: "double",
                                                            textcolor: "white",
                                                            borderColor: "grey",
                                                        }}
                                                    >
                                                        Title: {response.name + "\n"}
                                                        Price: {response.price + "\n"}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Button>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </div>
                </div>
                </div>
                
        );
    }
