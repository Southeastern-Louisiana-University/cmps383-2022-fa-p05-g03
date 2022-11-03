import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

import "./NavBar.css";
import logo from "../logo.png";

export default function Header(props) {
    const { sections, title } = props;

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
                {sections.map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.url}
                        sx={{ p: 1, flexShrink: 0 }}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
};