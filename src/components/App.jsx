import React from 'react';

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Header from '../components/Header.jsx';
import EventsView from '../views/EventsView.jsx';

import appStyle from '../assets/jss/components/appStyle.jsx';

const App = ({...props}) => {
  const { classes } = props;

  return (
      <div className={classes.app}>
        <Header />
        <EventsView />
      </div>
  );
}

App.propTypes =  {
  classes: PropTypes.object.isRequired
}

export default withStyles(appStyle)(App);
