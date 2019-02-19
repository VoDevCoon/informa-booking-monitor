import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Header from '../components/Header.jsx';
import SnackBar from '../components/SnackBar';
import EventsView from '../views/EventsView.jsx';
import NewOrdersView from '../views/NewOrdersView.jsx';
import EventOrdersView from '../views/EventOrdersView.jsx';

import appStyle from '../assets/jss/components/appStyle.jsx';

const App = ({ ...props }) => {
  const { classes, currentView } = props;

  const renderView = (currentView) => {
    // console.log("render view: " + currentView);
    // console.log(store.getState());
    switch (currentView) {
      case "EventsView":
        return (
          <EventsView />
        );
      case "NewOrdersView":
        return (
            <NewOrdersView />
        );
      case "EventOrdersView":
        return (<EventOrdersView />
            
        );
      default:
        return (
          <NewOrdersView />
        );
    }
  }

  return (
    <div className={classes.app}>
      <Header className={classes.header} />
      <div className={classes.view}>
        {renderView(currentView)}
      </div>
      <SnackBar />
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  currentView: state.currentView
});

export default connect(
  mapStateToProps
)(withStyles(appStyle)(App));
