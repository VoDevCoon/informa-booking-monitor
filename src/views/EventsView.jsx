import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { loadEvents, loadSelectedEvents, setCurrentView } from '../actions';

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';

import EventList from '../components/EventList.jsx';
import Button from '../components/Button.jsx';
import Filter from '../containers/Filter.jsx';

import eventsViewStyle from '../assets/jss/views/eventsViewStyle.jsx';

class EventsView extends Component {
    /* eslint-disable no-undef */
    componentWillMount() {
        this.props.loadEvents();

        chrome.storage.local.get(["selectedEvents"], (data) => {
            const selectedEvents = data.selectedEvents == null ? [] : data.selectedEvents;
            console.log(`selected events from chrome store: ${selectedEvents}`);
            this.props.loadSelectedEvents(selectedEvents);
        });
    }

    render() {
        const { classes } = this.props;

        const invalidCachedEvents = e => {
            const { loadEvents } = this.props;
            e.preventDefault();
            chrome.storage.local.set({ cachedEvents: null });
            loadEvents();
        }

        const saveSelectedEvents = e => {
            const { setCurrentView, selectedEvents, loadSelectedEvents } = this.props;
            e.preventDefault();
            chrome.storage.local.set({ selectedEvents });
            loadSelectedEvents(selectedEvents);

            chrome.storage.local.set({ cachedNewOrders: null })
            setCurrentView("NewOrdersView");
        };

        const { asyncStatus, events, filter, search, selectedEvents } = this.props;

        if (asyncStatus.loadEventsStart) {
            return (
                <div className={classes.loading}>
                    <CircularProgress color="primary"></CircularProgress>
                </div>
            );
        }
        else if (asyncStatus.loadEventsError) {
            return (
                <div>
                    <h4>Error loading events, please check your network connection
                        or contact <a href="mailto:victor.zhou@informa.com.au">support</a>
                        to solve the issue.</h4>

                    <Button color="success" className={classes.buttonsMargin} round onClick={invalidCachedEvents}>
                        <Icon>cached</Icon> Retry
                    </Button>
                </div>
            );
        }
        else if (asyncStatus.loadEventsSuccess) {
            let filteredEvents = [...events.events];
            if (filter.toLowerCase() === "selected") {
                filteredEvents = _.filter(filteredEvents, (evt) => _.includes(selectedEvents, evt.eventCode));
            }
            else if (filter.toLowerCase() === "not") {
                filteredEvents = _.filter(filteredEvents, (evt) => !_.includes(selectedEvents, evt.eventCode));
            }

            if (search !== "") {
                filteredEvents = _.filter(filteredEvents, (evt) =>
                    evt.eventCode.toLowerCase().includes(search.toLowerCase()) ||
                    evt.name.toLowerCase().includes(search.toLowerCase()));
            }

            return (
                <Slide direction="right" in>

                    <div className={classes.eventsView}>
                        <Filter />
                        <EventList events={filteredEvents} />
                        <div>
                            <Button color="success" className={classes.buttonsMargin} round onClick={invalidCachedEvents}>
                                <Icon>cached</Icon> Reload
                            </Button>
                            <Button color="success" className={classes.buttonsMargin} round onClick={saveSelectedEvents}>
                                <Icon>save</Icon> Save
                            </Button>
                        </div>

                    </div>
                </Slide>
            );
        }
        return (<h1>No events.</h1>);
    }
}

EventsView.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    asyncStatus: state.asyncStatus,
    events: state.events,
    filter: state.filter,
    search: state.search,
    selectedEvents: state.selectedEvents
});

const mapDispatchToProps = {
    loadEvents,
    loadSelectedEvents,
    setCurrentView
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(eventsViewStyle)(EventsView));