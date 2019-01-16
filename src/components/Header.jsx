import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import headerStyle from "../assets/jss/components/headerStyle.jsx";

const Header = ({ ...props }) => {

    const { classes } = props;

    return (
        <AppBar className={classes.appBar}>
            <Typography variant="title" className={classes.title}>
                Informa Booking Monitor
            </Typography>
        </AppBar>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(headerStyle)(Header);