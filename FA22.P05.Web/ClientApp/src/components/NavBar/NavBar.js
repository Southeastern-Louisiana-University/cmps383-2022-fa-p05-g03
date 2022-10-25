import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

import NavBar from './NavBar.css';

    export default function Header(props) {
        const { sections, title } = props;

        let navigate = useNavigate();
        const SignUpPage = () => {
            let path = `./SignUpPage`;
            navigate(path);
        }

        const LoginPage = () => {
            let path = `./LoginPage`;
            navigate(path);
        }

        return (
            <React.Fragment>
                <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: "black"}}>
                    <Button variant="fill" size="small" onClick={LoginPage}>LOGIN</Button>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="white"
                        align="center"
                        noWrap
                        sx={{ flex: 1 }}
                    >
                        {title}
                    </Typography>
                    <Button variant="fill" size="small" onClick={SignUpPage} >
                        SIGNUP
                    </Button>
                </Toolbar>
                <Toolbar
                    component="nav"
                    variant="dense"
                    sx={{ justifyContent: 'space-between', overflowX: 'auto', color: "white", backgroundColor: "black" }}>
                    <TextField sx={{ input: { background: "black", color: "white" } }} variant="outlined" color="secondary" placeholder="SEARCH" size="small" focused />
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
            }),
        ).isRequired,
        title: PropTypes.string.isRequired,
    };