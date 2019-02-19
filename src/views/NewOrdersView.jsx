import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { loadSelectedEvents, loadNewOrders, setCurrentView, setSelectedEvent } from '../actions';

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from '../components/Button.jsx';
import NewOrdersList from '../containers/NewOrdersList.jsx';
import newOrdersViewStyle from '../assets/jss/views/newOrdersViewStyle.jsx';
import { Slide } from '@material-ui/core';

class NewOrdersView extends Component {
    /* eslint-disable no-undef */
    componentWillMount() {
        const { selectedEvents, loadSelectedEvents, loadNewOrders } = this.props;
        if (!selectedEvents || selectedEvents.length == 0) {
            chrome.storage.local.get(["selectedEvents"], (data) => {
                const cachedSelectedEvents = data.selectedEvents == null ? [] : data.selectedEvents;
                console.log(`selected events from chrome store: ${cachedSelectedEvents}`);
                if (cachedSelectedEvents.length > 0) {
                    loadSelectedEvents(cachedSelectedEvents);
                    loadNewOrders(cachedSelectedEvents);
                }
            });
        }
        else {
            loadNewOrders(selectedEvents);
        }
    }

    render() {
        const { asyncStatus, classes, selectedEvents, newOrders, selectedEvent } = this.props;

        const updateCurrentView = e => {
            const { setCurrentView, setSelectedEvent } = this.props;
            setSelectedEvent("");
            setCurrentView(e.target.closest("button").dataset.view);
        }

        if (selectedEvents.length > 0) {
            const slideDirection = selectedEvent !== "" ? "right" : "left";
            return (
                <Slide direction={slideDirection} in>
                    <div className={classes.ordersView}>
                        <NewOrdersList orders={newOrders.orders}></NewOrdersList>
                        {asyncStatus.loadNewOrdersStart ? <CircularProgress color="primary"></CircularProgress> : ""}
                        <Button data-view="EventsView" color="success" round onClick={updateCurrentView}><Icon>settings</Icon></Button>
                    </div>
                </Slide>
            );
        }
        else {
            return (
                <div className={classes.ordersView}>
                    <h4>You haven't selected any events, please click <Icon>settings</Icon> to select the events to monitor booking details.</h4>
                    <Button data-view="EventsView" color="success" round onClick={updateCurrentView}><Icon>settings</Icon></Button>
                </div>
            );
        }
    }
}

NewOrdersView.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    asyncStatus: state.asyncStatus,
    newOrders: state.newOrders,
    selectedEvents: state.selectedEvents,
    selectedEvent: state.selectedEvent
});

const mapDispatchToProps = {
    loadSelectedEvents,
    loadNewOrders,
    setCurrentView,
    setSelectedEvent
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(newOrdersViewStyle)(NewOrdersView));
