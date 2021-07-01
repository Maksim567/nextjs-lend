import React, {useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Toolbar, Hidden, List, ListItem, IconButton, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {DarkModeToggler} from "../../../../components/atoms";
import useStyles from "./style";


const Topbar = ({themeMode, themeToggler, onSidebarOpen, pages, className, ...rest}) => {

    const classes = useStyles();

    return (
        <Toolbar disableGutters className={classes.toolbar} {...rest}>
            <div className={classes.logoContainer}>
                <a href="/" title="thefront">
                    Avito messenger
                </a>
            </div>
            <div className={classes.flexGrow}/>
            <Hidden smDown>
                <List disablePadding className={classes.navigationContainer}>
                    <ListItem><a href="/">Pricing</a></ListItem>
                    <ListItem><a href="">why us</a></ListItem>
                    <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
                        <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()}/>
                    </ListItem>
                    <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
                        <Button
                            variant="outlined"
                            component="a"
                            href="/"
                        >Sign In</Button>
                    </ListItem>
                    <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
                        <Button
                            variant="contained"
                            color="primary"
                            component="a"
                            target="blank"
                            href="/"
                            className={classes.listItemButton}
                        >Sign Up</Button>
                    </ListItem>
                </List>
            </Hidden>
            <Hidden mdUp>
                <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()}/>
                <IconButton
                    className={classes.iconButton}
                    onClick={onSidebarOpen}
                    aria-label="Menu"
                >
                    <MenuIcon/>
                </IconButton>
            </Hidden>
        </Toolbar>
    );
};

Topbar.propTypes = {
    className: PropTypes.string,
    onSidebarOpen: PropTypes.func,
    pages: PropTypes.object.isRequired,
    themeToggler: PropTypes.func.isRequired,
    themeMode: PropTypes.string.isRequired,
};

export default Topbar;
