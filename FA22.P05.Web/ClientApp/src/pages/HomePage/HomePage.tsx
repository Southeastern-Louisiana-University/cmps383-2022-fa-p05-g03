import { TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { HeaderButton } from "../../components/MUI/HeaderButton";
import { NavButton } from "../../components/MUI/NavButton";
import { PageRoutes } from "../../models/PageRoutes";
import logo from "../../resources/logo.png";
import styles from "./_HomePage.module.scss";

//Home Page for the App
export function HomePage(): React.ReactElement {
  const navigate = useNavigate();

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

  return (
    <div className={styles.homePage}>
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

        {/* Search Bar & Links */}
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
      </div>
    </div>
  );
}
