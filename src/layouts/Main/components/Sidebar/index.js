import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from '@material-ui/core';
import useStyles from "./style";


const Sidebar = props => {

    const { pages, open, variant, onClose, className, ...rest } = props;
    const classes = useStyles();

    return (
        <Drawer
            anchor="left"
            classes={{ paper: classes.drawer }}
            onClose={() => onClose()}
            open={open}
            variant={variant}
        >
        </Drawer>
    );
};

Sidebar.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    variant: PropTypes.string.isRequired,
};

export default Sidebar;
