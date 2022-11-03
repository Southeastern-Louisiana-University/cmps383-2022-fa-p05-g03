import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ListingPage from "./pages/ListingPage/ListingPage";
import UserPage from "./pages/UserPage/UserPage";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="SignUpPage" element={<SignUpPage />} />
                <Route path="LoginPage" element={<LoginPage />} />
                <Route path="UserPage" element={<UserPage />} />
                <Route path="ListingPage" element={<ListingPage />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);
