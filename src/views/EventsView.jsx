import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { loadEvents, loadSelectedEvents, setCurrentView } from '../actions';

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
import Slide from '@material-ui/core/Slide';

import EventList from '../components/EventList.jsx';
import Button from '../components/Button.jsx';
import Filter from '../containers/Filter.jsx';

import eventsViewStyle from '../assets/jss/views/eventsViewStyle.jsx';

class EventsView extends Component {
    /* eslint-disable no-undef */
    componentDidMount() {
        loadEvents();
        // chrome.storage.local.get(["selectedEvents"], (data) => {
        //     const selectedEvents = data.selectedEvents == null ? [] : data.selectedEvents;
        //     console.log(selectedEvents);
        //     store.dispatch(loadSelectedEvents(selectedEvents));
        // });
    }

    componentDidUpdate() {
        console.log(this.props);
    }

    render() {
        const { classes } = this.props;

        const saveSelectedEvents = e => {
            const { setCurrentView } = this.props;
            e.preventDefault();
            // const { selectedEvents } = store.getState();
            // chrome.storage.local.set({ selectedEvents });
            setCurrentView("NewOrdersView");
        };

        const { events, filter, search, selectedEvents } = this.props;

        let filteredEvents = [...events];
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
                        <Button color="success" className={classes.buttonsMargin} round>
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
}

EventsView.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
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