import * as React from "react";
import { AppBar, Toolbar, List, ListItem, ListItemText, Container, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const useStyles = makeStyles((theme) => ({
    navbarDisplayFlex: {
        display: `inline-flex`,
        marginLeft: '0%',
    },
    navDisplayFlex: {
        display: `inline-flex`,
        paddingLeft: 575,
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        background: 'black',
        color: 'white',
        borderRadius: '0px',
        '&:hover': {
            background: 'green',
            boxShadow: "0px 2px 10px #888888",
        },
    },
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.25),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.50),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
        padding: theme.spacing(2.5, 0, 0, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
                width: '30ch',
            },
        },
    },
}));

const navLinks = [
    { title: `contact`, path: `/` },
    { title: `register`, path: `/pages/SignUpPage` },
    { title: `login`, path: `/pages/LoginPage` },
];

const Header = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <AppBar position="static" style={{ background: 'linear-gradient(to right, #f7ff00, #db36a4)' }}>
            <Toolbar >
                <Container maxWidth="md" className={classes.navbarDisplayFlex}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <List
                        component="nav"
                        aria-labelledby="main navigation"
                        className={classes.navDisplayFlex}
                    >
                        {navLinks.map(({ title, path }) => (
                            <a href={path} key={title} className={classes.linkText}>
                                <ListItem button >
                                    <ListItemText primary={title} />
                                </ListItem>
                            </a>
                        ))}
                    </List>
                </Container>
            </Toolbar>
        </AppBar>
    );
};
export default Header;