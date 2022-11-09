import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

import "./NavBar.css";
import logo from "../logo.png";

export default function Header() {
    let navigate = useNavigate();
    const SignUpPage = () => {
        let path = `./SignUpPage`;
        navigate(path);
    };

    const LoginPage = () => {
        let path = `./LoginPage`;
        navigate(path);
    };

    return (
        <React.Fragment>
            <Toolbar
                sx={{
                    borderLeft: 3,
                    borderRight: 3,
                    borderColor: "white",
                    backgroundColor: "black",
                    justifyContent: "space-between",
                }}
            >
                <Button variant="fill" size="small" onClick={LoginPage}>
                    LOGIN
                </Button>
                <img src={logo} alt="Game X-Change" width="250" height="100" />
                <Button variant="fill" size="small" onClick={SignUpPage}>
                    SIGNUP
                </Button>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{
                    borderLeft: 3,
                    borderRight: 3,
                    borderBottom: 3,
                    borderColor: "white",
                    justifyContent: "space-between",
                    overflowX: "auto",
                    color: "white",
                    backgroundColor: "black",
                }}
            >
                <TextField
                    sx={{ input: { background: "black", color: "white" } }}
                    variant="filled"
                    color="white"
                    placeholder="SEARCH"
                    size="small"
                    focused
                />
                <ul>
                    <li>
                        <Link to="/">LISTINGS</Link>
                    </li>
                    <li>
                        <Link to="/about">USER</Link>
                    </li>
                    <li>
                        <Link to="/users">CHECKOUT</Link>
                    </li>
                </ul>
            </Toolbar>
        </React.Fragment>
    );
}
