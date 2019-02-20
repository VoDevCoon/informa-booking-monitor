import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import logo from '../assets/images/logo.png';
import headerStyle from "../assets/jss/components/headerStyle.jsx";

const Header = ({ ...props }) => {

    const { classes, asyncStatus } = props;

    let asyncProgress = "";
    if (asyncStatus.loadEventsStart || asyncStatus.loadNewOrdersStart || asyncStatus.loadEventOrdersStart) {
        asyncProgress = <CircularProgress size="20px" className={classes.loading}></CircularProgress>;
    }

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.container}>
                <img src={logo} className={classes.logo} alt="logo" />
                <Typography variant="title" className={classes.title}>
                    Informa Booking Monitor
                </Typography>
                {asyncProgress}
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(headerStyle)(Header);